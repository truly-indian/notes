import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loadednotes: [
      {imgurl: 'https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/09/Notes-handwriting-mockuuup_0.jpeg?itok=PVL1ofMT', id: 'sdfas345', title: 'Notes in class', date: new Date(), location: 'GGSIPU', description: 'GURUGOBIND SINGH INDRAPRASTHA UNIVERSITY'},
      {imgurl: 'https://images.techhive.com/images/article/2014/07/notes-icon-100358271-large.jpg', id: 'dsfasrtf123dfs', title: 'Notes in class', date: new Date(), location: 'DTU', description: 'Delhi technical University'}
    ],
    user: null
  },
  mutations: {
    createnote (state, payload) {
      state.loadednotes.push(payload)
    },
    setuser (state, payload) {
      state.user = payload
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
    },
    signuserup ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newuser = {
              id: user.uid,
              registerednotes: []
            }
            commit('setuser', newuser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
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
    },
    user (state) {
      return state.user
    }
  }
})
