import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    targetCorpus: { type: Number, required: true },
    targetYear: { type: Number, required: true },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' }
  },
  { _id: false }
);

const planSnapshotSchema = new mongoose.Schema(
  {
    createdAt: { type: Date, default: Date.now },
    summary: { type: String },
    projection: { type: Object },
    aiInsights: { type: [String], default: [] }
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    age: { type: Number, default: 30 },
    retirementAge: { type: Number, default: 60 },
    monthlyIncome: { type: Number, default: 50000 },
    monthlyInvestment: { type: Number, default: 10000 },
    currentSavings: { type: Number, default: 500000 },
    riskProfile: { type: String, enum: ['conservative', 'moderate', 'aggressive'], default: 'moderate' },
    location: { type: String, default: 'India' },
    dependents: { type: Number, default: 0 },
    goals: { type: [goalSchema], default: [] },
    planHistory: { type: [planSnapshotSchema], default: [] }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
