// Title - Updating the data in Employee database (updateOne and updateMany)
// Author - Ramapraba J
// Created Date - 08/05/2024

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/aspire';

const client = new MongoClient(uri);


async function connectToMongoDB() {
    try {
        await client.connect();  

        const db = client.db('aspire');
        const collection = db.collection('employee');

        // Find all documents in the collection
        const cursor = collection.find({});
        await cursor.forEach(record => {
            console.log(record);
        });

//updateOne
        const updateResult = await collection.updateOne(
            { _id: 7 },
            { $set: { salary: 90000 } }
        );
        console.log("Updated " + updateResult.modifiedCount + " document");
//updateMany
         const updateManyResult = await collection.updateMany(
            { department: { name: 'Marketing' } }, // Filter: documents with department name 'Marketing'
            { $set: { lastName:'Bachan' } } // Update: set salary to 65000
        );
        console.log("Updated " + updateManyResult.modifiedCount + " documents");
        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();
