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

          if (localStorage.getItem(this.$route.params.id))
          {
            dictionary = JSON.parse(localStorage.getItem(this.$route.params.id));
          }
          else 
          {
            dictionary = {
              name: '',
              firstLanguage: '',
              secondLanguage: '',
              discription: '',
              words: []
            }
          }
          return dictionary;

        }
      }
  }
</script>