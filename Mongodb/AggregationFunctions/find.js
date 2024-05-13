// Title - Finding data from Database
// Author - Ramapraba J
// Created Date - 09/05/2024
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/aspire';
const client = new MongoClient(uri);

async function findEmployees(query) {
    try {
        await client.connect();
        const db = client.db('aspire');
        const collection = db.collection('employee');

        const findResult = await collection.find(query).toArray();

        console.log(findResult);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}


findEmployees({ gender: 'male' });

