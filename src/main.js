import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data() {
    return {
      fullList: [],
      savedList: []
    }
  },
  watch: {
    fullList: {
      handler(newValue)
      {
        localStorage.setItem('fullList', JSON.stringify(newValue));
      },
      deep: true
    },
    savedList: {
      handler(newValue)
      {
        localStorage.setItem('savedList', JSON.stringify(newValue));
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem('fullList'))
    {
      this.fullList = JSON.parse(localStorage.getItem('fullList'));
      this.savedList = JSON.parse(localStorage.getItem('savedList'));
    }
    else 
    {
      var prebuilt1 = require('./jsons/prebuilt1.json');
      this.fullList.push({id: "prebuilt1", name: prebuilt1.name, creater: "Babbilon", firstLanguage: prebuilt1.firstLanguage, secondLanguage: prebuilt1.secondLanguage})
      localStorage.setItem("prebuilt1", JSON.stringify(prebuilt1))
    }
  }
})
