const mongoose = require('mongoose');

const Contact = require('./contact');

async function main() {
    const connection = await mongoose.connect('mongodb://localhost/noam', { useNewUrlParser: true });

    const c1 = new Contact({ name: 'ynon' });
    const c2 = new Contact({ name: 'noam', email: 'noam@gmail.com' });

    await c1.save();
    await c2.save();
    const contactItems = await Contact.find({});
    console.log(contactItems);

    mongoose.disconnect();
}

main();