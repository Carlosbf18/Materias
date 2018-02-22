const rp = require('request-promise')

function search(word){

  const options = {
      uri: 'http://api.wordnik.com/v4/word.json/'+word+'/definitions',
      qs: {
        limit: 4,
        includeRelated: true,
        useCanonical: false,
        includeTags: false,
        api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'  
      },
      json: true // Automatically parses the JSON string in the response
  	}
    //console.log("CONCTADO")
  	return rp(options)
}

module.exports = {
  search
}