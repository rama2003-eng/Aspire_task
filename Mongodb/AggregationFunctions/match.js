// Title - Matched the data based on salary
// Author - Ramapraba J
// Created Date - 09/05/2024

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/aspire';
const client = new MongoClient(uri);

async function matchExample() {
    try {
        await client.connect();
        const db = client.db('aspire');
        const collection = db.collection('employee');

        const aggregationResult = await collection.aggregate([
            { $match: { salary: { $gte: 60000 } } } 
        ]).toArray();

        console.log(aggregationResult);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

matchExample();