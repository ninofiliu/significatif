import { createStore } from "vuex";

export default createStore({
  state: {
    cover: null as null | "left" | "center" | "right",
  },
  mutations: {
    setCoverLeft(state) {
      state.cover = "left";
    },
    setCoverCenter(state) {
      state.cover = "center";
    },
    setCoverRight(state) {
      state.cover = "right";
    },
  },
});
