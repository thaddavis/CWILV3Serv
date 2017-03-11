var mongoose = require('mongoose');

var Question = mongoose.model('Question', {
	states: [String],
  grades: [{
    type: String,
    enum: ["PRE-K", "K", "1", "2", "3", "4", "5", "6", "7", "8"]
  }],
  subjects: [String],
  domain: String,
  standard: String,
  genre: {
    type: String,
    enum: ["Drag & Drop", "Click Sequence", "Fill in the Blank"]
  },
  rating: Number,
  questionFile: String,
  questionFileGraded: String,
  js: String,
	_creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

module.exports = { Question };
