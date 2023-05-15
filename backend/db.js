import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "piyush@mysql",
    database: "student_mental_health"
})

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Database connected successfully")
})