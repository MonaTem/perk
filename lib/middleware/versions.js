const config = require('../config');
const pjson = require('../../package.json');
module.exports = function(req, res, next) {
	res.locals.env = config.env;
	res.locals.version = pjson.version;
	next();
};