const argv = require('yargs') 
const chalk = require('chalk');
const client = require('./client.js')
const define = require('./define.js')

/*
if (!argv.define) {
  throw new Error('Please provide a word: --define=word')
} 
*/
	

define.define(a = 'car')
.then(result=> {
	console.log(chalk.inverse.redBright(a))
	console.log(chalk.cyan('Word : ') + result[0]['word'])
	console.log(chalk.cyan('Text : ') + result[0]['text'])
	console.log(chalk.cyan('PartOfSpeech : ') + result[0]['partOfSpeech'])
	console.log(chalk.cyan('ExampleUses : ') + result[0]['exampleUses'])
})


/*
	buscar la libreria:
	sequelize 


*/
/*
	campos que se debe mostrar
	
	word
	text
	partOfSpeech
	exampleUses
*/