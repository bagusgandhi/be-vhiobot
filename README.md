
# be-vhiobot
This is the backend service *chatbot* web application. You can see the setup and installation bellow.
For the UI chatbot web application, you can see on this [link](#)

## Setup & Installation

Clone this Repository to your local-machine or server.

```sh
git clone https://github.com/bagusgandhi/be-vhiobot.git
```
Then *cd* into it.
```sh
cd be-vhiobot
```
install the package with npm.

```sh
npm install
```


### Setup Firebase Admin SDK Service Account
First, you need to setup firebase credential. You can create project if you don't have one, or you can use your existing project. Click **gear icon** on the **Project Overview** then select **Project Settings**. 

![firebase proect settings](https://drive.google.com/uc?export=view&id=1pDtauZUp51Kp_3E2XlX3BlUm2caiRrpR)

After that choose the **Service Accounts** tabs and click **Generate new private key** button, it will automatically download your service account with JSON format. You could located that file inside ./config directory and rename it to **serviceAccount.json**.

![firebase service account](https://drive.google.com/uc?export=view&id=17nmwxAdcqRNC0UCb2Ar_mDvlKIwXmuD3)


### Setup Dialogflow Service Account
For connecting this backend to the Dialogflow service, you should have an service account. You can create it on Google cloud platform. Make sure your Dialogflow is ready in use, if not ready yet you can see this [documentation](https://cloud.google.com/dialogflow/es/docs/quick/build-agent) for creating an agent. 

Once your dialogueflow ready, open [Google cloud console](https://cloud.google.com/), select the project name as same as you create an agent in Dialogflow before.

![select google cloud project](https://drive.google.com/uc?export=view&id=1EDgyA91_5jT_AMSDSuay6moiWCYOt7_y)

On Navigation Menu Go to the **Api & Services** , click **Credentials**.

![api & services credentials](https://drive.google.com/uc?export=view&id=14ufbObyMt20oeCCT81Cu4rCyUVYkhh12)

Click **Create Credentials**, then **select Service Account**.

![create service account](https://drive.google.com/uc?export=view&id=1Cpa4t8AFvRvEHXypMfe3sk84lf75COR0)

Enter a **service account name**, **ID** and **description (optional)**.

![service account details](https://drive.google.com/uc?export=view&id=1vNNEkeQczxdiHzQqGPrAP1o5shGp64Gv)

On the **select role** field, type **Dialogflow API Admin**, then click **continue**.

![service account role](https://drive.google.com/uc?export=view&id=1D_nrVVaDyDYBxo93VvlbSbY9OLZe5tRo)

Click your service account and create a keys, then it will automatically download the keys.

![service account key](https://drive.google.com/uc?export=view&id=16K6eubpyBq1i2DKI3pIqB4_26lCe-7KL)

Move that file into `./config` and rename it to **serviceAccountDialogflow.js**.

## Running 
For running this project you can run with

    npm run start

If you want to running in development, you can install *nodemon* 

    npm i -D nodemon

then run the project with

    npm run dev

