const admin = require('firebase-admin');

// dotenv for development only
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);


admin.initializeApp({
		credential: admin.credential.cert(serviceAccount)
	// 	credential: admin.credential.cert({
	// 		project_id: process.env.project_id,
	// 		private_key: process.env.private_key,
	// 		client_email: process.env.client_email,
	// }),
});

module.exports = admin;