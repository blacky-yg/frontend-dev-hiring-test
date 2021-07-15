const faker = require('faker');

module.exports = () => {
    const data = {
        restos: []
    }

    for (let i = 1; i <= 25; i++) {
        let resto = {};

        resto.id = i;
        resto.userId = i + 100;
        resto.name = faker.company.companyName();
        resto.location = faker.address.streetAddress();
        resto.image = faker.image.image();

        data.restos.push(resto);
    }

    return data;
}