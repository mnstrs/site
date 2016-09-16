var express = require('express');
var app = express();

app.listen(3000, function());

app.use(express.static('/static'));