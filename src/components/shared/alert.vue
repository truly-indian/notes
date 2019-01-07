<template>
    <v-alert class="red" dismissible @input="onclose" :value="true">
    {{text}}
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
