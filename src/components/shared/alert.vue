<template>
    <v-alert class="red" dismissible @input="onclose" :value="true">
    <p>{{text}}</p>
    </v-alert>
</template>
<script>
export default {
  props: ['text'],
  methods: {
    onclose () {
      this.$emit('dismissed')
    }
  }
}
</script>
