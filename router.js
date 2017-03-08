const Authentication = require('./controllers/authentication');
const User = require('./controllers/user');
const Question = require('./controllers/question');
const GradeStandard = require('./controllers/gradeStandard');
const TestAttempt = require('./controllers/testAttempt');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {

  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'authenticated' });
  });

  app.get('/role', requireAuth, function(req, res) {
    res.send({ role: req.user.role });
  });

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.post('/questions', requireAuth, Question.newQuestion);
  app.get('/questions', requireAuth, Question.getQuestions);
  app.get('/questions/:id', requireAuth, Question.getQuestion);
  app.delete('/questions/:id', requireAuth, Question.deleteQuestion);
  app.patch('/questions/:id', requireAuth, Question.patchQuestion);

  app.get('/gradeStandards', requireAuth, GradeStandard.getGradeStandards);
  app.get('/gradeStandards/:id', requireAuth, GradeStandard.getGradeStandard);

}
