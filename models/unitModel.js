let client = require('../dbConnection');
let collection = client.db().collection('Unit');

function postUnit(unit, callback) {
    collection.insertOne(unit, callback);
}

function getAllUnits(callback) {
    collection.find({}).toArray(callback);
}

function deleteUnit(unit, callback) {
    collection.deleteOne(unit, callback);
}

module.exports = { postUnit, getAllUnits, deleteUnit };
