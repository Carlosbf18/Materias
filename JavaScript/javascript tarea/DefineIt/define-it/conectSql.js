function connectBD() {
    return new Promise ((resolve, reject) => {
        const Sequelize = require('sequelize');
        const sequelize = new Sequelize('MyDictionary', 'sa', 'CABF2017jala', {
        host: 'localhost',
        port: 1433,
        dialect: 'mssql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    })
        /*
    sequelize.authenticate()
    .then(() => {
        resolve('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    */ 
    resolve(Sequelize);
    }) 
}  
    
module.exports = {
  connectBD
}

/*


*/