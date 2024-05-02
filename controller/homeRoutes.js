const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    const name = req.session.name || ''; // Get the name from session or set it to an empty string
    res.render('dashboard', { loggedIn: true, name }); // Pass the loggedIn and name variables to the template
  } else {
    res.render('homepage'); // Render the homepage if the user is not logged in
  }
});
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      
      return;
    }
    res.render('login');
  });


  module.exports = router;