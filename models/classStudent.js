var mongoose = require('mongoose');

var ClassStudent = mongoose.model('ClassStudent', {
	classID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	studentID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

module.exports = { ClassStudent };
