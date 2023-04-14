const jwt = require("jsonwebtoken");

function extractUserNameFromToken(token) {
    let decoded = jwt.verify(token, 'shhhhh');
    return decoded.username;
}

function extractUserIdFromToken(token) {
    let decoded = jwt.verify(token, 'shhhhh');
    return decoded.id;

}

function extractUserAdminStatusFromToken(token) {
    let decoded = jwt.verify(token, 'shhhhh');
    return decoded.isAdmin;

}
module.exports = {
    extractUserNameFromToken,
    extractUserIdFromToken,
    extractUserAdminStatusFromToken

}