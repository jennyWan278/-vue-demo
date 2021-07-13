import service from './service'

export default {
  namespaced: true,
  state: {
    data: 'modulename',
    loading: false
  },
  mutations: {
    updateData(state, newData) {
      state.data = newData
    },
    updateLoading(state, loading) {
      state.loading = loading
    }
  },
  getters: {
    hasData(state) {
      return !!state.data
    }
  },
  actions: {
    updateData({ commit }, newData) {
      commit('updateData', newData)
    },
    fetchData({ commit }) {
      commit('updateLoading', true)
      return service
        .fetchData()
        .then(data => {
          commit('updateData', data)
        })
        .finally(() => {
          commit('updateLoading', false)
        })
    }
  }
}
