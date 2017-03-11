var mongoose = require('mongoose');

var TestResponse = mongoose.model('TestResponse', {
  result: String,
  testID: {
  	type: mongoose.Schema.Types.ObjectId,
	required: true,
	default: '58c40ea4152cf9154cf14cd4'
  },
  studentID: {
  	type: mongoose.Schema.Types.ObjectId,
	required: true,
	default: '58b37cafcb927d145f08fe5a'
  },
  created_at: { type : Date, default: Date.now }
});

module.exports = { TestResponse };
