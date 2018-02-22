const client = require('./client.js')
const storage = require('./storage.js');
const chalk = require('chalk');

function definition(def) {
  return new Promise((resolve, reject) => {
	storage.connectToDatabase()
	.then(Word => {
    	return storage.findInDatabase(Word, def.toString())
  	})
  	.then(result => {
    	if (result[1] != null) {
      		console.log(chalk.blue('word filtered of database'))
      		console.log((result[1].dataValues))
    	}
    	else{
      		return storage.createdWord(result[0], define(def))
      		.then(result => {
        		console.log(chalk.green('new word in database'))
        		console.log(result.dataValues)
      		})
    	}
  	})
  	.then(()=>{
  		resolve('procces finish')
  	})
  })
}

function define(word) {
	return client.search(word)
}

module.exports = {
	define,
	definition
}