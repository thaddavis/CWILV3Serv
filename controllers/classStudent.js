var {ClassStudent} = require('../models/ClassStudent');
var mongoose = require('mongoose')
var ObjectID = mongoose.Types.ObjectId;

//app.post('/tests', authenticate, (req,res) => {
exports.newClassStudent = (req,res,next) => {
	console.log("new ClassStudent");
	console.log(req.body);
	var classStudent = new ClassStudent({
		classID: req.body.classID,
		studentID: req.body.studentID
	});
	classStudent.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
};

//app.get('/tests', authenticate, (req,res) => {
exports.getStudentsInClass = function(req,res,next) {
	ClassStudent.find({
		classID: req.body.classID
	}).then((classStudents) => {
    	res.send({
      		classStudents
		});
	}, (err) => {
		res.status(400).send(err);
	});
};

exports.getStudentClasses = function(req,res,next) {

	console.log("getStudentClasses");
	console.log(req.body);

	ClassStudent.find({
		studentID: req.body.studentID
	}).then((studentClasses) => {
    	res.send({
      		studentClasses
		});
	}, (err) => {
		res.status(400).send(err);
	});	

};