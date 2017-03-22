var mongoose = require('mongoose');

var TestResponse = mongoose.model('TestResponse', {
  result: [String],
  testID: {
  	type: mongoose.Schema.Types.ObjectId,
	  required: true
  },
  studentID: {
  	type: mongoose.Schema.Types.ObjectId,
	  required: true
  },
  classID: {
    type: mongoose.Schema.Types.ObjectId,
	  required: true
  },
  created_at: { type : Date, default: Date.now }
});

module.exports = { TestResponse };
