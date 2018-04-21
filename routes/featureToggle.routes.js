module.exports = (app) => {
	const featureToggles = require('../controller/featureToggle.controller.js');

	app.get('/feature', featureToggles.findAll);

	app.get('/feature/:featureId', featureToggles.findSingle);

	app.post('/feature', featureToggles.create);

	app.put('/feature', featureToggles.update);

	app.delete('/feature/:featureId', featureToggles.delete);

};