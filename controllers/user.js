var User = require('../models/user');
var mongoose = require('mongoose')
var ObjectID = mongoose.Types.ObjectId;


//app.get('/tests/:id', authenticate, (req,res) => {
exports.getUser = (req,res, next) => {
	
	console.log('Yeee');

	var id = req.params.id;
	
	console.log(id);
	
	if (!ObjectID.isValid(id)) {
		return res.status(404).send({});
	}

	User.findOne({
		_id: id,
	}).then((user) => {
		if (!user) {
			return res.status(404).send({});
		}
		res.send({user});
	}).catch((e) => {
		res.status(400).send({});
	});

};
