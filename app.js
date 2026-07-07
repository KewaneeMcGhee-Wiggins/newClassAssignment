const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const name = "Kewanee McGhee-Wiggins";
const age = 42;
const hobbies = ['reading', 'writing', 'cooking'];
const profession = 'developer';

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        aName: name,
        aAge: age,
        aHobbies: hobbies,
        aProfession: profession
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}); 