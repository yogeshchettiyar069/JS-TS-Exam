const conn = require("./db");
const sql = "select * from customer";

conn.query(sql, [], (err, result) => {
    if(err) throw err;
    console.log(result);
    
    
});