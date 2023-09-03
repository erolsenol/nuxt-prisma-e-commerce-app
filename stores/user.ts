// import { get, set, remove } from "../helper/index"

const storage = useStorage()

console.log("user storageee", storage);

const delay = (t: number) => new Promise((r) => setTimeout(r, t))

export const useUser = defineStore('user', {
    state: () => ({
        n: 2,
        incrementedTimes: 0,
        decrementedTimes: 0,
        numbers: [] as number[],
        user:  null,
        has_login:  false,
        access_token:  null,
        refresh_token: null,
    }),
    getters: {
        double: (state) => state.n * 2,
        getUser: (state) => state.user,
        getHasLogin: (state) => state.has_login,
    },
    actions: {
        login(data: Object) {
            this.user = data.user
            this.access_token = data.access_token
            this.has_login = true
        },
        logout() {
            this.user = null
            this.access_token = null
            this.has_login = false

            // remove("user")
            // remove("access_token")
            // remove("has_login")
        },
        increment(amount = 1) {
            this.incrementedTimes++
            this.n += amount
        },

        changeMe() {
            console.log('change me to test HMR')
        },

        async fail() {
            const n = this.n
            await delay(1000)
            this.numbers.push(n)
            await delay(1000)
            if (this.n !== n) {
                throw new Error('Someone changed n!')
            }

            return n
        },

        async decrementToZero(interval: number = 300) {
            if (this.n <= 0) return

            while (this.n > 0) {
                this.$patch((state) => {
                    state.n--
                    state.decrementedTimes++
                })
                await delay(interval)
            }
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
