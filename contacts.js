const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.resolve("db","contacts.json");


function listContacts() {
  fs.readFile(contactsPath,"utf8", (error, data) => {
        if (error) {
          console.error(error)
        }
         console.log(data);
  })
      
}

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


function addContact(name, email, phone) {
    const contact = ({id: uuidv4(), name, email, phone })
  fs.readFile(contactsPath,"utf8",function(err,data){
                    if(err)
                        console.log(err)
                    else
                    {
                const parsedContacts = JSON.parse(data);
                const newData=[...parsedContacts,contact]
                
                const newContact = JSON.stringify(newData)
                  fs.writeFile(contactsPath,newContact,function(erro){
                           if(erro)
                         console.log("error : "+erro);
                                else
                               console.log(newData);
                            });
                        }
                });
  }

module.exports = {
    listContacts,
    contactsPath,
    getContactById,
    removeContact,
    addContact
}