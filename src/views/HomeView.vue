<template>
  <div class="home">
    <h1>Welcome to Babbilon the Online Language Notebook</h1>
    <br>
    <h2>Suggested Dictionaries</h2>
    <SavedDisplay :displayList="SuggestedList"></SavedDisplay>
  </div>
</template>

<script>
import SavedDisplay from '@/components/SavedDisplay.vue';
  export default {
    components: { SavedDisplay },
    computed: {
      SuggestedList() {
        return this.$root.fullList.slice(0, 3)
      }
    }
}
</script>
