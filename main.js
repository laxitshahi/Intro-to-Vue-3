const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeItem(id) {
            const index = this.cart.indexOf(id)
            if(index > -1){
                this.cart.splice(index,1)
            }
            // output = this.cart.filter(item => item !== id )
            // this.cart = output
        }
    }
})
