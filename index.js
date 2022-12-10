const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post('/', function(req, res){
  var num1 =  Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result =  num1 + num2;
  res.send("The result of the calculation is " + result)
  
})
//app.get('/contact', (req, res) => {
  //res.send('<h1>Contact us at @gmail.com</h1>')
//});

//app.get('/about', (req, res) =>{
//  res.send('i am iyanu and i am learning node js presently')
//}
//app.get('/about', function (req, res) {
//  res.send('i am iyanu and i am learning node js presently')
  
//})
app.listen(3000, () => {
  console.log('server started');
});
