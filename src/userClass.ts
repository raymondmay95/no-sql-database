/* eslint-disable valid-jsdoc */
export interface UserInterface {
  type: string;
  uuid: string;
  id: string;
  first_name: string;
  last_name: string;
  signupEmailSent: boolean;
  email: string;
  google_auth_user_uid: string;
  salesforce_external_id: string;
  salesforce_listings: string[];
  salesforce_id: string;
}

export class User {
  public type: string;

  public readonly uuid: string;

  public readonly id: string;

  public first_name: string;

  public last_name: string;

  public signupEmailSent: boolean;

  public readonly email: string;

  public google_auth_user_uid: string;

  public salesforce_external_id: string;

  public salesforce_listings: string[];

  public salesforce_id: string;

  constructor(authData: UserInterface) {
    this.type = authData.type;
    this.uuid = authData.uuid;
    this.id = authData.id;
    this.first_name = authData.first_name;
    this.last_name = authData.last_name;
    this.signupEmailSent = authData.signupEmailSent;
    this.email = authData.email;
    this.google_auth_user_uid = authData.google_auth_user_uid;
    this.salesforce_external_id = authData.google_auth_user_uid;
    this.salesforce_listings = authData.salesforce_listings;
    this.salesforce_id = authData.salesforce_id;
  }

  /**
   * properties
   * this method will return the entire user orginized in a nested obj
   */
  public properties() {
    return {
      type: this.type,
      uuid: this.uuid,
      id: this.id,
      name: `${this.first_name} ${this.last_name}`,
      email: this.email,
      authProviders: { google_auth_uid: this.google_auth_user_uid },
      salesforce: {
        salesforce_external_id: this.salesforce_external_id,
        salesforce_listings: this.salesforce_listings,
        salesforce_id: this.salesforce_id,
      },
    };
  }

  public updateProperty(property: string, newData: any) {
    if (!newData)
      return new Error(
        "data must be provided to updateProperty as the second perameter"
      );
    if (Array.isArray(newData) && !newData.length)
      return new Error("any empty array cannot be provied as data");

    switch (property.toLocaleLowerCase()) {
      case "type": {
        this.type = newData;
        return this.type;
      }
      case "uuid": {
        const error = new Error("uuid cannot be altered");
        return error;
      }
      case "id": {
        const error = new Error("id cannot be altered");
        return error;
      }
      case "first_name": {
        this.first_name = newData;
        return this.first_name;
      }
      case "last_name": {
        this.last_name = newData;
        return this.last_name;
      }
      case "signupEmailSent": {
        this.signupEmailSent = newData;
        return this.signupEmailSent;
      }
      case "email": {
        const error = new Error("email cannot be altered");
        return error;
      }
      case "google_auth_user_uid": {
        this.google_auth_user_uid = newData;
        return this.google_auth_user_uid;
      }
      case "salesforce_external_id": {
        this.salesforce_external_id = newData;
        return this.salesforce_external_id;
      }
      case "salesforce_id": {
        this.salesforce_id = newData;
        return this.salesforce_id;
      }
      case "salesforce_listings": {
        const error = new Error(
          "did you mean to call the update listings method (.updateListings(data: Listings[]))"
        );
        return error;
      }
      default:
        const error = new Error(`no property found ${property}`);
        return error;
    }
  }
  public updateListings(listings: string[] | [], remove: string) {
    if (!Array.isArray(listings))
      return new Error(
        `please pass an array to updateListings. currentParameter ${listings}`
      );
    if (listings === [] && !remove) {
      this.salesforce_listings = [];
      return {
        message: "cleared listings",
      };
    }
    if (remove.length) {
      const elementIndex = this.salesforce_listings.indexOf(remove);
      if (elementIndex) {
        this.salesforce_listings = this.salesforce_listings
          .splice(0, elementIndex)
          .concat(this.salesforce_listings.splice(elementIndex + 1));
        return this.salesforce_listings;
      }
      return new Error("element to remove was not found");
    }
  }
}
