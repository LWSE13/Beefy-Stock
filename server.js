const express = require('express');
const routes = require('./controller');
const sequelize = require('./config/connection');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;
const exphbs = require('express-handlebars');

const hbs = exphbs.create({});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(require('./controller/index.js'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});