import userProfile from "./data/user";

const UserSection = document.getElementById("user");
const UserList = document.createElement("ul");

const buildUser = (userData) => {
    for (const prop in userData) {
        const lineItemContent = `${prop} : ${userData[prop]} `;
        const lineItem = document.createElement("li");

        lineItem.innerText = lineItemContent;
        UserList.appendChild(lineItem);
        UserSection.appendChild(UserList);
    }
};

(() => {
    console.log("working!");
    console.log(userProfile);
    buildUser(userProfile);
})();
