var {Test} = require('../models/test');
var mongoose = require('mongoose')
var ObjectID = mongoose.Types.ObjectId;

//app.post('/tests', authenticate, (req,res) => {
exports.newTest = (req,res,next) => {
	console.log("new Test");
	var test = new Test({
		name: req.body.name,
		questions: req.body.questions,
		_creator: req.user._id
	});
	test.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
};

//app.get('/tests', authenticate, (req,res) => {
exports.getTests = function(req,res,next) {
	
	Test.find({
		_creator: req.user._id
	}).then((tests) => {
    console.log(tests);
    res.send({
      tests
		});
	}, (err) => {
		res.status(400).send(err);
	});

};

//app.get('/tests/:id', authenticate, (req,res) => {
exports.getTest = (req,res, next) => {
	var id = req.params.id;
	console.log(id);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send({});
	}
	Test.findOne({
		_id: id,
	}).then((test) => {
		if (!test) {
			return res.status(404).send({});
		}
		res.send({test});
	}).catch((e) => {
		res.status(400).send({});
	});
};

//app.delete('/tests/:id', authenticate, (req,res) => {
exports.deleteTest = (req,res,next) => {
	// get the id
	var id = req.params.id;
	// validate the id -> not valid? return 404
	if (!ObjectID.isValid(id)) {
		return res.status(404).send({});
	}
	// remove todo by id
	Test.findOneAndRemove({
		_id: id,
		_creator: req.user._id
	}).then((test) => {
		// success
		// if no doc, send 404
		if (!test) {
			return res.status(404).send({});
		}
		// if doc, send back 200
		res.send({test});
	}).catch((e) => {
		// error
		// 400 with empty body
		res.status(400).send({})
	});
};

//app.patch('/tests/:id', authenticate, (req,res) => {
exports.patchTest = (req,res,next) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['questions', 'name']);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send({});
	}
	Test.findOneAndUpdate({
		_id: id,
		_creator: req.user._id
	}, {$set: body}, {new: true}).then((test) => {
		if (!test) {
			return res.status(404).send();
		}
		res.send({test});
	}).catch((e) => {
		res.status(400).send();
	});
};
