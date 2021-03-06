# Swipe js

Simple class for swipe interactions.

## Basic js Set up

```
import Swipe from "~/Swipe.js"

const otps = {}
const swipe = new Swipe( opts )

swipe.init()
```

## OPTS

| Opt ID | Required | Default | Values | Description |
| --- | --- | --- | --- | --- |
| target | false | document | dom elements | The dom target |
| resistance | false | `0` | Recommended from `0` to `10` | Min touch distance to trigger the callback on swipe |
| callback | false | `console.log(swipe)` | function | The callback for the swipe gesture |

## Vue Component Example 

```
<!--
    SwipeBox.vue
-->

<template>
    <div class="swipe-box">
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
    
    .swipe-box {
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
```
