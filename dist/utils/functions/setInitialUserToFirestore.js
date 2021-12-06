"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = require("@firebase/firestore");
const config_1 = require("../../config/config");
const classes_1 = require("../classes");
async function setData(docRef, email) {
    config_1.DEBUG ? console.log("----No user found in firestore----") : null;
    config_1.DEBUG
        ? console.log("----running setInitialUserToFirestore function----")
        : null;
    // TODO create user from User class and set to firestore
    const newUser = new classes_1.User({
        type: "test",
        uuid: "testUUID",
        id: "testId",
        first_name: "Demo",
        last_name: "Lition",
        signupEmailSent: false,
        email: "rmay@mauiresortrentals.com",
        google_auth_user_uid: "testGoogleAuthData",
        salesforce_external_id: "testSFExternalId",
        salesforce_listings: ["test listing one", "test listing two"],
        salesforce_id: "testSFId",
    });
    await (0, firestore_1.setDoc)(docRef, newUser.properties());
    return true;
}
async function setInitialUserToFirestore(email, docRef) {
    try {
        await setData(docRef, email);
        return true;
    }
    catch (error) {
        config_1.DEBUG ? console.error(error) : null;
        throw error;
    }
}
exports.default = setInitialUserToFirestore;
//# sourceMappingURL=setInitialUserToFirestore.js.map