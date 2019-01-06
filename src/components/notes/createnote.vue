<template>
  <v-container>
      <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
           <h1 class="red--text">Create a New Note</h1>
          </v-flex>
      </v-layout>
      <v-layout row>
         <v-flex xs12>
            <v-form @submit.prevent="oncreatenote">
                <v-layout row>
                    <v-flex xs12 offset-sm3>
                      <v-text-field name="title" label="Title" id="title" :rules="rules" counter maxlength="20" hint="max length is 20" v-model="title">

                      </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 offset-sm3>
                      <v-text-field name="location" label="Location" id="location" :rules="rules" counter maxlength="10" hint="max length is 10" v-model="location">

                      </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 offset-sm3>
                      <v-text-field name="imgurl" label="Image Url" id="img-url" v-model="imgurl">

                      </v-text-field>
                    </v-flex>
                </v-layout>
                 <v-layout row>
                    <v-flex xs12 offset-sm3>
                      <v-img :src="imgurl" height="130px" contain></v-img>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 offset-sm3>
                      <v-text-field name="description" label="Description" id="description" hint="add as much as you want :)" multi-line v-model="description">

                      </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                     <v-btn class="green" :disabled="!formisvalid" type="submit">
                         Create Note
                     </v-btn>
                    </v-flex>
                </v-layout>
            </v-form>
         </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imgurl: '',
      description: ''
    }
  },
  computed: {
    formisvalid () {
      return this.title !== '' && this.location !== '' && this.imgurl !== '' && this.description !== ''
    }
  },
  methods: {
    oncreatenote () {
      if (!this.formisvalid) {
        return
      }
      const notedata = {
        title: this.title,
        location: this.location,
        imgurl: this.imgurl,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createnote', notedata)
      this.$router.push('/notes')
    }
  }
}
</script>
