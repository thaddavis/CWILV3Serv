var {GradeStandard} = require('../models/gradeStandard');

//app.post('/tests', authenticate, (req,res) => {
// exports.newGradeStandard = (req,res, next) => {
// 	var gradeStandard = new GradeStandard({
// 		states: req.body.states,
// 		grades: req.body.grades,
// 		subjects: req.body.subjects,
// 		domain: req.body.domain,
// 		standard: req.body.standard,
// 		genre: req.body.genre,
// 		_creator: req.user._id
// 	});
// 	gradeStandard.save().then((doc) => {
// 		res.send(doc);
// 	}, (err) => {
// 		res.status(400).send(err);
// 	});
// };

//app.get('/tests', authenticate, (req,res) => {
exports.getGradeStandards = function(req,res, next) {

	GradeStandard.find({
	}).then((gradeStandards) => {
    console.log(gradeStandards);
    res.send({
      gradeStandards
		});
	}, (err) => {
		res.status(400).send(err);
	});
};

//app.get('/tests/:id', authenticate, (req,res) => {
exports.getGradeStandard = (req,res, next) => {
	var id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send({});
	}
	GradeStandard.findOne({
		_id: id,
	}).then((gradeStandard) => {
		if (!gradeStandard) {
			return res.status(404).send({});
		}
		res.send({gradeStandard});
	}).catch((e) => {
		res.status(400).send({});
	});
};

//app.delete('/tests/:id', authenticate, (req,res) => {
// exports.deleteGradeStandard = (req,res, next) => {
// 	// get the id
// 	var id = req.params.id;
// 	// validate the id -> not valid? return 404
// 	if (!ObjectID.isValid(id)) {
// 		return res.status(404).send({});
// 	}
// 	// remove todo by id
// 	GradeStandard.findOneAndRemove({
// 		_id: id,
// 		_creator: req.user._id
// 	}).then((gradeStandard) => {
// 		// success
// 		// if no doc, send 404
// 		if (!gradeStandard) {
// 			return res.status(404).send({});
// 		}
// 		// if doc, send back 200
// 		res.send({gradeStandard});
// 	}).catch((e) => {
// 		// error
// 		// 400 with empty body
// 		res.status(400).send({})
// 	});
// };

//app.patch('/tests/:id', authenticate, (req,res) => {
// exports.patchGradeStandard = (req,res, next) => {
// 	var id = req.params.id;
// 	var body = _.pick(req.body, ['text', 'completed']);
// 	if (!ObjectID.isValid(id)) {
// 		return res.status(404).send({});
// 	}
// 	GradeStandard.findOneAndUpdate({
// 		_id: id,
// 		_creator: req.user._id
// 	}, {$set: body}, {new: true}).then((gradeStandard) => {
// 		if (!gradeStandard) {
// 			return res.status(404).send();
// 		}
// 		res.send({gradeStandard});
// 	}).catch((e) => {
// 		res.status(400).send();
// 	});
// };
