import dotenv from 'dotenv';

dotenv.config({path: __dirname + `/../../.env.${process.env.NODE_ENV}`});

const config = {
    dbUrl: process.env.DB_URL,
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
};

export default config;
