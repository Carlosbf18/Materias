const argv = require('yargs').argv
const defineIt = require('./define-it.js') 
const chalk = require('chalk');
const storage = require('./storage.js');

if (!argv.define) {
	throw new Error('please provide a word: --define=word')
}
	defineIt.definition(argv.define)
  .then(result => console.log(chalk.yellow(result)))  
  .catch(err => console.log(err))
