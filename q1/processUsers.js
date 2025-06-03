//Question 1
//Array manipulation => i. filter active user ii. sort alphabetically
function processUsers(users) {

    //filter only active user
    const filteredUsers = users.filter(function (user) {
        return user.isActive;
    });

    //sort filtered users by name alphabetically
    filteredUsers.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    return filteredUsers;

}

const users = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Charlie", isActive: false },
    { id: 3, name: "Bob", isActive: true },
    { id: 4, name: "Diana", isActive: true }
];

console.log(processUsers(users));
