const _ = require('lodash');
const mongoose = require('mongoose');

let dblink ='mongodb://user:user@ds115768.mlab.com:15768/test1985'

mongoose.connect(dblink, function(error){
  if (error) {
    console.log("There is a problem connecting to the database!" + error);
    
  }else {
    console.log("Database connected! All green");
  }
});

mongoose.Promise = global.Promise;
//Start: Create connection to database
let db = mongoose.connection;//this is a freezing function ".connection" as you can see is missing "()"

db.on('error', console.error.bind(console, 'MongoDB connection error: '));
//end of create database.
let Schema = mongoose.Schema; //polymorphism we are making a copy of the mongoose template. let "Schema" has a capital letter bc this means it is holding a document
//by typing "new" we are instanciating 
let UserSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    id: String,
    name: String,
    age: Number,
    value: Boolean
  }
);

let UserModel = mongoose.model('UserModel', UserSchema);

let myFirstInstance = new UserModel({
    
    _id: '000000000000000000000001',
    name: "Eduardo",
    age: 28,
    valid: true
    
});

myFirstInstance.save(function (err) {
  if (err) {
    console.log(err);
  }
})


let number = _.random(1, 110);

console.log(number);