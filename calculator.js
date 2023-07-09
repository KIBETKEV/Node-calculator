import express from 'express';
import bodyParser from 'body-parser'; 

const app = express();        
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile("/Users/kelvinkibet/Desktop/Calculator/index.html");
});

app.post("/", function (req, res){
  console.log(req.body);
  var num1 = JSON.parse(req.body.num1);
  var num2 = JSON.parse(req.body.num2);

  var result = num1 + num2;

  res.send("The result is" + result);
});

app.listen(3000, function(){
    console.log("server is running");
});
