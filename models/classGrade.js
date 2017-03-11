var mongoose = require('mongoose');

var ClassGrade = mongoose.model('ClassGrade', {
	taskID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	grade: Number,
	studentID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	classID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

module.exports = { ClassGrade };
