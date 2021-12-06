import {
  SALESFORCEHOSTURL,
  SALESFORCEUSERNAME,
  SALESFORCEUSERPASSWORD,
} from "../../config/config";
import jsforce from "jsforce";

export default async function fetchDataFromSalesforce() {
  try {
    console.log("----Establishing Salesforce Connection-----");
    const conn = new jsforce.Connection({ instanceUrl: SALESFORCEHOSTURL });
    conn.on("refresh", function (accessToken, res) {
      console.log(
        `
                ----Refreashing jsforce connection----
                access token: ${accessToken},
                response: ${res}
                `
      );
    });
    if (SALESFORCEUSERPASSWORD && SALESFORCEUSERNAME) {
      conn.loginByOAuth2(
        SALESFORCEUSERNAME,
        SALESFORCEUSERPASSWORD,
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
