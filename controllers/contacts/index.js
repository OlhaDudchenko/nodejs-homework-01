const { addContact } = require("./addContact");
const { getContactById } = require("./getContactById");
const { listContacts } = require("./listContacts");
const { removeContact } = require("./removeContact");

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}