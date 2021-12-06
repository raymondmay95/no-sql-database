import getFirestoreDoc from "./utils/functions/getFirestoreDoc";

async function entry(email: string) {
  console.log("---Starting.... Wish me luck :)----");
  await getFirestoreDoc(email);
  console.log("---Finished....----");
  return email;
}

entry("rmay@mauiresortrentals.com");
