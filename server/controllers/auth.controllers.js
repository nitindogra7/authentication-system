import { success } from 'zod';
import User from '../models/user.model.js';
import { registerSchema } from '../schemas/user.schema.js';
import bcrypt from 'bcrypt';

const signUpController = async (req, res) => {
  try {
    const result = registerSchema.safeParse(req.body);
    if (!result.success) {
      const error = result.error.issues.map((err) => err.message);
      return res.status(400).json({ success: false, message: error });
    }
    const { email, username, password } = result.data;
    const userExists = await User.findOne({ $or: [{ email, username }] });
    if (userExists)
      return res.status(409).json({
        success: false,
        message: 'user already exists',
      });
    const saltRounds = Number(process.env.SALT_ROUNDS);
    if (isNaN(saltRounds))
      return res.status(500).json({ success: false, message: 'server broke' });
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.create({ email, username, password: hashedPassword });
    res
      .status(201)
      .json({ success: true, message: 'user created successfully' });
  } catch (err) {
    if (err.code === 11000)
      return res
        .status(409)
        .json({ success: false, message: 'user already exists' });
    console.error(err);
    res.status(500).json({ success: false, message: 'internal server error' });
  }
};

export default signUpController;
