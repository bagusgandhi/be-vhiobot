const df = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const { config }  = require('../config/serviceAccountDialogflow');

const { project_id, private_key, client_email } = config;

const sessionClient = new df.SessionsClient({
    credentials: {
        private_key,
        client_email,
    }
});

const queryText = async (message) => {
    const sessionid = uuid.v4();
    const sessionPath = sessionClient.projectAgentSessionPath(project_id, sessionid);

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

