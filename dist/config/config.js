"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALESFORCEUSERPASSWORD = exports.SALESFORCEUSERNAME = exports.SALESFORCEHOSTURL = exports.MEASUREMENTID = exports.APPID = exports.MESSENGINGSENDERID = exports.STORAGEBUCKET = exports.PROJECTID = exports.AUTHDOMAIN = exports.FIREBASE_APIKEY = exports.FIRESTORE = exports.APP = exports.DEVELOPMENT = exports.DEBUG = void 0;
const dotenv_1 = require("dotenv");
const app_1 = require("firebase/app");
const firestore_1 = require("@firebase/firestore");
(0, dotenv_1.config)();
// ! Global Environment
// ? We can turn off and on the console log statements for debuging here
exports.DEBUG = true;
exports.DEVELOPMENT = process.env.ENV?.toLocaleLowerCase() === "development";
// ! Firebase Envrionment
exports.APP = (0, app_1.initializeApp)({
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSENGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
});
exports.FIRESTORE = (0, firestore_1.getFirestore)(exports.APP);
exports.FIREBASE_APIKEY = process.env.FIREBASE_APIKEY;
exports.AUTHDOMAIN = process.env.AUTHDOMAIN;
exports.PROJECTID = process.env.PROJECTID;
exports.STORAGEBUCKET = process.env.STORAGEBUCKET;
exports.MESSENGINGSENDERID = process.env.MESSENGINGSENDERID;
exports.APPID = process.env.APPID;
exports.MEASUREMENTID = process.env.MEASUREMENTID;
// ! Salesforce Envrionment
exports.SALESFORCEHOSTURL = exports.DEVELOPMENT
    ? process.env.SALESFORCEHOSTDEVELOPMENTURL
    : process.env.SALESFORCEHOSTPRODUCTIONURL;
exports.SALESFORCEUSERNAME = process.env.SALESFORCEUSERNAME;
exports.SALESFORCEUSERPASSWORD = process.env.SALESFORCEUSERPASSWORD;
//# sourceMappingURL=config.js.map