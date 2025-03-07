import { registerAs } from "@nestjs/configs";

export default registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET,
}));