// import { get, set, remove } from "../helper/index"

const delay = (t: number) => new Promise((r) => setTimeout(r, t))

export const useUser = defineStore('user', {
    state: () => ({
        n: 2,
        incrementedTimes: 0,
        decrementedTimes: 0,
        numbers: [] as number[],
        user: null,
        has_login: false,
        access_token: null,
        refresh_token: null,
    }),
    getters: {
        double: (state) => state.n * 2,
        getUser: (state) => state.user,
        getHasLogin: (state) => state.has_login,
    },
    actions: {
        login(user: Object) {
            this.user = user
            this.has_login = true
            // set("user", this.user)
            // set("has_login", this.has_login)
        },
        logout() {
            this.user = null
            this.has_login = false
            // remove("user")
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
