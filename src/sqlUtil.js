let mysql_pool = require("./sqlPool");
let util = require("./utils");

function addOption(optionName) {
    return new Promise((resolve) => {
        mysql_pool.getConnection(function (err, conn) {
            let optionId = util.getOptionId()
            if (err) {
                console.log(err)
                resolve(0)
                return;
            }
            let sql = 'INSERT INTO options(id,optionCode,content) VALUES(?,?,?)';
            let addSqlParams = [0, optionId, optionName];
            conn.query(sql, addSqlParams, function (err, rows, fields) {
                if (err) {
                    resolve(0)
                    console.log(err)
                    return;
                }
                resolve(1)
            })
            mysql_pool.releaseConnection(conn);
        })
    })
}

module.exports = {
    addOption
};