const mysql = require('mysql');

const sql = mysql.createConnection({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT),
	hostname: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	parseJSON: true
});

sql.connect();

module.exports = sql;