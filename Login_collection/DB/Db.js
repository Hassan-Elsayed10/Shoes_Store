const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";


//connect to data base
function mongoConnect(url) {
    return new Promise((resolve, reject)=>{
        MongoClient.connect(url, function (error, result) {
            if(error){reject(error)}
            resolve(result);
        })
    })
}
//find all or some documents from collection
function find(dataBaseName, collectionName, filter ={}) {
    return new Promise((resolve, reject) => {
        mongoConnect(url).then((db)=>{
            let dbo = db.db(dataBaseName);
            dbo.collection(collectionName).find(filter).toArray(function (error, result) {
                if (error) {reject(error)}
                resolve(result);
                db.close();
            })
        })
    })
}
//find one document from collection (first one)
function findOne(dataBaseName, collectionName, filter ={}) {
    return new Promise((resolve, reject) => {
        mongoConnect(url).then((db)=>{
            let dbo = db.db(dataBaseName);
            dbo.collection(collectionName).findOne(filter, function (error, result) {
                if (error) {reject(error)}
                resolve(result);
                db.close();
            })
        })
    })
}
//insert one document to collection
function insertOne(dataBaseName, collectionName, data) {
    return new Promise((resolve, reject) => {
        mongoConnect(url).then((db) => {
            let dbo = db.db(dataBaseName);
            dbo.collection(collectionName).insertOne(data, function (error, result) {
                if(error) {reject(error)}
                resolve(result);
                console.log("one document inserted successfully");
                db.close();
            })
        })
    })
}
//delete one document
function deleteOne(dataBaseName, collectionName, filter = {}) {
    return new Promise((resolve, reject)=>{
        mongoConnect(url).then((db)=>{
            let dbo = db.db(dataBaseName);
            dbo.collection(collectionName).deleteOne(filter, function (error, result) {
                if(error){reject(error)}
                resolve(result);
                console.log("One document deleted successfully");
                db.close();
            })
        })

    })
}
//update one document by query
function updateOneByQuery(databaseName,collectionName,filter = {}, newData) {
    return new Promise((resolve, reject)=>{
        mongoConnect(url).then((db)=>{
            const dbo = db.db(databaseName);
            dbo.collection(collectionName).updateOne(filter,{$set : newData},function (error,result) {
                if(error){reject(error)}
                resolve(result);
                db.close();
            })
        })
    })
}

module.exports = {
    find,
    findOne,
    insertOne,
    deleteOne,
    updateOneByQuery,
}