// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "@firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import { config } from "dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// use process.env
config();

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export default async function updateFirestoreUsers(
  email: string,
  data: Record<any, any>
) {
  try {
    const docRef = doc(firestore, "Users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = docSnap.data();
      console.log("document exist", user);
    } else {
      // doc.data() will be undefined in this case
      console.log("No document exist");
      console.log("-----Creating document-------");
      const response = await setDoc(docRef, { ...data });
      return response;
    }
  } catch (error) {
    return error;
  }
}

updateFirestoreUsers("rmay@mauiresortrentals.com", {});
