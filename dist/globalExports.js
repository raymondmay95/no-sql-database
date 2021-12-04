"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesforceHostUrl = exports.Development = void 0;
exports.Development = process.env.ENV === "development";
exports.salesforceHostUrl = exports.Development
    ? process.env.salesforceHostDevelopmentUrl
    : process.env.saelsforceHostProductionUrl;
//# sourceMappingURL=globalExports.js.map