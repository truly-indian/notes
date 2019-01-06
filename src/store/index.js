import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loadednotes: [
      {imgurl: 'https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/09/Notes-handwriting-mockuuup_0.jpeg?itok=PVL1ofMT', id: 'sdfas345', title: 'Notes in class', date: '27-09-2018'},
      {imgurl: 'https://images.techhive.com/images/article/2014/07/notes-icon-100358271-large.jpg', id: 'dsfasrtf123dfs', title: 'Notes in class', date: '12-08-2016'}
    ],
    user: {
      id: 'asdfkjhakjl132',
      registerednotes: ['dfas345']
    }
  },
  mutations: {
    createnote (state, payload) {
      state.loadednotes.push(payload)
    }
  },
  actions: {
    createnote ({commit}, payload) {
      const note = {
        title: payload.title,
        location: payload.location,
        imgurl: payload.imgurl,
        description: payload.description,
        date: payload.date,
        id: 'asfasd324'
      }
      commit('createnote', note)
    }
  },
  getters: {
    loadednotes (state) {
      return state.loadednotes.sort((noteA, noteB) => {
        return noteA.date > noteB.date
      })
    },
    featurednotes (state, getters) {
      return getters.loadednotes.slice(0, 5)
    },
    loadednote (state) {
      return (noteid) => {
        return state.loadednotes.find((note) => {
          return note.id === noteid
        })
      }
    }
  }
})
