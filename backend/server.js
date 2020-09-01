 var fs = require('fs'),
 xml2js = require('xml2js');
 const util = require('util');
 const mongoose = require('mongoose');
 const express=require('express')
 const app=express()
 const PORT = 3003
const uri = "mongodb+srv://rakhimishra:RakhiMishra@cluster0.dgxpd.mongodb.net/Niswey?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…");
})
.catch(err => console.log(err))
//  const client = new MongoClient(uri);
 var db = mongoose.connection
 var parser = new xml2js.Parser();
 
    fs.readFile('contacts.xml', function(err, data) {
        parser.parseString(data,function(err, result){
           db.collection('contacts').insert({result}, function(error, record){
               if (error) throw error;
               console.log("data saved");
               });
               console.log(util.inspect(result,false,null,true));

              //  db.collection("contacts").find({}).toArray(function(err, result) {
              //   if (err) throw err;
              //   res.status(200).json({result})
              //   db.close();
              });
          
           
           console.log("finished");
   
        })
  


 app.listen(PORT, ()=> console.log("Server started on" + PORT));