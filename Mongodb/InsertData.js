// Title - Inserting the data in Employee database (insertOne and insertMany)
// Author - Ramapraba J
// Created Date - 07/05/2024

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

//insertOne
        const ackResult = await collection.insertOne({
            _id: 6,
            firstName: 'Johnny',
            lastName: 'Steves',
            gender: 'male',
            email: 'john.steve@abc.com',
            salary: 50000,
            department: { name: 'Developer' }
        });

        console.log("The record inserted into the collection with ID: " + ackResult.insertedId);
 insertMany      
        const manyDocumentsToInsert = [
            {
                _id: 6,
                firstName: 'Priya',
                lastName: 'dharshini',
                gender: 'female',
                email: 'priya@gmail.com',
                salary: 70000,
                department: { name: 'tester' }
            },{
                _id: 8,
                firstName: 'Preetha',
                lastName: 'Iyyanar',
                gender: 'female',
                email: 'preetha@gmail.com',
                salary: 60000,
                department: { name: 'TN' }
            }
        ];

        // Insert many documents
        const manyAckResult = await collection.insertMany(manyDocumentsToInsert);
        console.log("The " + manyAckResult.insertedCount + " records inserted into the collection");




        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();

