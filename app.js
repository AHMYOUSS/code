const express = require('express')
const MongoClient =require('mongodb').MongoClient

const app = express()
MongoClient.connect('mongodb://localhost:27017',(err, client)=>{
  console.log("connected to db")
})
// middleware
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname,'statics'))) 
app.get('/', (req, res, next) => {
  res.render('index')
});
  
app.use((req,res,next) => {
  res.send('<h1>hello </h1>');
})

app.listen((3000), () => {
    console.log('App listening on port 3000!');
});