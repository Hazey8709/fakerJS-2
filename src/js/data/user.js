import { faker } from "@faker-js/faker";

//const users = "";

// //! working part
// const userProfile = {
//     avatar,
//     name,
//     email,
//     userId,
//     birthdate,
//     vehicle,
// };

const users = [];

for (let i = 0; i < 50; i++) {
    const avatar = faker.image.avatar();
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const userId = faker.datatype.uuid();
    const birthdate = faker.date.birthdate();
    const vehicle = faker.vehicle.vehicle();

    const userProfile = {
        avatar,
        name,
        email,
        userId,
        birthdate,
        vehicle,
    };

    users.push(userProfile);
}

// const users = userProfile[i];

// console.log(users);
export default users;
