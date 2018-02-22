const chalk = require('chalk');

function connectToDatabase() {
  return new Promise((resolve, reject) => {
      const Sequelize = require('sequelize');
      const sequelize = new Sequelize('Dictionary', 'user', 'pass', {
        host: 'localhost',
        dialect: 'mssql',

        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        },
      });

      const Word = sequelize.define('word', {
        word: {
          type: Sequelize.TEXT
        },
        text: {
          type: Sequelize.TEXT
        },
      })
      Word.sync({force: false})
      .then(() => {
        resolve(Word)
      })
  })
}

function findInDatabase(Word, firstWord) {
  return new Promise((resolve, reject) => {
     Word.findOne({where: {word: firstWord}})
     .then(result => {
        const array = [Word,result]
        resolve(array)
     })
  })
}

function createdWord(Word, firstWord) {
  return new Promise((resolve, reject) => {
        firstWord
        .then(result => {
          return Word.create({
            word: result[0]['word'].toString(),
            text: result[0]['text'].toString()
          })
        })
        .then(result => {
          resolve(result)
        })
      })
}

module.exports = {
  connectToDatabase,
  findInDatabase,
  createdWord,
}