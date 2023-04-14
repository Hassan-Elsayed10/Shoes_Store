const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const {ObjectId} = require("mongodb");

const {UsersModel} = require('../Model/users');
const users = new UsersModel();

class UserService {
    async listAllUsers() {
        try {
            return await users.getAllUsers();
        }catch (e) {
            return null;
        }
    }
    async getUserById(id) {
        try {
            let user = await users.getUser({_id: ObjectId(id)});
            if(!user){
                return null;
            }else{
                return user;
            }
        }catch (e) {
            return null;
        }
    }
    async addUser(username, password, firstname, lastname, age, address, phone) {
        try {
            //check if username exist before
            let user = await users.getUser({username : username});
            if(!user){
                //encrypt password
                let hashed_password = await bcrypt.hash(password, 10);

                //insert user
                return await users.addUser({
                    username, password: hashed_password, firstname, lastname, age
                    , address, phone, isActive: true, isAdmin: false
                });
            }else{
                return "the username already exists use another one!"
            }
        }catch (e) {
            return null
        }
    }
    async login(username, password) {
        try {
            let user = await users.getUser({username : username});

            //1-check if user found
            if (!user) {
                return {statues: false, message: "user not found"};
            }

            //2-check if password match
            await bcrypt.compare(password, user.password, function (err) {
                if (err) {
                    return {statues: false, message: "password wrong"};
                }
            })

            //3-check user statues
            if (!user.isActive) {
                return {statues: false, message: "user not active"};
            }

            //4-send token from server to client side
            let token = jwt.sign({username: user.username, id: user._id, isAdmin: user.isAdmin}
                , 'shhhhh');
            return {status: true,userId : user._id, token};

        } catch (e) {
            return null;
        }
    }
    async forgetPassword(username, newPassword) {
        try {
            let user = await users.getUser({username : username});
            if(!user){
                return null;
            }else{
                //encrypt new password
                let hashed_password = await bcrypt.hash(newPassword, 10);
                await users.updateUser({username : username},{password : hashed_password})
                return {username :user.username, password :newPassword}
            }
        }catch (e) {
           return null;
        }
    }
    async deleteUserById(id) {
        try {
            let user = await users.getUser({_id: ObjectId(id)});
            if(!user){
                return null;
            }else{
                return await users.deleteUser(id);
            }
        }catch (e){
            return null;
        }
    }
    async updateUserById(id,data) {
        try{
            let user = await users.getUser({_id: ObjectId(id)});
            if(!user){
                return null;
            }else{
                return await users.updateUser({_id: ObjectId(id)},data);
            }
        }catch (e) {
            return null;
        }
    }
    async changeUserStatus(id) {
        try {
            let user = await users.getUser({_id: ObjectId(id)});
            if (!user) {
                return null;
            }else{
                if (!user.isActive || user.isActive === false) {
                    return await users.updateUser({_id: ObjectId(id)},{isActive: true});
                } else {
                    return await users.updateUser({_id: ObjectId(id)},{isActive: false});
                }
            }
        }catch (e) {
            return null
        }
    }
}
module.exports = {
    UserService
}