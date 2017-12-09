var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beau Brissette',
    msg: 'There\'s nothing you could have done, Luke, had you been there. You\'d have been killed, too, and the droids would be in the hands of the Empire. I want to come with you to Alderaan. There\'s nothing here for me now. I want to learn the ways of the Force and become a Jedi like my father. Mos Eisley Spaceport. You will never find a more wretched hive of scum and villainy. We must be cautious. How long have you had these droids? About three or four seasons. They\'re for sale if you want them.'});
});

router.get('/index', function(req, res, next) {
  res.render('index', {title: 'Beau Brissette',
      msg: 'There\'s nothing you could have done, Luke, had you been there. You\'d have been killed, too, and the droids would be in the hands of the Empire. I want to come with you to Alderaan. There\'s nothing here for me now. I want to learn the ways of the Force and become a Jedi like my father. Mos Eisley Spaceport. You will never find a more wretched hive of scum and villainy. We must be cautious. How long have you had these droids? About three or four seasons. They\'re for sale if you want them.'});
});

router.get('/about', function(req, res, next){
  res.render('about', {title: 'Beau Brissette',
  msg: 'How did I get into this mess? I really don\'t know how. We seem to be made to suffer. It\'s our lot in life. I\'ve got to rest before I fall apart. My joints are almost frozen. What a desolate place this is. Where are you going? Well, I\'m not going that way. It\'s much too rocky. This way is much easier. What makes you think there are settlements over there? Don\'t get technical with me. What mission? What are you talking about? I\'ve had just about enough of you! Go that way! You\'ll be malfunctioning within a day, you nearsighted scrap pile! And don\'t let me catch you following me begging for help, because you won\'t get it. No more adventures. I\'m not going that way',
  msg2: 'There\'s nothing you could have done, Luke, had you been there. You\'d have been killed, too, and the droids would be in the hands of the Empire. I want to come with you to Alderaan. There\'s nothing here for me now. I want to learn the ways of the Force and become a Jedi like my father. Mos Eisley Spaceport. You will never find a more wretched hive of scum and villainy. We must be cautious. How long have you had these droids? About three or four seasons. They\'re for sale if you want them.'});
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Beau Brissette'}); //changes the title on the page localhost:3000
});

router.post('/form', function(req, res, next) {
  res.render('results', { name: req.body.name, email: req.body.email, messages: req.body.message}); //email can be changed to whatever the input is on the page
});

module.exports = router;
