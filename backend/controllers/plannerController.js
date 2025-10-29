import User from '../models/User.js';
import { getGeminiSuggestions } from '../services/geminiService.js';

const parseNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const calculateReturnRate = (riskProfile) => {
  switch (riskProfile) {
    case 'conservative':
      return 0.08;
    case 'aggressive':
      return 0.13;
    default:
      return 0.1;
  }
};

const calculateProjection = ({
  currentAge,
  retirementAge,
  currentSavings,
  monthlyInvestment,
  expectedReturnRate,
  inflationRate
}) => {
  const yearsToRetirement = Math.max(retirementAge - currentAge, 0);
  const months = yearsToRetirement * 12;
  const monthlyRate = expectedReturnRate / 12;

  let futureValueOfSIP = 0;
  if (monthlyRate === 0) {
    futureValueOfSIP = monthlyInvestment * months;
  } else {
    futureValueOfSIP = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  }

  const futureValueOfCurrent = currentSavings * Math.pow(1 + expectedReturnRate, yearsToRetirement);
  const totalFutureCorpus = futureValueOfSIP + futureValueOfCurrent;
  const inflationAdjustedCorpus = totalFutureCorpus / Math.pow(1 + inflationRate, yearsToRetirement);

  return {
    yearsToRetirement,
    totalFutureCorpus: Math.round(totalFutureCorpus),
    inflationAdjustedCorpus: Math.round(inflationAdjustedCorpus),
    monthlyInvestment,
    monthlyRate: +(monthlyRate * 100).toFixed(2)
  };
};

export const generateRetirementPlan = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const {
      currentAge = user.age,
      retirementAge = user.retirementAge,
      monthlyIncome = user.monthlyIncome,
      monthlyInvestment = user.monthlyInvestment,
      currentSavings = user.currentSavings,
      riskProfile = user.riskProfile,
      inflationRate = 0.06,
      goals = user.goals
    } = req.body;

    const numericCurrentAge = parseNumber(currentAge, user.age);
    const numericRetirementAge = parseNumber(retirementAge, user.retirementAge);
    const numericMonthlyIncome = parseNumber(monthlyIncome, user.monthlyIncome);
    const numericMonthlyInvestment = parseNumber(monthlyInvestment, user.monthlyInvestment);
    const numericCurrentSavings = parseNumber(currentSavings, user.currentSavings);
    const numericInflationRate = parseNumber(inflationRate, 0.06);

    const sanitizedRiskProfile = ['conservative', 'moderate', 'aggressive'].includes(riskProfile)
      ? riskProfile
      : user.riskProfile;

    const expectedReturnCandidate = Number(req.body.expectedReturnRate);
    const expectedReturnRate = Number.isFinite(expectedReturnCandidate) && expectedReturnCandidate > 0
      ? expectedReturnCandidate
      : calculateReturnRate(sanitizedRiskProfile);

    const projection = calculateProjection({
      currentAge: numericCurrentAge,
      retirementAge: numericRetirementAge,
      currentSavings: numericCurrentSavings,
      monthlyInvestment: numericMonthlyInvestment,
      expectedReturnRate,
      inflationRate: numericInflationRate
    });

    const summary = `With a monthly investment of ₹${numericMonthlyInvestment.toLocaleString('en-IN')} at an expected return of ${(expectedReturnRate * 100).toFixed(1)}%, you could accumulate approximately ₹${projection.totalFutureCorpus.toLocaleString('en-IN')} by age ${numericRetirementAge}. Adjusting for inflation, this equates to ₹${projection.inflationAdjustedCorpus.toLocaleString('en-IN')} in today's value.`;

    const normalizedGoals = Array.isArray(goals)
      ? goals.map((goal) => ({
          title: goal.title,
          targetCorpus: parseNumber(goal.targetCorpus, 0),
          targetYear: parseNumber(goal.targetYear, numericRetirementAge)
        }))
      : [];

    const goalText = normalizedGoals.length
      ? normalizedGoals
          .map((goal) => `${goal.title} (₹${goal.targetCorpus.toLocaleString('en-IN')} by ${goal.targetYear})`)
          .join(', ')
      : 'No specific secondary financial goals provided.';

    const prompt = `You are an experienced Indian SEBI-registered retirement planner.
User profile:
- Age: ${numericCurrentAge}
- Retirement Age Target: ${numericRetirementAge}
- Monthly Income: ₹${numericMonthlyIncome}
- Monthly Investment Capacity: ₹${numericMonthlyInvestment}
- Existing Retirement Savings: ₹${numericCurrentSavings}
- Risk Profile: ${sanitizedRiskProfile}
- Goals: ${goalText}

Provide tailored Indian market investment guidance, including recommended asset allocation split (equity, debt, gold, NPS, EPF/PPF, mutual funds), tax-saving ideas, and actionable next steps to stay on track for retirement. Keep suggestions clear and prioritised.`;

    const defaultSuggestions = [
      'Maintain a diversified portfolio across equity mutual funds, NPS, EPF/PPF, and debt instruments based on risk appetite.',
      'Review retirement corpus annually and increase SIP contributions by at least 5-10% every year to beat inflation.',
      'Leverage Section 80C, 80D, and NPS additional deduction under Section 80CCD(1B) for efficient tax planning.'
    ];

    const aiSuggestions = await getGeminiSuggestions(prompt, defaultSuggestions);

    user.planHistory.unshift({ summary, projection, aiInsights: aiSuggestions });
    user.planHistory = user.planHistory.slice(0, 10);
    await user.save();

    return res.json({
      summary,
      projection,
      aiSuggestions
    });
  } catch (error) {
    console.error('Generate retirement plan failed:', error);
    return res.status(500).json({ message: 'Unable to generate retirement plan right now' });
  }
};

export const getInvestmentSuggestions = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const {
      lumpSumAmount = 0,
      investmentHorizonYears = 10,
      riskProfile = user.riskProfile,
      monthlyInvestment = user.monthlyInvestment
    } = req.body;

    const numericLumpSum = parseNumber(lumpSumAmount, 0);
    const numericHorizon = parseNumber(investmentHorizonYears, 10);
    const numericMonthlyInvestment = parseNumber(monthlyInvestment, user.monthlyInvestment);
    const sanitizedRiskProfile = ['conservative', 'moderate', 'aggressive'].includes(riskProfile)
      ? riskProfile
      : user.riskProfile;

    const prompt = `Provide investment suggestions for an Indian investor with the following profile:
- Risk Profile: ${sanitizedRiskProfile}
- Monthly SIP Contribution: ₹${numericMonthlyInvestment}
- Additional Lump Sum: ₹${numericLumpSum}
- Investment Horizon: ${numericHorizon} years

Suggest specific Indian investment options (equity mutual fund categories, index funds, PPF, EPF, NPS, RBI bonds, tax-free bonds, REITs, etc.), asset allocation, and tips to mitigate risk while maximising returns.`;

    const defaultSuggestions = [
      'Allocate SIPs across large-cap, flexi-cap, and mid-cap equity mutual funds for growth.',
      'Consider NPS Tier 1 for retirement corpus with additional tax deduction under Section 80CCD(1B).',
      'Use PPF or debt mutual funds for stability and emergency corpus, and review allocation annually.'
    ];

    const aiSuggestions = await getGeminiSuggestions(prompt, defaultSuggestions);

    return res.json({
      aiSuggestions
    });
  } catch (error) {
    console.error('Get investment suggestions failed:', error);
    return res.status(500).json({ message: 'Unable to fetch investment suggestions' });
  }
};
