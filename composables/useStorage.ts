export const useStorage = () => {
  return {
    get(name: string) {
      let data = localStorage.getItem(name);
      if (!data) return data;
      return JSON.parse(data);
    },
    set(name: string, val: any) {
      return localStorage.setItem(name, JSON.stringify(val));
    },

    addArray(name: String, val: Array<string>) {
      let oVal = localStorage.get(name);
      let nVal = oVal.concat(val);
      localStorage.set(name, nVal);
    },

    remove(name: string) {
      localStorage.removeItem(name);
    }
  }
}