const mysql = require('mysql');
const fs = require('fs');

MYSQL_CONFIG_PATH = '/home/ubuntu/.config/mysql.conf.json';

const connection = mysql.createConnection(
	JSON.parse(fs.readFileSync(MYSQL_CONFIG_PATH))
);

connection.connect(function(err) {
	if (err) throw err;
	console.log("API connected to MYSQL DB");
});

exports.get_applications = function(next) {
	connection.query('SELECT * FROM card_groups', function (error, results, fields){
		if(error){
			console.log(error);
		}
		next(results);
	});
}

exports.get_cards = function(group_id, next) {
	connection.query('SELECT * FROM card WHERE group_id = ' + group_id, function(error, results, fields){
		if(error){
			console.log(error);
		}
		next(results);
	});
}
