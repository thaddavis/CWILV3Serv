var mongoose = require('mongoose');

var ClassTest = mongoose.model('ClassTest', {
	testID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	assignedToClassID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	startTime: {
		type: Date,
		required: true
	}
});

module.exports = { ClassTest };
