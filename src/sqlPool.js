var mysql = require('mysql2');

var mysql_pool = mysql.createPool({
    host: '110.42.179.113',
    user: 'root',
    password: 'password',
    database: 'settingApp',
});


module.exports = mysql_pool;
