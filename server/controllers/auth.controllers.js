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
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUND)
    );
    await User.create({ email, username, password: hashedPassword });
    res
      .status(201)
      .json({ success: true, message: 'user created successfully' });
  } catch (err) {
    if (err.code === 11000)
      return res
        .status(400)
        .json({ success: false, message: 'user already exists' });
    console.log(err);
    res.status(500).json({ success: false, message: 'internal server error' });
  }
};

export default signUpController;
