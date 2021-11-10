const { fs, contactsPath } = require("./defaults");

function getContactById(contactId) {
  fs.readFile(contactsPath,"utf8", (error, data) => {
        if (error) {
          console.error(error)
        }
    const parsedData = JSON.parse(data)
    const contactsById = parsedData.filter((x) => x.id === contactId)
       console.log(contactsById)
  })
}

module.exports = {
    getContactById,
}