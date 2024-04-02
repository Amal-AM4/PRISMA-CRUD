var express = require('express');
const subjectController = require('../controllers/Subject-Controller');
const studentController = require('../controllers/Student-Controller')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/displaySubject', subjectController.displaySubject);

router.get('/addStudent', studentController.viewSubject);
router.post('/addStudent', studentController.addStudent);

router.get('/displayStudent', studentController.displayStudent);

router.get('/deleteStudent/:id', studentController.removeStudent);
router.get('/singleView/:uuid', studentController.singleView);

router.get('/report', studentController.deletedRecord);

module.exports = router;
