import { DocumentReference, setDoc } from "@firebase/firestore";
import { DEBUG } from "../../config/config";
import { User } from "../classes";

async function setData(docRef: DocumentReference, email: string) {
  DEBUG ? console.log("----No user found in firestore----") : null;
  DEBUG
    ? console.log("----running setInitialUserToFirestore function----")
    : null;

  // TODO create user from User class and set to firestore
  const newUser = new User({
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
  await setDoc(docRef, newUser.properties());
  return true;
}

export default async function setInitialUserToFirestore(
  email: string,
  docRef: DocumentReference
) {
  try {
    await setData(docRef, email);
    return true;
  } catch (error) {
    DEBUG ? console.error(error) : null;
    throw error;
  }
}
