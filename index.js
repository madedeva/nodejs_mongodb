const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://madedeva:deva2703@cluster0.g0lxzzu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("sample_analytics").collection("accounts");

  //print all documents in the collection
  collection.find({}).toArray(function(err, docs) {
    console.log(docs);
  }
  );
});