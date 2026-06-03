const mysql = require("mysql2");
const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Yogesh456#",
    database : "js_exam"
})

conn.connect ((err) => {
    if(err) throw err
    console.log("database connected");
    
})