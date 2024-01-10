import { createStore } from "vuex";
import state from "./state";
import * as actions from "./actions";
import {toggleMenu} from "./mutations";
import * as getters from "./getters";

const store = createStore({
  state,
  actions,
  mutations: {
    toggleMenu
  },
  getters
});

export default store;