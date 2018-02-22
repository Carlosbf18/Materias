const client = require('./client.js')
const conect = require('./conectSql')

function define (word) {
	return new Promise((resolve, reject) => {
		conect.connectBD()
		.then(connect=> {
			 connect.findOne({where: {word: word}})
		})
		.then(()=>{
			
			console.log("Buscando en API")
			return resolve(client.search(word))
		})		
	})
		

}


/*


console.log("Buscando en la Base de Datos.....")
		return new Promise((resolve, reject)=>{
			reject("no encontrado.")
		})
		.catch(function(e) {
  			console.log(e);})
		.then(()=>{
			
			console.log("Buscando en API")
			return resolve(client.search(word))
		})
//////////////////////////


function define (word) {
	return client.search(word)
}
*/
module.exports = {
  define
}