//import * as Vue from "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";
//import {Vue} from "../vue.js";
//import * as Vue from "../vue.js";
import {INCREMENT, storex} from "./store.js";

// couldn't import vue nor store because of CORS errors
// to allow these calls
// in firefox about:config security.fileuri.strict_origin_policy set to false

// ButtonOp Counter companion
const ButtonOp = {
    template: `
    <div>
        <button @click="increment">+</button><button @click="decrement">-</button>
    </div>
    `,
    methods: {
        increment() {
            this.$store.commit({
                type: INCREMENT,
                by: 3
            })
        },
        decrement() {
            this.$store.commit('decrement')
        },
    }
};

// let's create a Counter component
const Counter = {
    template: `
        <div>
            Counter: {{ count }} - {{whatisit}}
            <button-op/>
        </div>
    `,
    computed: {
        count() {
            return this.$store.state.count
        },
        whatisit: function () {
            return this.$store.getters.odd;
        }
    },
    components: {
        ButtonOp
    }
}

const StoryType = {
    template: `
        <div>
            <p>This is {{kind}} story</p>
        </div>
        `,
    computed: {
        kind: function () {
            return this.$store.getters.odd === 'Even' ? 'a' : 'an odd'
        }
    }
}

export default new Vue({
    //el: "#app",
    // now the store instance is injected into all child components.
    store: storex,
    components: {
        Counter,
        StoryType
    }
})
