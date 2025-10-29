import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const createToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET environment variable');
  }

  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = createToken(user._id);

    return res.status(201).json({
      token,
      user: {
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
        goals: user.goals
      }
    });
  } catch (error) {
    console.error('Register user failed:', error);
    return res.status(500).json({ message: 'Unable to register user' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = createToken(user._id);

    return res.json({
      token,
      user: {
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
        goals: user.goals
      }
    });
  } catch (error) {
    console.error('Login user failed:', error);
    return res.status(500).json({ message: 'Unable to login' });
  }
};
