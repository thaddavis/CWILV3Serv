var mongoose = require('mongoose');

var Test = mongoose.model('Test', {
  name: String,
  created_at: { type : Date, default: Date.now },
	questions: [String],
  _creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

module.exports = { Test };
