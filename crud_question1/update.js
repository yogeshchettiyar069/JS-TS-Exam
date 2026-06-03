const conn = require("./db");
const sql = "update customer set age = ? where name = ?";

conn.query(sql, [29, "Yogesh"], (err) => {
    if(err) throw err;
    console.log("data updated");
    
});