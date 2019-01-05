<template>
   <v-container>
       <v-layout ro wrap>
          <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
              <v-card class="blue">
               <v-container fluid>
                   <v-layout row>
                    <v-flex xs5 sm4 md3>
                      <v-img
                    src="https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/09/Notes-handwriting-mockuuup_0.jpeg?itok=PVL1ofMT"
                    height="130px"
                  ></v-img>
                    </v-flex>
                    <v-flex xs7 sm8 md9>
                    <v-card-title primary-title>
                        <div>
                      <h1 mb-0 class="white--text">My Note</h1>
                      <div>17th-july-2018</div>
                      </div>
                  </v-card-title>
                  <v-card-actions>
                      <v-btn flat to="notes/1">
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
