// START: Connect with Database.
const mongoose = require('mongoose');
//make sure to change the <dbuser>:<dbpassword> in the mlab link
var dblink = 'mongodb://user:user@ds115768.mlab.com:15768/test1985';
const credentials = require('./credentials.js');

mongoose.connect(credentials.getMongoCredentials(), function(error) {
    if (error) {
        console.log("There a problem connecting to the database!" + error);
    } else {
        console.log("Database connected! All green!")
    }
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// END: Connect with Database.

var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema(
    {
        _id: Schema.Types.ObjectId,
        name: String,
        age: Number,
        valid: Boolean
    }
    );
   //Saves to the Foe Model (SQL: table)
var UserModel = mongoose.model('Foe', UserSchema);

var myFirstInstance = new UserModel({
        _id: '000000000000000000000008',
        name: "Irene",
        age: 35,
        valid: true
})

// myFirstInstance.save(function(err) {
//     if (err) {
//         console.log(err);

//   }
// })

// START: Read from Database

UserModel.find(function(error, foes){
    if (error) {console.log(error);}
    console.log(foes);
});
//the code lines below find ids from database with age 28
// UserModel.find({age: 28}, function (error, foes) {
    
//     if (error) {
//         console.log(error);
//     }
    
//     console.log(foes.toString());
// });


// END: Read from Database

//start: update the database



//end: of update the database