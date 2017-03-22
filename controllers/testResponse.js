var { TestResponse } = require('../models/testResponse');
var mongoose = require('mongoose')
var ObjectID = mongoose.Types.ObjectId;

//app.post('/tests', authenticate, (req,res) => {
exports.newTestResponse = (req,res, next) => {
	console.log("newTestResponse");
	console.log(req.body);
	var testResponse = new TestResponse({
		result: req.body.studentTestResponse,
		testID: req.body.testID,
		studentID: req.body.studentID,
		classID: req.body.classID
	});
	testResponse.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
};

exports.testResponsesForStudentInClass = (req,res,next) => {
		console.log("testResponsesForStudentInClass");
		console.log(req.body);

		TestResponse.find({
			classID: req.body.classID,
			studentID: req.body.studentID
		}).then((studentResponses) => {
	    	res.send({
	      	studentResponses
				});
		}, (err) => {
			res.status(400).send(err);
		});
};
