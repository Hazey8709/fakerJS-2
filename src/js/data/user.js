import {faker}  from "@faker-js/faker";

const avatar = faker.image.avatar();
const name = faker.name.firstName();
const email = faker.internet.email();
const userId = faker.datatype.uuid();
const birthdate = faker.date.birthdate();
const vehicle = faker.vehicle.vehicle();

//! working part
const userProfile = {
    avatar,
    name,
    email,
    userId,
    birthdate,
    vehicle,
};



export default userProfile;

// //! working part
// const userProfile = {
//     avatar,
//     name,
//     email,
//     userId,
//     birthdate,
//     vehicle,
// };
