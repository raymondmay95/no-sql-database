import { config } from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

config();

// ! Global Environment
// ? We can turn off and on the console log statements for debuging here
export const DEBUG = true;
export const DEVELOPMENT =
  process.env.ENV?.toLocaleLowerCase() === "development";

// ! Firebase Envrionment
export const APP = initializeApp({
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSENGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
});
export const FIRESTORE = getFirestore(APP);
export const FIREBASE_APIKEY = process.env.FIREBASE_APIKEY;
export const AUTHDOMAIN = process.env.AUTHDOMAIN;
export const PROJECTID = process.env.PROJECTID;
export const STORAGEBUCKET = process.env.STORAGEBUCKET;
export const MESSENGINGSENDERID = process.env.MESSENGINGSENDERID;
export const APPID = process.env.APPID;
export const MEASUREMENTID = process.env.MEASUREMENTID;

// ! Salesforce Envrionment
export const SALESFORCEHOSTURL = DEVELOPMENT
  ? process.env.SALESFORCEHOSTDEVELOPMENTURL
  : process.env.SALESFORCEHOSTPRODUCTIONURL;

export const SALESFORCEUSERNAME = process.env.SALESFORCEUSERNAME;
export const SALESFORCEUSERPASSWORD = process.env.SALESFORCEUSERPASSWORD;
