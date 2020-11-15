const {
    MongoClient
} = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://Jeroen:demo.demo@trails.f9tot.mongodb.net/Trails?retryWrites=true&w=majority";

const client = new MongoClient(url);

// The database to use
const dbName = "Trails";
// callback calls information back to the app.js  
async function open(callback) {
    //scope niet beperkt 
    let result;
    
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "trails"
        const collection = db.collection("walkingtrails");
        result = await callback(collection);
        
   } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
        return result;
    }
}
module.exports = {
    open: open
}