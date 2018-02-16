var mysql = require('mysql');
var config = require('../config'); //connection to the database

var connect = mysql.createConnected({
	host: config.host,
	port: config.port,
	user: config.user,
	password: config.password,
	database: config.database,
});

module.exports = connect;