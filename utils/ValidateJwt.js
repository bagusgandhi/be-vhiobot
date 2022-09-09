const admin = require('../config/firebase-config');

class ValidateJwt {
    
    name;
    uuid;

    async isValid(token){
        try{
            const decodeValue = await admin.auth().verifyIdToken(token);
            if (decodeValue) {
                this.name = decodeValue.name;
                this.uuid = decodeValue.user_id;
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
            socket.name = this.name;
            socket.uuid = this.uuid;
            return next();
        } else {
            return next(new Error('authentication error'));
        }
    }
}

module.exports = new ValidateJwt();
