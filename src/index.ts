import getFirestoreDoc from "./utils/functions/getFirestoreDoc";

async function entry(email: string) {
  console.log("---Starting.... Wish me luck :)----");
  const stepOne = await getFirestoreDoc(email);
  console.log(`getFirestoreDoc ${stepOne}`);
  console.log("---Finished....----");
  return email;
}

entry("rmay@mauiresortrentals.com");
