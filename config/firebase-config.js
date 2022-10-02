const admin = require('firebase-admin');

// dotenv for development only
// const dotenv = require('dotenv');
// dotenv.config({ path: './.env' });

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
		credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;