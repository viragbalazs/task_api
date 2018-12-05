const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const exphb = require('express-handlebars');
//  const methodOverride = require('method-override');
const tasks = require('./controllers/tasks');

//  app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
//  app.engine('handlebars', exphb({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

app.use('/tasks', tasks);

app.listen(process.env.PORT);
