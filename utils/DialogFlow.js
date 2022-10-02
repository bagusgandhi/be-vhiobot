const df = require('@google-cloud/dialogflow');
const uuid = require('uuid');

// dotenv for development only
// const dotenv = require('dotenv');
// dotenv.config({ path: './.env' });

const serviceAccount = JSON.parse(process.env.DIALOGFLOW_SERVICE_ACCOUNT)

const sessionClient = new df.SessionsClient({
    credentials: {
        private_key: serviceAccount.private_key,
        client_email: serviceAccount.client_email,
    }
});

const queryText = async (message) => {
    const sessionid = uuid.v4();
    const sessionPath = sessionClient.projectAgentSessionPath(serviceAccount.project_id, sessionid);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'id-ID',
            },
        },
    };

    try {
        const response = await sessionClient.detectIntent(request);
        const result = response[0].queryResult;

        return result.fulfillmentText;

    } catch(err){
        return err.message;
    }
}


module.exports = queryText;

