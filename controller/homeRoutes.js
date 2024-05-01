const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  const loggedIn = req.session.loggedIn || false; // Check if user is logged in
  const name = req.session.name || ''; // Get the name from session or set it to an empty string
  
  res.redirect('/homepage', { loggedIn, name }); // Pass the loggedIn and name variables to the template
});
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      
      return;
    }
    res.render('login');
  });


  module.exports = router;