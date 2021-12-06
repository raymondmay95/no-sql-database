"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/config");
const jsforce_1 = __importDefault(require("jsforce"));
async function fetchDataFromSalesforce() {
    try {
        console.log("----Establishing Salesforce Connection-----");
        const conn = new jsforce_1.default.Connection({ instanceUrl: config_1.SALESFORCEHOSTURL });
        conn.on("refresh", function (accessToken, res) {
            console.log(`
                ----Refreashing jsforce connection----
                access token: ${accessToken},
                response: ${res}
                `);
        });
        if (config_1.SALESFORCEUSERPASSWORD && config_1.SALESFORCEUSERNAME) {
            conn.loginByOAuth2(config_1.SALESFORCEUSERNAME, config_1.SALESFORCEUSERPASSWORD, function (error) {
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
exports.default = fetchDataFromSalesforce;
//# sourceMappingURL=fetchDataFromSalesforce.js.map