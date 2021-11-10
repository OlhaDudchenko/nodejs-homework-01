const { fs, contactsPath } = require("./defaults");

function removeContact(contactId) {
  fs.readFile(contactsPath,"utf8", (error, data) => {
        if (error) {
          console.error(error)
        }
    const parsedData = JSON.parse(data)
    const removedContact = parsedData.filter((contact) => contact.id !== contactId)
    console.log(removedContact)
  })
}

module.exports = {
    removeContact,
}