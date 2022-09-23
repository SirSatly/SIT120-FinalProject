<template>
  <div class="edit">
    <div id="editInputs">
      <div style="float: left">
        <input v-model="dictionary.name" placeholder="enter name">
        <input v-model="dictionary.firstLanguage" placeholder="enter first language">
        <input v-model="dictionary.secondLanguage" placeholder="enter second language">
        <br>
        <textarea v-model="dictionary.discription" placeholder="enter discription"></textarea>
      </div>
      <div style="float: right">
        <button @click="saveEdits">Save Dictionary</button>
        <button @click="addWord">Add Word</button>
        <button @click="deleteDictionary">Delete Dictionary</button>
      </div>
    </div>
    <DictionaryDisplay :words="dictionary.words" @activate="activateOverlay" />
    <EditOverlay v-if="overlayActive" v-model="dictionary.words[overlayDataPos]" @deactivate="deactivateOverlay" @delete="deleteWord" />
  </div>
</template>

<script>
import DictionaryDisplay from '@/components/DictionaryDisplay.vue';
import EditOverlay from '@/components/EditOverlay.vue';
import router from '@/router';
  export default {
    name: 'EditView',
    components: {
      DictionaryDisplay,
      EditOverlay
},
    data() {
      return {
        overlayActive: false,
        overlayDataPos: -1,

        dictionary: this.$parent.getDictionary,
      }
    },
    methods: {
      activateOverlay(word) {
        this.overlayActive = true;
        this.overlayDataPos = this.dictionary.words.indexOf(word);
      },
      deactivateOverlay()
      {
        this.overlayActive = false;
        this.overlayDataPos = -1;
      },
      addWord()
      {
        let newWord = new Word();
        this.dictionary.words.push(newWord);
        this.activateOverlay(newWord)
      },
      saveEdits()
      {
        this.$parent.json = JSON.stringify(this.dictionary)
        localStorage.setItem(this.$route.params.id, this.$parent.json);
        let dictInfo = new DictionaryInfo(this.$route.params.id,"User", this.dictionary)
        if (!this.$root.fullList.some((x) => {return x.id == this.$route.params.id }))
        {
          this.$root.fullList.push(dictInfo)
          this.$root.savedList.push(dictInfo)
        }
        else 
        {
          let i = this.$root.fullList.findIndex((item) => {return item.id == this.$route.params.id})
          this.$root.fullList[i] = dictInfo;
          this.$root.savedList[i] = dictInfo;
        }
      },
      deleteDictionary()
      {
        if (confirm("Are you sure you want to delete this Dictionary. It will be gone forever"))
        {
          localStorage.removeItem(this.$route.params.id)
          this.$root.fullList.splice(this.$root.fullList.findIndex((item) => {return item.id == this.$route.params.id}), 1)
          this.$root.savedList.splice(this.$root.fullList.findIndex((item) => {return item.id == this.$route.params.id}), 1)
          router.push('/saved')
        }
      },
      deleteWord(word) {
        this.dictionary.words.splice(this.dictionary.words.indexOf(word), 1)
      }
    }
  }

  function Word()
  {
    this.word = "New Word";
    this.notes = "";
    this.translations = [];
  }

  function DictionaryInfo(id, creater, dictionary)
  {
    this.id = id;
    this.name = dictionary.name;
    this.creater = creater;
    this.firstLanguage = dictionary.firstLanguage;
    this.secondLanguage = dictionary.secondLanguage;
  }
</script>

<style>
  #editInputs
  {
    display: table; 
    width: 95%;
    padding: 25px;
  }

  .edit input
  {
    font-size: 20px;
    margin-left: 5px;
  }

  .edit textarea {
    font-size: 15px;
    height: 60px;
    margin-top: 5px;
    width: 100%;
  }

  .edit button
  {
    margin-left: 5px;
  }
</style>