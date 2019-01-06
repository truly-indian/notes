<template>
   <v-container>
       <v-layout ro wrap v-for="note in notes" :key="note.id" class="mb-2">
          <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
              <v-card class="blue" >
               <v-container fluid>
                   <v-layout row>
                    <v-flex xs5 sm4 md3>
                      <v-img
                    :src="note.imgurl"
                    height="130px"
                  ></v-img>
                    </v-flex>
                    <v-flex xs7 sm8 md9>
                    <v-card-title primary-title>
                        <div>
                      <h1 mb-0 class="white--text">{{note.title}}</h1>
                      <div>{{note.date}}</div>
                      </div>
                  </v-card-title>
                  <v-card-actions>
                      <v-btn flat :to="'/notes/' +note.id">
                         <v-icon left light>arrow_forward</v-icon> View Note
                      </v-btn>
                  </v-card-actions>
                    </v-flex>
                   </v-layout>
               </v-container>
               </v-card>
          </v-flex>
       </v-layout>
   </v-container>
</template>
<script>
export default {
  computed: {
    notes () {
      return this.$store.getters.loadednotes
    }
  }
}
</script>
