var {ClassOfTeacher} = require('../models/ClassOfTeacher');
var mongoose = require('mongoose')
var ObjectID = mongoose.Types.ObjectId;

//app.post('/tests', authenticate, (req,res) => {
exports.newClassOfTeacher = (req,res,next) => {
	console.log("new ClassOfTeacher");
	var classOfTeacher = new ClassOfTeacher({
		subject: req.body.subject,
		name: req.body.name,
		grade: req.body.grade,
		_creator: req.user._id
	});
	classOfTeacher.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
};

//app.get('/tests', authenticate, (req,res) => {
exports.getClassesOfTeacher = function(req,res,next) {
	ClassOfTeacher.find({
		_creator: req.user._id
	}).then((classesOfTeacher) => {
    console.log(classesOfTeacher);
    res.send({
      classesOfTeacher
		});
	}, (err) => {
		res.status(400).send(err);
	});
};

exports.getClassOfTeacher = function(req,res,next) {
	ClassOfTeacher.find({
		_id: req.params.id
	}).then((classOfTeacher) => {
    console.log(classOfTeacher);
    res.send({
      classOfTeacher
		});
	}, (err) => {
		res.status(400).send(err);
	});
};

//app.get('/tests/:id', authenticate, (req,res) => {
// exports.getTest = (req,res, next) => {
// 	var id = req.params.id;
// 	console.log(id);
// 	if (!ObjectID.isValid(id)) {
// 		return res.status(404).send({});
// 	}
// 	Test.findOne({
// 		_id: id,
// 	}).then((test) => {
// 		if (!test) {
// 			return res.status(404).send({});
// 		}
// 		res.send({test});
// 	}).catch((e) => {
// 		res.status(400).send({});
// 	});
// };