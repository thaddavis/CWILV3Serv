var { ClassTest } = require('../models/ClassTest');
var mongoose = require('mongoose')
var ObjectID = mongoose.Types.ObjectId;

//app.post('/tests', authenticate, (req,res) => {
exports.newClassTest = (req,res,next) => {
	console.log("new ClassTest");
	console.log(req.body);
	var classTest = new ClassTest({
		testID: req.body.testid,
		assignedToClassID: req.body.class,
		startTime: req.body.time
	});
	classTest.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
};

exports.getTestsForClass = (req,res, next) => {
	console.log('getTestsForClass');
	console.log(req.params);
	var id = req.params.classID;
	console.log(id);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send({});
	}
	ClassTest.find({
		assignedToClassID: id,
	}).then((tests) => {

		if (!tests) {
			return res.status(404).send({});
		}
		res.send({tests});
	}).catch((e) => {
		res.status(400).send({});
	});
};

//app.get('/tests', authenticate, (req,res) => {
exports.getClassTests = function(req,res,next) {
	console.log("getClassTests");
	console.log(req.body);
	ClassTests.find({
		
	}).then((classTests) => {
    	res.send({
      		classTests
		});
	}, (err) => {
		res.status(400).send(err);
	});
};


