const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount.json'); // sesuaikan dengan lokasi service account firebase

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;