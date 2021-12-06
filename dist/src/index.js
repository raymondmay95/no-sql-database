"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = exports.app = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const dotenv_1 = require("dotenv");
const firestore_1 = require("@firebase/firestore");
const firebaseConfig_1 = __importDefault(require("./firebaseConfig"));
// import User from "./userClass";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// use process.env
(0, dotenv_1.config)();
// Initialize Firebase
exports.app = (0, app_1.initializeApp)(firebaseConfig_1.default);
exports.firestore = (0, firestore_1.getFirestore)(exports.app);
async function updateFirestoreUsers(email, { data }) {
    try {
        const docRef = (0, firestore_1.doc)(exports.firestore, "Users", email);
        const docSnap = await (0, firestore_1.getDoc)(docRef);
        if (docSnap.exists()) {
            const user = docSnap.data();
            // console.log("document exist", user);
            const keys = Object.keys(user);
            console.log(keys);
            return user;
        }
        else {
            // doc.data() will be undefined in this case
            console.log("No document exist");
            console.log("-----Creating document-------");
            const response = await (0, firestore_1.setDoc)(docRef, { ...data });
            return response;
        }
    }
    catch (error) {
        return error;
    }
}
exports.default = updateFirestoreUsers;
updateFirestoreUsers("rmay@mauiresortrentals.com", { last_name: "May" });
//# sourceMappingURL=index.js.map