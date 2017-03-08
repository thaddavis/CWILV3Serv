var {Question} = require('../models/question');
var mongoose = require('mongoose')
var ObjectID = mongoose.Types.ObjectId;

//app.post('/tests', authenticate, (req,res) => {
exports.newQuestion = (req,res, next) => {
	var question = new Question({
		states: req.body.states,
		grades: req.body.grades,
		subjects: req.body.subjects,
		domain: req.body.domain,
		standard: req.body.standard,
		genre: req.body.genre,
		_creator: req.user._id
	});
	question.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
};

//app.get('/tests', authenticate, (req,res) => {
exports.getQuestions = function(req,res, next) {

	Question.find({
	}).then((questions) => {
    console.log(questions);
    res.send({
      questions
		});
	}, (err) => {
		res.status(400).send(err);
	});
};

//app.get('/tests/:id', authenticate, (req,res) => {
exports.getQuestion = (req,res, next) => {
	var id = req.params.id;
	console.log(id);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send({});
	}
	Question.findOne({
		_id: id,
	}).then((question) => {
		if (!question) {
			return res.status(404).send({});
		}
		res.send({question});
	}).catch((e) => {
		res.status(400).send({});
	});
};

//app.delete('/tests/:id', authenticate, (req,res) => {
exports.deleteQuestion = (req,res, next) => {
	// get the id
	var id = req.params.id;
	// validate the id -> not valid? return 404
	if (!ObjectID.isValid(id)) {
		return res.status(404).send({});
	}
	// remove todo by id
	Question.findOneAndRemove({
		_id: id,
		_creator: req.user._id
	}).then((question) => {
		// success
		// if no doc, send 404
		if (!question) {
			return res.status(404).send({});
		}
		// if doc, send back 200
		res.send({question});
	}).catch((e) => {
		// error
		// 400 with empty body
		res.status(400).send({})
	});
};

//app.patch('/tests/:id', authenticate, (req,res) => {
exports.patchQuestion = (req,res, next) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send({});
	}
	Question.findOneAndUpdate({
		_id: id,
		_creator: req.user._id
	}, {$set: body}, {new: true}).then((question) => {
		if (!question) {
			return res.status(404).send();
		}
		res.send({question});
	}).catch((e) => {
		res.status(400).send();
	});
};
