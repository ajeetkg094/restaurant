const express = require('express');
const app = express();
const port = 4000;
var bodyParser = require('body-parser')
var fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '/public/test.txt');
//const bilder =  require('./public/dist/bundle');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/:id',(req,res)=>{
  let data = JSON.stringify(req.body);
  let id =  req.param("id");
  if (id==undefined) {
    id = '0';
  } 
  console.log('inside from post method',req.body);
  fs.writeFile(`./public/restaurant_${id}.json`, data, function (err) {
    if (err) {
      console.log('There has been an error saving your configuration data.');
      console.log(err.message);
      return;
    }
  });
  res.send('post method called');
});

app.get('/json/:id',(req,res)=>{
  var options = {
    root: path.join(__dirname + '/public')
  };

  let id =  req.param("id");
  if (id==undefined) {
    id = '0';
  } 

  var fileName = `restaurant_${id}.json`;
  res.sendFile(fileName, options, function (err) {
      if (err) {
          console.log(err);

      } else {
          console.log('Sent:', fileName);
      }
  });
});

app.get('/:id', (req, res) => {
  let json = require('./public/assembly.json');

  let id =  req.param("id");
  if (id==undefined) {
    id = '0';
  }
  console.log('call for renstaurant:', id);
    
  res.render('index', { json: json });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});