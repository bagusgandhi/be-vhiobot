# be-vhiobot

This is the backend service *chatbot* with Dialogflow service. For the frontend repository you can see on this link: ... 

## Installation & Setup

Clone this Repository to your local-machine or server

```sh
git clone https://github.com/bagusgandhi/be-vhiobot.git
```
After clone the repository, you have to change directory into it
```sh
cd be-vhiobot
```
Then install the package with npm or yarn

with npm
```sh
npm install
```

with yarn
```sh
yarn add
```

### Setup Firebase Admin Service Account
First, you need to setup firebase credential. You can create project if you don't have one, or you can use your existing project. Click ***gear icon*** on the ***Project Overview*** then select ***Project Settings***. 

![firebase proect settings](https://drive.google.com/uc?export=view&id=1HSxRFNwkO0PJUWXnoYGD6CUy3c2r-ZRw)

After that choose ***Service Accounts*** tab and click ***Generate new private key***.  After you click the generate button then automatically download your service account with JSON format. You can located this file inside `./config` directory and rename that file into **serviceAccount.json**

![firebase service account](https://drive.google.com/uc?export=view&id=1QXtkJvv2sVVLwFSoYuc8sugqSd5ifuNf)

### Setup Dialogflow Service Account

