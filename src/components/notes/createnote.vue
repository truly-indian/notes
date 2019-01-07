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
                      <v-textarea name="title" label="Title" id="title"  v-model="title">

                      </v-textarea>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 offset-sm3>
                      <v-textarea name="location" label="Location" id="location" v-model="location">

                      </v-textarea>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 offset-sm3>
                      <v-textarea name="imgurl" label="Image Url" id="img-url" v-model="imgurl">

                      </v-textarea>
                    </v-flex>
                </v-layout>
                 <v-layout row>
                    <v-flex xs12 offset-sm3>
                      <v-img :src="imgurl" height="130px" contain></v-img>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 offset-sm3>
                      <v-textarea name="description" label="Description" id="description" multi-line v-model="description">

                      </v-textarea>
                    </v-flex>
                </v-layout>
                <v-layout row class="mb-4">
                  <v-flex xs12 sm6 offset-sm3>
                      <h2>Choose Date and Time</h2>
                   </v-flex>
                </v-layout>
                 <v-layout row class="mb-3">
                  <v-flex xs12 sm6 offset-sm3>
                      <v-date-picker color="red" v-model="date" ></v-date-picker>
                   </v-flex>
                </v-layout>
                <v-layout row mb-2>
                  <v-flex xs12 sm6 offset-sm3>
                      <v-time-picker color="green" v-model="time" format="24hr"></v-time-picker>
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
      description: '',
      date: '',
      time: new Date()
    }
  },
  computed: {
    formisvalid () {
      return this.title !== '' && this.location !== '' && this.imgurl !== '' && this.description !== ''
    }
  },
  submitdateandtime () {
    const date = new Date(this.date)
    if (typeof this.time === 'string') {
      const hours = this.time.match(/^(\d+)/)[1]
      const minutes = this.time.match(/:(\d+)/)[1]
      date.setHours(hours)
      date.setMinutes(minutes)
    } else {
      date.setHours(this.time.getHours())
      date.setMinutes(this.time.getMinutes())
    }
    return date
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
        date: this.submitdateandtime
      }
      this.$store.dispatch('createnote', notedata)
      this.$router.push('/notes')
    }
  }
}
</script>
