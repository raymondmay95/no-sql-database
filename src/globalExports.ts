export const Development = process.env.ENV === "development";

export const salesforceHostUrl = Development
  ? process.env.salesforceHostDevelopmentUrl
  : process.env.saelsforceHostProductionUrl;

export const salesforceUserName = process.env.salesforceUserName;
export const salesforceUserPassword = process.env.salesforceUserPassword;
