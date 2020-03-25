var express = require('express');
var app = express();
var user = require('./routes/user');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// var myLogger = function(req, res, next) {
//     console.log(req.url);
//     next();
// };

// app.use(myLogger);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static('pub'));

// app.use('/', express.static('pub')); 가 앞에 있으면 우선권을 가져 pub 폴더안에 index.html 파일이 실행된다.
// app.get('/', function(req, res) { 부분이 앞에 있으면 Hello world가 페이지에 뜬다.

app.use('/user', user);


app.listen(3000, function() {
    console.log('Example App is listening on port 3000');
});