const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

let createRecipe = Recipe.create({title:"Asian Glazed Chicken Thighs"})

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  createRecipe.then(() => {
    console.log("data ok")
    //Recipe.create({title:"",level:"Easy Peasy"})
  })
  .then((result) => {
    console.log(result.title)
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
