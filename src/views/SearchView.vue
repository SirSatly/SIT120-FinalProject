<template>
  <div class="search">
    <input id="dictionarySearch" placeholder="Search:" v-model="searchQuery"/>
    <select v-model="searchBy">
      <option value="name">Name</option>
      <option value="creater">Creater</option>
    </select>
    <input id="dictionarySearch" placeholder="First Language" v-model="firstLanguage"/>
    <input id="dictionarySearch" placeholder="Second Language" v-model="secondLanguage"/>
    <SavedDisplay :displayList="filteredList"></SavedDisplay>
  </div>
</template>

<script>
  import SavedDisplay from '@/components/SavedDisplay.vue';
    export default {
      components: { SavedDisplay },
      data() {
          return {
              testinfo: {id: "MyDictionary", name: "Name", creater: "Aaron", firstLanguage: "English", secondLanguage: "Russian"},
              searchQuery: "",
              firstLanguage: "",
              secondLanguage: "",
              searchBy: "name"
          }
      },
      computed: {
          filteredList() {
            var langFiltered = this.$root.fullList.filter((item) => { return item.firstLanguage.toLowerCase().includes(this.firstLanguage.toLowerCase()) && item.secondLanguage.toLowerCase().includes(this.secondLanguage.toLowerCase()); });

            if (this.searchBy == "name") {
              return langFiltered.filter((item) => { return item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) })
            }
            else {
              return langFiltered.filter((item) => { return item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) })
            }
          }
      }
  }
  </script>
