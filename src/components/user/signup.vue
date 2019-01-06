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
                                 <v-text-field name="confirmpassword" label="Confirm Password" id="confirmpassword" v-model="confirm" type="password" :riles="[comparepasswords]">

                                 </v-text-field>
                               </v-flex>
                           </v-layout>
                           <v-layout row>
                               <v-flex xs12>
                                   <v-btn type="submit">
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
      return this.password !== this.confirmpassword ? 'passwords do not match' : ''
    }
  },
  methods: {
    onsignup () {
      console.log({email: this.email, password: this.password, confirmpassword: this.confirmpassword})
    }
  }
}
</script>
