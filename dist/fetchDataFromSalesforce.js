"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const globalExports_1 = require("./src/globalExports");
const jsforce_1 = __importDefault(require("jsforce"));
async function fetchDataFromSalesforce() {
    try {
        console.log("----Establishing Salesforce Connection-----");
        const conn = new jsforce_1.default.Connection({ instanceUrl: globalExports_1.salesforceHostUrl });
        conn.on("refresh", function (accessToken, res) {
            console.log(`
                ----Refreashing jsforce connection----
                access token: ${accessToken},
                response: ${res}
                `);
        });
        if (globalExports_1.salesforceUserPassword && globalExports_1.salesforceUserName) {
            conn.loginByOAuth2(globalExports_1.salesforceUserName, globalExports_1.salesforceUserPassword, function (error) {
                const myError = new Error("unable to log into salesforce");
                myError.stack?.concat(error.message);
            });
        }
        return conn;
    }
    catch (e) {
        return e;
    }
}
exports.conn = fetchDataFromSalesforce();
exports.conn.then((data) => console.log(data));
//# sourceMappingURL=fetchDataFromSalesforce.js.map