const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            onSale: true,
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title () {
            // if(this.onSale){
            //     return this.brand + ' ' + this.product + ' is on sale'
            // }
            return this.brand + ' ' + this.product
        },
        image () {
            return this.variants[this.selectedVariant].image
        },
        inStock () {
            return this.variants[this.selectedVariant].quantity
        },
        discount () {
            if(this.onSale){
                return this.brand + ' ' + this.product + ' is on sale'
            }
        }
    }
})
