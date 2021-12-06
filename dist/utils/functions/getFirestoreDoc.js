"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("@firebase/firestore");
const config_1 = require("../../config/config");
const setInitialUserToFirestore_1 = __importDefault(require("./setInitialUserToFirestore"));
// this function takes in users email as a parameter and returns that user from firestore or false
async function getFirestoreDoc(email) {
    try {
        const docRef = (0, firestore_1.doc)(config_1.FIRESTORE, "Users", email);
        config_1.DEBUG ? console.log(`docData: ${docRef}`) : null;
        const docData = await (0, firestore_1.getDoc)(docRef);
        config_1.DEBUG ? console.log(`docData: ${docData}`) : null;
        if (!docData.exists()) {
            await (0, setInitialUserToFirestore_1.default)(docRef);
            return true;
        }
        // in this instance the user already exist in firestore
        return docData.data();
    }
    catch (error) {
        config_1.DEBUG ? console.log(error) : null;
        return false;
    }
}
exports.default = getFirestoreDoc;
//# sourceMappingURL=getFirestoreDoc.js.map