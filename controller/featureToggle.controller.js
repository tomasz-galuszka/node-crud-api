const dao = require('../dao/featureToggle.dao.js');

exports.findAll = (req, res, next) => {
	dao.findAll((data) => {
		res.send(data);
	}, next);
};

exports.findSingle = (req, res, next) => {
	dao.findSingle(req.params.featureId, (data) => {
		res.send(data);
	}, next);
};

exports.create = (req, res, next) => {
	dao.create(req.body, (data) => {
		res.send(data);
	}, next);
};

exports.update = (req, res, next) => {
	dao.update(req.body, (data) => {
		res.send(data);
	}, next);
};

exports.delete = (req, res, next) => {
	dao.delete(req.params.featureId, (data) => {
		res.send(data);
	}, next);
};