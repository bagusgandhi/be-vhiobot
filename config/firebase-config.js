const admin = require('firebase-admin');

// dotenv for development only
// const dotenv = require('dotenv');
// dotenv.config({ path: './.env' });


admin.initializeApp({
		credential: admin.credential.cert({
			project_id: process.env.project_id,
			private_key: process.env.private_key,
			client_email: process.env.client_email,
	}),
});

module.exports = admin;