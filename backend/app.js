// gets express package from the node modules
const express = require('express');
const fs = require('fs');
const mongo = require('./mongo');
// call the function
const app = express();
const trailRouter = express.Router();
// runs a server on port 3000 ex localhost:3000
const port = 3000;

app.get('/api/trails', (req, res) => {
  mongo.open(async function (collection) {
    const query = {};
    // variable die het object terug geeft
    // .map geeft array weer met alle resultaten van de database
    let result = await collection.find().toArray();
    console.log(result);
    res.send(result);

  });
});
app.use('/api', trailRouter);

// save the data
app.get('/api/fillDatabase', (req, res) => {
  mongo.open(async function (collection) {
    //data ophalen van data file string
    let rawdata = fs.readFileSync('data.json');
    // omzetten javascript object
    let trailinfo = JSON.parse(rawdata);
    //inserten naar de database
    await collection.insertMany(trailinfo);
    // read file sync
    console.log(trailinfo);

  });

});

app.get('/api/find', (req, res) => {
  mongo.open(async function (collection) {
    const query = {
      id: Number(req.query.id)// data van query is altijd string maar in de data is id een nummer
    };
    // variable die het object terug geeft
    let search = await collection.findOne(query);
    console.log(query);
    res.send(search);
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to my TestAPI!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
window.onload = () => {
  console.log('Ready to go!');
  let submitForm = event =>{
      event.preventDefault();
      console.log('submit');

      let name = document.getElementById('nameInput').value;
      let length = document.getElementById('lengthInput').value;
      let description = document.getElementById('descriptionInput').value;
      let city = document.getElementById('cityInput').value;
      let country = document.getElementById('countryInput').value;
      let feature = document.getElementById('featureInput').value;

  let message = `Name: ${name}, length:${length}, description:${description}, city: ${city}, country: ${country}, feature:${feature}`;
  
  }

  document.getElementById('form').addEventListener('submit',submitForm);

}