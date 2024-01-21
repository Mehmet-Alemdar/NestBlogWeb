import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    meals: ["breakfast"],
    selectedTopic: "World",
    menuOpen: false,
    allBlogs: []
  },
  mutations: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    setAllBlogs(state, data) {
      state.allBlogs = data;
    }
  },
  actions: {
    fetchAllBlogs({ commit }) {
      try {
        axios.get("https://nstblg.onrender.com/blog/findAll", {
          headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTgxOGNlOWMxOThmZTA5NDI0MzMyMzAiLCJpYXQiOjE3MDUyMzUzMDQsImV4cCI6MTcwNTIzODkwNH0.HlNCONV11kZd0TlALjqMw2Q_Ow4PNRW_J_6UtqpAruI'}
        }).then((response) => {
          console.log("response ",response.data);
          commit("setAllBlogs", response.data);
        }).catch((error) => {
          console.log("ww ",error);
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    latestBlogs(state) {
      const d = state.allBlogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return d.slice(0,5)
    }
  }
});

export default store;