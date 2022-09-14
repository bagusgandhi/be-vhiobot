const admin = require('../config/firebase-config');

class ValidateJwt {
    
    name;
    uuid;

    async isValid(token){
        try{
            const decodeValue = await admin.auth().verifyIdToken(token);
            if (decodeValue) {
                return true;
            } else {
                return false;
            }
        } catch(err){
            return err.message;
        }
    }

    socketAuth(socket, next){
        const token = socket.handshake.auth.token;
        if(this.isValid(token)){
            return next();
        } else {
            return next(new Error('authentication error'));
        }
    }
}

module.exports = new ValidateJwt();
