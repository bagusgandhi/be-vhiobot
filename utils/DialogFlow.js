const df = require('@google-cloud/dialogflow');
const uuid = require('uuid');

// dotenv for development only
// const dotenv = require('dotenv');
// dotenv.config({ path: './.env' });

const sessionClient = new df.SessionsClient({
    credentials: {
        private_key: process.env.private_key_df,
        client_email: process.env.client_email_df,
    }
});

const queryText = async (message) => {
    const sessionid = uuid.v4();
    const sessionPath = sessionClient.projectAgentSessionPath(process.env.project_id_df, sessionid);

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

