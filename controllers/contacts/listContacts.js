const { fs, contactsPath } = require("./defaults");

function listContacts() {
  fs.readFile(contactsPath,"utf8", (error, data) => {
        if (error) {
          console.error(error)
        }
         console.log(data);
  })
      
}
module.exports = {
    listContacts,
}