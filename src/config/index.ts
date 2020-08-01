import mongoose from 'mongoose';

export function connectDB() {
  return mongoose.connect('mongodb://localhost/webee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
