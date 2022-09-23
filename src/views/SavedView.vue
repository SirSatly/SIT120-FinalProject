<template>
  <div class="saved">
    <router-link :to="{path: '/' + newDictionaryId + '/edit'}"><button>Create new Dictionary</button></router-link>
    <h1>Your Dictionaries</h1> 
    <SavedDisplay :displayList="$root.savedList"></SavedDisplay>
  </div>
</template>

<script>
import SavedDisplay from '@/components/SavedDisplay.vue';
  export default {
    components: { SavedDisplay },
    data() {
      return {
          testinfo: {id: "MyDictionary", name: "Name", creater: "Aaron", firstLanguage: "English", secondLanguage: "Russian"}
      }
    },
    computed: {
      newDictionaryId()
      {
        let id;
        do {
          let rand = Math.floor(Math.random() * 100000000)
          id = rand.toString().padStart(8, '0')
        } while (localStorage.getItem(id))

        return id;
      }
    }
}
</script>

<style>
  .saved button {
    margin: 20px;
    float: right;
  }
</style>