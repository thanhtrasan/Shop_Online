var mysql = require('mysql');
var Promise = require('promise');


exports.load = (sql) => {
    return new Promise((resolve, reject) =>
    {
        var cn = mysql.createConnection({
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '123456',
            database: 'qlquanao'
        });

        cn.connect();
        cn.query(sql, function(error, rows, fields) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
            	resolve(rows);
            }
        });
    });
}