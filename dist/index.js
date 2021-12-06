"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFirestoreDoc_1 = __importDefault(require("./utils/functions/getFirestoreDoc"));
async function entry(email) {
    console.log("---Starting.... Wish me luck :)----");
    await (0, getFirestoreDoc_1.default)(email);
    console.log("---Finished....----");
    return email;
}
entry("rmay@mauiresortrentals.com");
//# sourceMappingURL=index.js.map