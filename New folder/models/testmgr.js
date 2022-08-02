var db_mesjid = require("./dbmgr");
var db = db_mesjid.db;

exports.getNames = () =>{
    const sql = "SELECT * FROM test";
    let stmt = db.prepare(qry);
    let res = stmt.all();
    return res;

}

exports.addName = (newName) => {
    const sql = 'INSERT INTO test (name) VALUES('${newName}')';
    db.run(sql);

}