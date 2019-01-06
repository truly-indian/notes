<template>
    <v-container>
        <v-layout row wrap>
          <v-flex xs12>
              <v-card>
                  <v-card-title>
                      <h1 class="red--text">{{note.title}}</h1>
                  </v-card-title>
                   <v-img
                    :src="note.imgurl"
                    height="500px"
                  ></v-img>
                  <v-card-text>
                      <div class="blue--text">{{note.date}}--the place where it was noted</div>
                      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nam modi beatae veniam voluptate laborum animi, soluta qui necessitatibus facere voluptates quas, quis totam. Facilis quidem architecto quam omnis soluta.</div>
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="red white--text" >
                          View
                      </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    note () {
      return this.$store.getters.loadednote(this.id)
    }
  }
}
</script>
