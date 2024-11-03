const { MongoClient } = require("mongodb");

const url = "mongodb+srv://MongoDBWithNode:ly483hAUNHG1AeXD@mongodbwithnode.jjb43.mongodb.net/";

const client = new MongoClient(url);

async function run() {
    try {
      const database = client.db('MongoDB');
      const User = database.collection('User');
      // Query for a movie that has the title 'Back to the Future'
    //   const query = { title: 'Back to the Future' };
    // To fetch data
    const query = {firstName: "Zaheen"}
      const userName = await User.findOne(query);

        // let data = {
        //     firstName: "Tony",
        //     lastName:"Stark",
        //     city:"New York",
        //     phoneNUmber:"9999438827"
        // }
        // To insert data
        // const insertedData = await User.insertOne(data);

        // To fetch data
        const getAllData = await User.find({firstName:"Tony"}).toArray();
      console.log(getAllData);

    //   To get count
    const countTotal = await User.find({firstName:"Tony"}).count();
    console.log(countTotal)

    // Delete document
    const deletedDoc = await User.deleteMany({firstName:"Tony"});
    console.log(deletedDoc)

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);


