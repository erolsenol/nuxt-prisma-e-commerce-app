// // import { get, set, remove } from "../helper/index"

// import qs from "~/plugins/qs";

// const delay = (t: number) => new Promise((r) => setTimeout(r, t));

// export const useApp = defineStore("app", {
//   state: () => ({
//     n: 2,
//     incrementedTimes: 0,
//     decrementedTimes: 0,
//     numbers: [] as number[],
//     headerLogo: null,
//     footerLogo: null,
//   }),
//   getters: {
//     double: (state) => state.n * 2,
//     getUser: (state) => state.user,
//     getHasLogin: (state) => state.has_login,
//   },
//   actions: {
//     async getSiteInfo() {
//       console.log("get site info");

//       console.log("local", localStorage);

//       const config = {
//         method: "get",
//         params: {
//           id: "1",
//         },
//         paramsSerializer: (params) => qs.stringify(params, { encode: false }),
//       };

//       const response = await useFetch("/api/site", config);
//       console.log("response", response);
//       console.log("response", response.body);
//     },

//     async decrementToZero(interval: number = 300) {
//       if (this.n <= 0) return;

//       while (this.n > 0) {
//         this.$patch((state) => {
//           state.n--;
//           state.decrementedTimes++;
//         });
//         await delay(interval);
//       }
//     },
//   },
// });

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useApp, import.meta.hot));
// }
