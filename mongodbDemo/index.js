// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if(!err) {
    console.log("We are connected");
	 db.close();
	
  }
  else{
	  console.log(err);	 
  }
});