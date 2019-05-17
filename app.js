const express = require('express');//insert package into program and store it in express var.
const app = express(); //creates an express app.

const PORT = process.env.PORT || 3000;

let name ="Kewanee McGhee-Wiggins";
let age = 42;
let hobbies = ['reading', 'writing', 'cooking'];
let profession = 'developer';

// app.use(express.static('views'));
app.set('view engine', 'ejs');//allows us to pass var. to ejs

//('/path', callback)
// app.get('/, function(req, res){
    

app.get('/', function (req, res ){
    res.render('index', {
aName: name,
aAge: age,
aHobbies: hobbies,
aProfession: profession
    })
})

  //  res.send('<h1> a string hello world</h1>');

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});
//look up  app.get, request and response objects in express.js hw 