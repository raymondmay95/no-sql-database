"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesforceUserPassword = exports.salesforceUserName = exports.salesforceHostUrl = exports.Development = void 0;
exports.Development = process.env.ENV === "development";
exports.salesforceHostUrl = exports.Development
    ? process.env.salesforceHostDevelopmentUrl
    : process.env.saelsforceHostProductionUrl;
exports.salesforceUserName = process.env.salesforceUserName;
exports.salesforceUserPassword = process.env.salesforceUserPassword;
//# sourceMappingURL=globalExports.js.map