// Title - Sorting the Employee data 
// Author - Ramapraba J
// Created Date - 09/05/2024

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/aspire';
const client = new MongoClient(uri);

async function sortExample() {
    try {
        await client.connect();
        const db = client.db('aspire');
        const collection = db.collection('employee');

        const aggregationResult = await collection.aggregate([
            { $sort: { salary: -1 } } 
        ]).toArray();

        console.log(aggregationResult);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

sortExample();