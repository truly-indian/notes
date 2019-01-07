<template>
  <div id="app">
    <v-navigation-drawer temporary v-model="sidenav"  fixed app>
  <v-list>
    <v-list-tile v-for="item in menuitems" :key="item.title" router :to="item.link">
      <v-list-tile-action>
        <v-icon left>{{item.icon}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>{{item.title}}</v-list-tile-content>
    </v-list-tile>
  </v-list>
    </v-navigation-drawer>
    <v-toolbar dark  class="purple" >
      <v-toolbar-side-icon @click.native.stop="sidenav=!sidenav" class="hidden-sm-and-up"></v-toolbar-side-icon>
   <v-toolbar-title style="cursor:pointer"> <router-link to="/" tag="span">e-Notes</router-link></v-toolbar-title>
   <v-spacer></v-spacer>
   <v-toolbar-items class="hidden-xs-only">
     <v-btn flat dark v-for="item in menuitems" :key="item.title" router :to="item.link"><v-icon left>{{item.icon}}</v-icon>{{item.title}}</v-btn>
   </v-toolbar-items>
      </v-toolbar>
      <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      sidenav: false
    }
  },
  computed: {
    menuitems () {
      let menuitems = [
        {icon: 'face', title: 'signup', link: '/signup'},
        {icon: 'lock_open', title: 'signin', link: '/signin'}
      ]
      if (this.userauth) {
        menuitems = [
          {icon: 'import_contacts', title: 'ViewNotes', link: '/notes'},
          {icon: 'cloud_queue', title: 'Write', link: '/notes/new'},
          {icon: 'person', title: 'Profile', link: '/profile'}
        ]
      }
      return menuitems
    },
    userauth () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>
<style>

 </style>
