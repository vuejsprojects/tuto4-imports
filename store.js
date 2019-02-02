//import * as Vue from "../vue.js";
//import  Vuex from "../vuex.js";

Vue.use(Vuex);


// Vuex store
// for clarification we define mutation as constants
// ex: increment

// ve can group all the mutaion constant in a file
const INCREMENT = 'increment'

const storex = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        [INCREMENT](state, payload) {
            state.count += payload.by
        },
        decrement(state) {
            state.count--
        },
    },
    getters: {
        odd: state => (state.count % 2 === 0) ? 'Even' : 'Odd'
    }
});

export {INCREMENT, storex}