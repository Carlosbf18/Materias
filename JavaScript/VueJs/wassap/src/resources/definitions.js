import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  search (word) {
    const url = `http://api.wordnik.com/v4/word.json/${word}/definitions`

    const options = {
      params: {
        limit: 200,
        includeRelated: true,
        useCanonical: false,
        includeTags: false,
        api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
      }
    }

    return Vue.http.get(url, options)
  }
}
