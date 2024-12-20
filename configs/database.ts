import mysql from "mysql2/promise";

export const connection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.MY_SQL_USER_NAME,
            password: process.env.MY_SQL_PASSWORD,
            database: process.env.DATABASE_NAME,
        })

        return connection;
    } catch (error) {
        console.log(error);
    }
}
