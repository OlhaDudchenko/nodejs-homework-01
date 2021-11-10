const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const contactsPath = path.resolve("db", "contacts.json");

module.exports = {
    fs,
    path,
    uuidv4,
   contactsPath
}