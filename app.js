var express = require('express');
var swig = require('swig');

var app = express();

app.use('/static', express.static('build/'));


var render = {
    index: require('./server/render/index'),
    about: require('./server/render/about')
};
var api = require('./server/api/api');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './app/templates');

app.use('/static', 'build/')

app.get('/', render.index);
app.get('/about', render.about);


app.get('/api/api1', api.api1);
app.get('/api/api2/list1', api.api2.list1);

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Listen 3000');
});