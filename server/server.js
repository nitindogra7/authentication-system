import express from 'express';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import SingUpRoute from './routes/auth.routes.js';
import User from './models/user.model.js';

dotenv.config();

connectDB();
await User.syncIndexes();

const app = express();
app.use(express.json({ extend: true }));

app.get('/', (req, res) => {
  res.send('working');
});

app.use('/auth', SingUpRoute);

app.listen(
  process.env.PORT || 3000,
  console.log(`server running on ${process.env.PORT} || 3000 `)
);
