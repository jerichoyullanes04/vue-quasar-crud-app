// db.js
let data = {
  users: [],
};

module.exports = {
  getData: () => data,
  addUser: (user) => {
    data.users.push(user);
  },
};
