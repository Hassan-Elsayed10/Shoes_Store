const {ObjectId} = require("mongodb");
const jwt = require("jsonwebtoken");
const {UsersModel} = require('../Model/users');
const users = new UsersModel();

async function UserMiddleWare(req, res, next) {

    if(req.path == '/login'){
        next();
    }else {
        try {
            let token = req.headers["authorization"];

            //if not get token in requests
            if(!token){
                return res.status(401).json({message: "unauthorized"})
            }else{
                let decoded = jwt.verify(token, 'shhhhh');
                req.user = await users.getUser({_id: ObjectId(decoded.id)});
                next();
            }
        }catch (e) {
            res.json({
                message : "invalid token "
            })
        }
    }
}
module.exports = {
    UserMiddleWare
}