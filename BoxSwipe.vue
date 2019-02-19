<template>
    <div class="box-swipe">
        <p v-text="swipeObj" />
    </div>
</template>

<script>
    
    import Swipe from "./Swipe.js"

    export default {
        name: "SwipeBox",
        data() {
            return {
                swipeObj: {}
            }
        },
        mounted() { 
            this.init() 
        },
        methods: {
            init() {
                this.swipe = new Swipe({
                    target: this.$el,
                    callback: this.onSwipe
                })
                this.swipe.init()
            },
            onSwipe( swipe ) {
                this.swipeObj = swipe
                console.log( this.swipeObj )
            }
        },
        beforeDestroy() {
            this.swipe.destroy()
        }
    }

</script>

<style lang="scss" scoped>
    
    .box-swipe {
        position: relative;
        width: 250px;
        height: 250px;
        border: 1px solid lime;
        p {
            font-size: 14px;
            color: lime;
        }
    }

</style>