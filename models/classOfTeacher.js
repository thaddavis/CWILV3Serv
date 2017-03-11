var mongoose = require('mongoose');
const uuidV4 = require('uuid/v4');

var ClassOfTeacher = mongoose.model('ClassOfTeacher', {
  name: String,
  grade: {
    type: String,
    enum: ["PRE-K", "K", "1", "2", "3", "4", "5", "6", "7", "8"]
  },
  _creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
  subject: String,
  enrollmentCode: { type : String, default: uuidV4() }
});

module.exports = { ClassOfTeacher };
