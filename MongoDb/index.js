var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var express = require('express')
var app = express()
var port= process.env.PORT || 3012;
var url = 'mongodb://localhost:27017/mytest';

var insertDocument = function(db, callback)
{
  db.collection('restaurants').insertOne
  (
	   {
		  "address" : {
			 "street" : "2 Avenue",
			 "zipcode" : "10075",
			 "building" : "1480",
			 "coord" : [ -73.9557413, 40.7720266 ]
		  },
		  "borough" : "Manhattan",
		  "cuisine" : "Italian",
		  "grades" : [
			 {
				"date" : new Date("2014-10-01T00:00:00Z"),
				"grade" : "A",
				"score" : 11
			 },
			 {
				"date" : new Date("2014-01-16T00:00:00Z"),
				"grade" : "B",
				"score" : 17
			 }
		  ],
		  "name" : "Vella",
		  "restaurant_id" : "41704620"
	   },
	   function(err, result)
	   {
		assert.equal(err, null);
		console.log("Inserted a document into the restaurants collection.");
		//console.log(result.insertedId );
		callback();
	   }
	);
};

var insertDocument2 = function(db,callback)
{
   db.collection('hotel').insertOne
   (
      {
         "address" : {
            "street" : "2 Avenue",
            "zipcode" : "10075",
            "building" : "1480",
            "coord" : [ -73.9557413, 40.7720266 ]
         },
         "borough" : "Manhattan",
         "cuisine" : "Italian",
         "grades" : [
            {
               "date" : new Date("2014-10-01T00:00:00Z"),
               "grade" : "A",
               "score" : 11
            },
            {
               "date" : new Date("2014-01-16T00:00:00Z"),
               "grade" : "B",
               "score" : 17
            }
         ],
         "name" : "Vella",
         "restaurant_id" : "41704620"
      } ,
      function(err, result)
      {
       assert.equal(err, null);
       console.log("Inserted a document into the restaurants collection.");
      // console.log(result.insertedId );
       callback();
      }
  );
};

var findRestaurants = function(db, callback) {
  var cursor =db.collection('restaurant').find( );
  cursor.each(function(err, doc) {
     assert.equal(err, null);
     if (doc != null) {
      //  console.dir(doc);
      //  console.log(doc);
     } else {
        callback();
     }
  });
};
MongoClient.connect(url, function(err, db) {

	 assert.equal(null, err);
	 //console.log("insertDocument");
	 insertDocument(db, function() {
		db.close();
	 });
	// console.log("insertDocument2");
	 insertDocument2(db,function(){
		db.close();
	 })
	 findRestaurants(db, function() {
		db.close();
	  });
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})