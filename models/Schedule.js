import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model('Schedule', scheduleSchema);
