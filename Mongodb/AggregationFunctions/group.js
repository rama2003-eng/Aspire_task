// Title - Gouping informations based on Department
// Author - Ramapraba J
// Created Date - 09/05/2024

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/aspire';
const client = new MongoClient(uri);

async function groupByDepartment() {
    try {
        await client.connect();
        const db = client.db('aspire');
        const collection = db.collection('employee');

        const aggregationResult = await collection.aggregate([
            {
                $group: {
                    _id: "$department", 
                    totalEmployees: { $sum: 1 }, 
                    averageSalary: { $avg: "$salary" }, 
                    highestSalary: { $max: "$salary" }, 
                    lowestSalary: { $min: "$salary" }, 

                }
            },
        ]).toArray();

        console.log(aggregationResult);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

groupByDepartment() ;
