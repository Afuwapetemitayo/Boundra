import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
    database_url: process.env.DATABASE_URL,
    gemini_api_key: process.env.GEMINI_API_KEY,
    jwt_secret: process.env.JWT_SECRET,
    port: process.env.PORT,
    gmail_user: process.env.GMAIL_USER,
    gmail_pass: process.env.GMAIL_PASS,
    gmail_port: process.env.GMAIL_PORT,
}