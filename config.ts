import dotenv from "dotenv";
import path from "path";

const environment = process.env.NODE_ENV || "development"; // Default to 'development'
const envFile = path.resolve(process.cwd(), `.env.${environment}`);

dotenv.config({ path: envFile });

export default {
  baseURL: process.env.BASE_URL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};
