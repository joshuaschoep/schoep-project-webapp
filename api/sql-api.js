const mysql = require('mysql');
const fs = require('fs');

MYSQL_CONFIG_PATH = '/home/ubuntu/.config/mysql.conf.json';

const pool = mysql.createPool(
	JSON.parse(fs.readFileSync(MYSQL_CONFIG_PATH))
);

exports.get_applications = function(next) {
	pool.query('SELECT * FROM card_groups', function (error, results, fields){
		if(error){
			console.log(error);
		}
		next(results);
	});
}

exports.get_cards = function(group_id, next) {
	pool.query('SELECT * FROM card WHERE group_id = ' + group_id, function(error, results, fields){
		if(error){
			console.log(error);
		}
		next(results);
	});
}
