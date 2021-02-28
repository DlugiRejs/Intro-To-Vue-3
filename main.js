const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id, action) {
            if (action === "ADD") {
                this.cart.push(id);
            }
            if (action === "REMOVE") {
                this.cart.splice(this.cart.findIndex(el => el.id === id), 1);

            }
        }
    }
})
