// import { get, set, remove } from "../helper/index"

const delay = (t: number) => new Promise((r) => setTimeout(r, t));

export const useApp = defineStore("app", {
  state: () => ({
    loading: true,
    headerLogo: null,
    footerLogo: null,
    headerBgColor: null,
    footerBgColor: null,
    headerFontColor: null,
    footerFontColor: null,

    mail: null,
    mail_en: null,
    phone: null,
    phone_en: null,
    address: null,
    address_en: null,
    footerText: null,
  }),
  getters: {
    getInfo: (key) => (state:Object) => state[key],
  },
  actions: {
    async getSiteInfo() {
      this.$patch((state) => {
        state.loading = true;
      });
      const { data } = await useFetch("/api/site?id=1").finally(() => {
        this.$patch((state) => {
          state.loading = false;
        });
      });

      if (data.value?.status) {
        this.$patch((state) => {
          state.headerLogo = data.value?.data.headerLogo;
          state.footerLogo = data.value?.data.footerLogo;
          state.headerBgColor = data.value?.data.headerBgColor;
          state.footerBgColor = data.value?.data.footerBgColor;
          state.headerFontColor = data.value?.data.headerFontColor;
          state.footerFontColor = data.value?.data.footerFontColor;
          state.mail = data.value?.data.mail;
          state.mail_en = data.value?.data.mail_en;
          state.phone = data.value?.data.phone;
          state.phone_en = data.value?.data.phone_en;
          state.address = data.value?.data.address;
          state.address_en = data.value?.data.address_en;
          state.footerText = data.value?.data.footerText;
        });
      }
    },

    async decrementToZero(interval: number = 300) {
      if (this.n <= 0) return;

      while (this.n > 0) {
        this.$patch((state) => {
          state.n--;
          state.decrementedTimes++;
        });
        await delay(interval);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useApp, import.meta.hot));
}
