const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Igor',
    email: 'igorcaze@gmail.com',
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
}

module.exports = new ContactsRepository();
