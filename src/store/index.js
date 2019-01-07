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
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createnote (state, payload) {
      state.loadednotes.push(payload)
    },
    setuser (state, payload) {
      state.user = payload
    },
    setloading (state, payload) {
      state.loading = payload
    },
    seterror (state, payload) {
      state.error = payload
    },
    clearerror (state) {
      state.error = null
    }
  },
  actions: {
    createnote ({commit}, payload) {
      const note = {
        title: payload.title,
        location: payload.location,
        imgurl: payload.imgurl,
        description: payload.description,
        date: payload.date.toISOSString()
      }
      firebase.database().ref('notes').push(note)
        .then((data) => {
          console.log(data)
          commit('createnote', note)
        })
        .catch((error) => {
          console.log(error)
        })
      commit('createnote', note)
    },
    signuserup ({commit}, payload) {
      commit('setloading', true)
      commit('clearerror')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setloading', false)
            const newuser = {
              id: user.uid,
              registerednotes: []
            }
            commit('setuser', newuser)
          }
        )
        .catch(
          error => {
            commit('setloading', false)
            commit('seterror', error.message)
            console.log(error)
          }
        )
    },
    clearerror ({commit}) {
      commit()
    },
    signuserin ({commit}, payload) {
      commit('setloading', true)
      commit('clearerror')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setloading', false)
            const newuser = {
              id: user.uid,
              registerednotes: []
            }
            commit('setuser', newuser)
          }
        )
        .catch(
          error => {
            commit('setloading', false)
            commit('seterror', error.message)
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
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
