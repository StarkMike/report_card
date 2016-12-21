var express = require('express');
var app = express();
var engine = 'html';
var server = require('http').createServer(app);
var port = process.env.PORT || 5000;

app.engine(engine, require('ejs').renderFile);
app.use(require('body-parser')());
app.use('/assets', express.static('./assets'));
app.set('views', './views');
app.set('view engine', engine);

app.route('/')
  .get(function(req, res) {
    res.render('index');
  })
  .post(function(req, res) {
    res.json({ message: 'sweet' });
  });

server.listen(port, function () {
  console.log('Listening at http://%s:%s', this.address().address, this.address().port);
});
