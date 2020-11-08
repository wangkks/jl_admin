const getDefaultState = () => {
  return {
    searchData: []
  };
};

const state = getDefaultState();

const mutations = {
  SET_SEARCHDATA: (state, data) => {
    state.searchData = data;
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
