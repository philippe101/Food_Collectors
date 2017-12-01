var mysql = require("mysql");


var connection = mysql.createConnection({
	// port: 3000,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'foodcollectors'
});





connection.connect(function (err) {
	if (err) {
			console.error('error connecting:  ' + err.stack);
			return;
	}
	console.log('connected as id ' + connection.threadId);
});


module.exports = connection;