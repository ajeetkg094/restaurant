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

app.post('/',(req,res)=>{
  let data = JSON.stringify(req.body);
  console.log('inside from post method',req.body);
  fs.writeFile('./public/test2.json', data, function (err) {
    if (err) {
      console.log('There has been an error saving your configuration data.');
      console.log(err.message);
      return;
    }
  });
  res.send('post method called');
});

app.get('/json',(req,res)=>{

  var options = {
    root: path.join(__dirname + '/public')
};
 
var fileName = 'test1.json';
res.sendFile(fileName, options, function (err) {
    if (err) {
        next(err);
    } else {
        console.log('Sent:', fileName);
    }
});
});

app.get('/', (req, res) => {
  let json = require('/home/mihir/table-layout_1/public/assembly.json');
  console.log(json, 'the json obj');

  // console.log(blob);
  let restaurant_id = req.query.id;
  //console.log(restaurant_id);
  res.render('index', { json: json });
  //res.sendFile('/home/mihir/table-layout_1/views/index.html');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});