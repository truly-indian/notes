<template>
 <v-container>
     <v-layout row>
         <v-flex xs12 sm6 offset-sm3>
           <v-card>
               <v-card-text>
                   <v-container>
                       <v-from>
                           <v-layout row>
                               <v-flex xs12>
                                 <v-text-field name="email" label="Email" id="email" v-model="email" type="email" required>

                                 </v-text-field>
                               </v-flex>
                           </v-layout>
                            <v-layout row>
                               <v-flex xs12>
                                 <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required>

                                 </v-text-field>
                               </v-flex>
                           </v-layout>
                            <v-layout row>
                               <v-flex xs12>
                                 <v-text-field name="confirmpassword" label="Confirm Password" id="confirmpassword" v-model="confirmpassword" type="password" :rules="[comparepasswords]">

                                 </v-text-field>
                               </v-flex>
                           </v-layout>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-btn type="submit" @click.prevent="onsignup">
                                      Sign Up
                                   </v-btn>
                               </v-flex>
                           </v-layout>
                       </v-from>
                   </v-container>
               </v-card-text>
           </v-card>
         </v-flex>
     </v-layout>
 </v-container>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmpassword: ''
    }
  },
  computed: {
    comparepasswords () {
      return this.password !== this.confirmpassword ? 'passwords do not match' : 'passwords matched'
    },
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onsignup () {
      this.$store.dispatch('signuserup', {email: this.email, password: this.password})
    }
  }
}
</script>
