var { TestResponse } = require('../models/testResponse');
var mongoose = require('mongoose')
var ObjectID = mongoose.Types.ObjectId;

//app.post('/tests', authenticate, (req,res) => {
exports.newTestResponse = (req,res, next) => {
	console.log("newTestResponse");
	console.log(req.params);
	var testResponse = new TestResponse({
		result: req.params.result
	});
	testResponse.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
};