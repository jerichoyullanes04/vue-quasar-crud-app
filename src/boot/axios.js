// import { boot } from "quasar/wrappers";

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// });

// import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "https://api.example.com",
// });
// export default ({ Vue }) => {
//   Vue.prototype.$axios = axiosInstance;
// };
// export { axiosInstance };

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
});

export default ({ app }) => {
  app.config.globalProperties.$axios = axiosInstance;
};

export { axiosInstance };
