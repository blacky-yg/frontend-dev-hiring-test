const faker = require('faker');

module.exports = () => {
    const data = {
        restos: []
    }

    for (let i = 1; i <= 50; i++) {
        let resto = {};

        resto.id = i;
        resto.userId = i + 100;
        resto.name = faker.name.firstName();
        resto.location = faker.address.streetAddress();

        data.restos.push(resto);
    }

    return data;
}