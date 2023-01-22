import { Request, Response, NextFunction } from 'express';
import { ILogin } from '../../interfaces/login.interface';

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email } : ILogin = req.body;

  if (!email) return res.status(400).json({ message: 'All fields must be filled' });

  next();
};
export default loginValidation;
