const express = require('express');
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + "/public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', routes)

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('EXPRESS SERVER RUNNING ON PORT:', PORT);
  });
});
