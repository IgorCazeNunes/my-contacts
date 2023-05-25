const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Igor',
    email: 'igorcaze@gmail.com',
    phone: '99999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Carol',
    email: 'carol@gmail.com',
    phone: '99999999999',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }
}

module.exports = new ContactsRepository();
