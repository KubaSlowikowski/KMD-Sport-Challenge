const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_USERNAME}.6gxfke7.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db('KMD-Sport-App').command({ping: 1});
        console.log("Pinged KMD Sport App deployment. Successfully connected to MongoDB!");

    } catch {
        await client.close();
    }
}

async function connectToDatabase() {
    try {
        const database = await client.db('KMD-Sport-App');
        return database;
    } catch {
        await client.close();
    }
}

async function closeClient() {
    await client.close();
}

run().catch(console.dir);


module.exports = {connectToDatabase, closeClient};
