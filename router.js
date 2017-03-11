const Authentication = require('./controllers/authentication');
const User = require('./controllers/user');
const Question = require('./controllers/question');
const GradeStandard = require('./controllers/gradeStandard');

const TestAttempt = require('./controllers/testAttempt');
const Test = require('./controllers/test');

const ClassOfTeacher = require('./controllers/classOfTeacher');
const ClassStudent = require('./controllers/classStudent');
const ClassGrade = require('./controllers/classGrade');
const ClassTest = require('./controllers/classTest');
const TestResponse = require('./controllers/testResponse');

const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {

  app.get('/', requireAuth, function(req, res) {
    res.send({ 
      userID: req.user._id,
      message: 'authenticated' });
  });

  app.get('/role', requireAuth, function(req, res) {
    res.send({ role: req.user.role });
  });

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.post('/users/:id', requireAuth, User.getUser);

  app.post('/questions', requireAuth, Question.newQuestion);
  app.get('/questions', requireAuth, Question.getQuestions);
  app.get('/questions/:id', requireAuth, Question.getQuestion);
  app.delete('/questions/:id', requireAuth, Question.deleteQuestion);
  app.patch('/questions/:id', requireAuth, Question.patchQuestion);

  app.post('/tests', requireAuth, Test.newTest);
  app.get('/tests', requireAuth, Test.getTests);
  app.get('/tests/:id', requireAuth, Test.getTest);
  app.delete('/tests/:id', requireAuth, Test.deleteTest);
  app.patch('/tests/:id', requireAuth, Test.patchTest);

  app.get('/gradeStandards', requireAuth, GradeStandard.getGradeStandards);
  app.get('/gradeStandards/:id', requireAuth, GradeStandard.getGradeStandard);

  app.post('/classes', requireAuth, ClassOfTeacher.newClassOfTeacher);
  app.get('/classes', requireAuth, ClassOfTeacher.getClassesOfTeacher);
  app.get('/classes/:id', requireAuth, ClassOfTeacher.getClassOfTeacher);

  app.post('/getClassGradesForStudent', requireAuth, ClassGrade.getClassGradesForStudent );
  app.post('/newClassGrade', requireAuth, ClassGrade.newClassGrade );

  app.post('/newStudents', requireAuth, ClassStudent.newClassStudent);
  app.post('/students', requireAuth, ClassStudent.getStudentsInClass);
  app.post('/studentClasses', requireAuth, ClassStudent.getStudentClasses);

  app.post('/newClassTest', requireAuth, ClassTest.newClassTest );
  app.get('/getClassTests', requireAuth, ClassTest.getClassTests );
  app.get('/testsForClass/:classID', requireAuth, ClassTest.getTestsForClass);

  app.get('/testResponse/:result', TestResponse.newTestResponse);

}
