import { prisma } from "./db";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { User } from "@prisma/client";

const JWT_SECRET = "test";

type RequestWithUserId = { userId: number } & Request;

export const registerUser = async (
  email: string,
  password: string
): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: "kamal",
    },
  });
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  return token;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  return token;
};

export const logoutUser = () => {
  return { message: "Logged out" };
};

export const authenticateUser = (
  req: RequestWithUserId,
  res: Response,
  next: Function
) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as { userId: number };
    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const authMiddleware = (
  req: RequestWithUserId,
  res: Response,
  next: Function
) => {
  cookieParser()(req, res, () => {
    authenticateUser(req, res, next);
  });
};
