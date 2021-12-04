import {
  salesforceHostUrl,
  salesforceUserName,
  salesforceUserPassword,
} from "./src/globalExports";
import jsforce from "jsforce";

export default async function fetchDataFromSalesforce() {
  try {
    console.log("----Establishing Salesforce Connection-----");
    const conn = new jsforce.Connection({ instanceUrl: salesforceHostUrl });
    conn.on("refresh", function (accessToken, res) {
      console.log(
        `
                ----Refreashing jsforce connection----
                access token: ${accessToken},
                response: ${res}
                `
      );
    });
    if (salesforceUserPassword && salesforceUserName) {
      conn.loginByOAuth2(
        salesforceUserName,
        salesforceUserPassword,
        function (error) {
          const myError = new Error("unable to log into salesforce");
          myError.stack?.concat(error.message);
        }
      );
    }
    return conn;
  } catch (e) {
    return e;
  }
}
