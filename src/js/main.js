//! Working statement
import users from "./data/user";

const buildUser = (users) => {
    const usersContainer = document.getElementById("user");
    usersContainer.innerText = "";

    for (let i = 0; i < users.length; i++) {
        const userList = document.createElement("section");

        const img = document.createElement("img");
        const avatar = document.createElement("a");
        const nameTitle = document.createElement("h3");
        const name = document.createElement("p");
        const emailTitle = document.createElement("h3");
        const email = document.createElement("p");
        const userIdTitle = document.createElement("h3");
        const userId = document.createElement("p");
        const birthdateTitle = document.createElement("h3");
        const birthdate = document.createElement("p");
        const vehicleTitle = document.createElement("h3");
        const vehicle = document.createElement("p");

        avatar.URL = users[i].avatar;

        nameTitle.innerText = "Name: ";
        name.innerText = users[i].name;

        emailTitle.innerText = "Email: ";
        email.innerText = users[i].email;

        userIdTitle.innerText = "User-Id: ";
        userId.innerText = users[i].userId;

        birthdateTitle.innerText = "Birth-Date: ";
        birthdate.innerText = users[i].birthdate;

        vehicleTitle.innerText = "Vehicle: ";
        vehicle.innerText = users[i].vehicle;

        userList.appendChild(img);
        userList.appendChild(avatar);
        userList.appendChild(nameTitle);
        userList.appendChild(name);
        userList.appendChild(emailTitle);
        userList.appendChild(email);
        userList.appendChild(userIdTitle);
        userList.appendChild(userId);
        userList.appendChild(birthdateTitle);
        userList.appendChild(birthdate);
        userList.appendChild(vehicleTitle);
        userList.appendChild(vehicle);

        usersContainer.appendChild(userList);
    }
};

(() => {
    //console.log("----------- working! ------");
    //console.log("----- users ------:", users);

    buildUser(users);
})();

// //! Working statement
// import users from "./data/user";
// const buildUser = (users) => {
//     const usersContainer = document.getElementById("user");
//     usersContainer.innerText = " ";

//     users.forEach((user) => {
//         //console.log(user)
//         const userList = document.createElement("section");

//         const img = document.createElement("img");
//         userList.appendChild(img);

//         const avatar = document.createElement("a");
//         userList.appendChild(avatar);
//         avatar.href = user.avatar;

//         usersContainer.appendChild(userList);
//     });
// };

// (() => {
//     console.log("----------- working! ------");
//     console.log(users);
//     //console.log(user);

//     buildUser(users);
// })();

// //! Works but prints object oject 50 times
// import users from "./data/user";

// //!  Whole set-up (works)
// const UserSection = document.getElementById("user");
// const UserList = document.createElement("ul");

// //! Working statement
// const buildUser = (users) => {
//     for (const prop in users) {
//         const lineItemContent = `${prop} : ${users[prop]} `;
//         const lineItem = document.createElement("li");

//         lineItem.innerText = lineItemContent;
//         UserList.appendChild(lineItem);
//         UserSection.appendChild(UserList);
//     }
// };

// (() => {
//     console.log("----------- working! ------");
//     buildUser(users);
// })();

// //! works but only prints one object
// //! Second working way
// import users from "./data/user";

// const userContainer = document.getElementById("user");
// const userList = document.createElement("section");

// //! Working statement
// const buildUser = (users) => {
//     const img = document.createElement("img");
//     const avatar = document.createElement("a");

//     const nameTitle = document.createElement("h3");
//     const name = document.createElement("p");

//     const emailTitle = document.createElement("h3");
//     const email = document.createElement("p");

//     const userIdTitle = document.createElement("h3");
//     const userId = document.createElement("p");

//     const birthdateTitle = document.createElement("h3");
//     const birthdate = document.createElement("p");

//     const vehicalTitle = document.createElement("h3");
//     const vehicle = document.createElement("p");

//     avatar.URL = users.avatar;
//     nameTitle.innerText = "Name:";
//     name.innerText = users[0].name;
//     emailTitle.innerText = "Email:";
//     email.innerText = users[0].email;
//     userIdTitle.innerText = "ID:";
//     userId.innerText = users[0].userId;
//     birthdateTitle.innerText = "birth-Date:";
//     birthdate.innerText = users[0].birthdate;
//     vehicalTitle.innerText = "Vehicle:";
//     vehicle.innerText = users[0].vehicle;

//     userList.appendChild(img);
//     userList.appendChild(avatar);

//     userList.appendChild(nameTitle);
//     userList.appendChild(name);

//     userList.appendChild(emailTitle);
//     userList.appendChild(email);

//     userList.appendChild(userIdTitle);
//     userList.appendChild(userId);

//     userList.appendChild(birthdateTitle);
//     userList.appendChild(birthdate);

//     userList.appendChild(vehicalTitle);
//     userList.appendChild(vehicle);

//     userContainer.appendChild(userList);
// };

// (() => {
//     console.log("----------- working! ------");
//     console.log("users:", users);

//     buildUser(users);
// })();
