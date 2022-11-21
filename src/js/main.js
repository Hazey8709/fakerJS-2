import userProfile from "./data/user";

const userContainer = document.getElementById("user");
const userList = document.createElement("section");

//! Working statement
const buildUser = () => {
    const img = document.createElement("img");
    const avatar = document.createElement("a");
    //const avatar = document.URL

    const nameTitle = document.createElement("h3");
    const name = document.createElement("p");

    const emailTitle = document.createElement("h3");
    const email = document.createElement("p");

    const userIdTitle = document.createElement("h3");
    const userId = document.createElement("p");

    const birthdateTitle = document.createElement("h3");
    const birthdate = document.createElement("p");

    const vehicalTitle = document.createElement("h3");
    const vehicle = document.createElement("p");

    avatar.URL = userProfile.avatar;
    nameTitle.innerText = "Name:";
    name.innerText = userProfile.name;
    emailTitle.innerText = "Email:";
    email.innerText = userProfile.email;
    userIdTitle.innerText = "ID:";
    userId.innerText = userProfile.userId;
    birthdateTitle.innerText = "birth-Date:";
    birthdate.innerText = userProfile.birthdate;
    vehicalTitle.innerText = "Vehicle:";
    vehicle.innerText = userProfile.vehicle;

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

    userList.appendChild(vehicalTitle);
    userList.appendChild(vehicle);

    userContainer.appendChild(userList);
};


(() => {
    console.log("----------- working! ------");
    //console.log("userProfile:", userProfile);

    buildUser(userProfile);
})();

// //!  Whole set-up (works)
// const UserSection = document.getElementById("user");
// const UserList = document.createElement("ul");

// //! Working statement
// const buildUser = (userData) => {

//     for (const prop in userData) {
//         const lineItemContent = `${prop} : ${userData[prop]} `;
//         const lineItem = document.createElement("li");

//         lineItem.innerText = lineItemContent;
//         UserList.appendChild(lineItem);
//         UserSection.appendChild(UserList);
//     }
// };

// (() => {
//     // console.log(userData);
//     console.log("----------- working! ------");
//     //console.log(userProfile);
//     //buildUser( userProfile );
//     buildUser(userProfile);
// })();
