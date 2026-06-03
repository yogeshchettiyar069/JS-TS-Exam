const conn = require("./db");
const sql = "delete from customer where id = ?";

conn.query(sql, [1], (err) => {
    if(err) throw err;
    console.log("data deleted");
    
});