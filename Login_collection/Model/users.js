let dataBaseName = "amazondb";
let collectionName = "users";
const {find, insertOne, findOne, deleteOne, updateOneByQuery} = require("../DB/Db");
const {ObjectId} = require("mongodb");

class UsersModel {
    async getAllUsers(){
        return await find(dataBaseName, collectionName);
    }

    async getUser(filter){
        return await findOne(dataBaseName, collectionName, filter);
    }

    async addUser(data){
        return await insertOne(dataBaseName, collectionName,data);

    }

    async updateUser(filter , data){
        return await updateOneByQuery(dataBaseName,collectionName, filter, data);
    }

    async deleteUser(id){
        return await deleteOne(dataBaseName,collectionName,{_id: ObjectId(id)});
    }
}
module.exports = {
    UsersModel
}