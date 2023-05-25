const ContactsRepository = require('../repositories/ContactsRepository');

class ContactControler {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() { }

  store() { }

  update() { }

  delete() { }
}

// Singleton
module.exports = new ContactControler();
