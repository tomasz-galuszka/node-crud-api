const dbConfig = require('../config/db-config.js');
const mysql = require('mysql');

let runSQL = (sql, onSuccess, onError) => {

	let connection = mysql.createConnection(dbConfig);

	connection.connect();

	return connection.query(sql, (err, result) => {
		if (err) {
			onError(err);
		} else {
			onSuccess(result);	
		}
		
		connection.end();
	});
};


exports.findAll = (onSuccess, onError) => {
	runSQL('SELECT id, name FROM features', onSuccess, onError);
}

exports.findSingle = (entityId, onSuccess, onError) => {
	runSQL('SELECT id, name FROM features WHERE id = ' + entityId, (rows) => {
		onSuccess(rows[0]);
	}, onError);
}

exports.create = (entity, onSuccess, onError) => {
	runSQL('INSERT INTO features(name) VALUES(\'' + entity.name + '\')', onSuccess, onError);
}

exports.update = (entity, onSuccess, onError) => {
	runSQL('UPDATE features SET name = \'' + entity.name + '\' WHERE id = ' + entity.id, onSuccess, onError);	
}

exports.delete = (entityId, onSuccess, onError) => {
	runSQL('DELETE FROM features WHERE id = ' + entityId, onSuccess, onError);	
}