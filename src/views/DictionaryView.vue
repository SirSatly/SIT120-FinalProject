<template>
  <div class="dictionary">
    <nav>
      <div id="dictionaryNav">
        <router-link to="./">Dictionary</router-link>
        <router-link to="./cards">Flashcards</router-link>
        <router-link to="./edit" v-if="canEdit">Edit</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
    export default {
      name: 'DictionaryView',
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
              creater: 'User',
              firstLanguage: '',
              secondLanguage: '',
              discription: '',
              words: []
            }
          }
          return dictionary;
        },
        canEdit()
        {
          return this.getDictionary.creater == 'User'
        }
      }
  }
</script>

<style>
  #dictionaryNav
  {
      background: #090b5e;
      margin-left: 15px;
      margin-right: 15px;
      border-radius: 0px 0px 20px 20px;
      padding-top: 1vh;
      height: 5vh;
  }
  
  #dictionaryNav a
  {
      font-size: 3vh;
      margin-left: 20px;
      color: #ffffff;
  }
  
  #dictionaryNav a:hover
  {
      color: rgb(104, 76, 130);
  }
  
  #dictionaryNav a.router-link-exact-active {
    color: #42b983;
  }
  </style>