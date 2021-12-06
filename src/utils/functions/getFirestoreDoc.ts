import { getDoc, doc } from "@firebase/firestore";
import { FIRESTORE, DEBUG } from "../../config/config";
import setInitialUserToFirestore from "./setInitialUserToFirestore";

// this function takes in users email as a parameter and returns that user from firestore or false
export default async function getFirestoreDoc(email: string) {
  try {
    const docRef = doc(FIRESTORE, "Users", email);
    DEBUG ? console.log(`docData: ${docRef}`) : null;

    const docData = await getDoc(docRef);
    DEBUG ? console.log(`docData: ${docData}`) : null;

    if (!docData.exists()) {
      await setInitialUserToFirestore(email, docRef);
    }
    // in this instance there is no initial user data.
    return docData.data();
  } catch (error) {
    DEBUG ? console.log(error) : null;
    return false;
  }
}
