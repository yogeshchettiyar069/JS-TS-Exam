const conn = require("./db");
const sql = "insert into customer(name, age, address) values (?,?,?)";

conn.query(sql, ["Yogesh", 20, "Borivali West"], (err,result) => {
    if(err) throw err;
    console.log("data inserted");
    
});

