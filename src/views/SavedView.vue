<template>
  <div class="saved">
    <router-link :to="{path: '/' + newDictionaryId + '/edit'}">Create new Dictionary</router-link>
    <SavedDisplay :displayList="testList"></SavedDisplay>
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
      testList() {
          return [this.testinfo, this.testinfo, this.testinfo, this.testinfo, this.testinfo]
      },
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