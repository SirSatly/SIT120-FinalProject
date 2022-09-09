<template>
  <div class="edit">
    <input v-model="dictionary.name" placeholder="enter name">
    <input v-model="dictionary.firstLanguage" placeholder="enter first language">
    <input v-model="dictionary.secondLanguage" placeholder="enter second language">
    <textarea v-model="dictionary.discription" placeholder="enter discription"></textarea>
    <button @click="saveEdits">Save Dictionary</button>
    <DictionaryDisplay :words="dictionary.words" @activate="activateOverlay" />
    <EditOverlay v-if="overlayActive" v-model="dictionary.words[overlayDataPos]" @deactivate="deactivateOverlay" />
  </div>
</template>

<script>
import DictionaryDisplay from '@/components/DictionaryDisplay.vue';
import EditOverlay from '@/components/EditOverlay.vue';
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
      saveEdits()
      {
        this.$parent.json = JSON.stringify(this.dictionary)
      }
    }
  }
</script>