const router = require('express').Router();


router.get('/', async (req, res) => {
  res.render('homepage');
});
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;