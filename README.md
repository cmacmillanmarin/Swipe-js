# Swipe js

Native and simple class for swipe interactions.

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
| resistance | false | `10` | Recommended from `0` to `15` | Min touch distance to trigger the callback on swipe |
| callback | false | `console.log( swipe )` | function | The callback for the swipe gesture |

## Vue Component Example 

```
<template>
    <div class="box-swipe">
        <p v-text="swipeObj" />
    </div>
</template>

<script>
    
    import Swipe from "~/Swipe.js"

    export default {
        name: "SwipeBox",
        data() {
            return {
                swipeObj: {}
            }
        },
        mounted() { this.init() },
        methods: {
            init() {
                this.swipe = new Swipe({
                    target: this.$el,
                    resistance: 0,
                    callback: this.onSwipe
                })
            },
            onSwipe( swipe ) {
                this.swipeObj = swipe;
                console.log( this.swipeObj );
            }
        },
        beforeDestroy() {
            this.swipe.destroy();
        }
    }

</script>
```
