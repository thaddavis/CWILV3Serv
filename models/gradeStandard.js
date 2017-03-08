var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var docSchema = new Schema({},{ "strict": false });
var GradeStandard = mongoose.model( "GradeStandard", docSchema );

// var GradeStandard = mongoose.model('GradeStandard', {
//   grade: String,
//   nig: String,
//   domains: Schema.Types.Mixed
// });

module.exports = { GradeStandard };
