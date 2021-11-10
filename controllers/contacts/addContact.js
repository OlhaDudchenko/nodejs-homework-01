const { fs, uuidv4, contactsPath } = require("./defaults");

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
    addContact,
}