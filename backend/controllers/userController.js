import User from '../models/User.js';

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      retirementAge: user.retirementAge,
      monthlyIncome: user.monthlyIncome,
      monthlyInvestment: user.monthlyInvestment,
      currentSavings: user.currentSavings,
      riskProfile: user.riskProfile,
      location: user.location,
      dependents: user.dependents,
      goals: user.goals,
      planHistory: user.planHistory
    });
  } catch (error) {
    console.error('Get current user failed:', error);
    return res.status(500).json({ message: 'Unable to fetch user details' });
  }
};

export const updateCurrentUser = async (req, res) => {
  try {
    const allowedFields = [
      'name',
      'age',
      'retirementAge',
      'monthlyIncome',
      'monthlyInvestment',
      'currentSavings',
      'riskProfile',
      'location',
      'dependents',
      'goals'
    ];

    const updates = {};

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      retirementAge: user.retirementAge,
      monthlyIncome: user.monthlyIncome,
      monthlyInvestment: user.monthlyInvestment,
      currentSavings: user.currentSavings,
      riskProfile: user.riskProfile,
      location: user.location,
      dependents: user.dependents,
      goals: user.goals,
      planHistory: user.planHistory
    });
  } catch (error) {
    console.error('Update current user failed:', error);
    return res.status(500).json({ message: 'Unable to update profile' });
  }
};
