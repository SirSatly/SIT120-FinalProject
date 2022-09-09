<template>
  <div class="dictionary">
    <nav><DictionaryNav/></nav>
    <router-view/>
  </div>
</template>

<script>
  import DictionaryNav from '@/components/DictionaryNav.vue'
    export default {
      name: 'DictionaryView',
      components: {
        DictionaryNav
      },
      data() {
        return {
          json: '{}'
        }
      },
      computed: {
        getDictionary()
        {
          var dictionary;

          if (this.json != '{}')
          {
            dictionary = JSON.parse(this.json);
          }
          else 
          {
            dictionary = {
              name: this.$route.params.id,
              firstLanguage: 'English',
              secondLanguage: 'Russian',
              discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam justo, sagittis vitae elementum a, volutpat at purus. Etiam ornare libero eu orci tempus, ut ullamcorper leo mattis. Phasellus tincidunt neque nisl, semper luctus nibh pellentesque ac.',
              words: []
            }

            dictionary.words.push({word: "hello", notes: "Example notes", translations: []})
            dictionary.words.push({word: "goodbye", notes: "", translations: []})
            dictionary.words.push({word: "thanks", notes: "", translations: []})
            
            dictionary.words[0].translations.push({title: "test", translation: "asdfg", transcription: "qwert"});
            dictionary.words[0].translations.push({title: "test2", translation: "", transcription: "uytfv"});
          }
          return dictionary;

        }
      }
  }
</script>
