const { getAuth } = require('firebase-admin/auth');

const getId = async (token) => {
    let uid;
    await getAuth().verifyIdToken(token)
        .then((decodedToken) => {
            uid = decodedToken.uid;
        })
        .catch((error) => {
            return error;
        });
    
        return uid;
}

const getName = async (token) => {
    let name;
    await getAuth().verifyIdToken(token)
        .then((decodedToken) => {
            name = decodedToken.name;
        })
        .catch((error) => {
            return error;
        });
    
        return name;
}

module.exports = { getId, getName };