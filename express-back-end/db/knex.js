//Set up so knex knows to run

const environment = process.env.NODE_ENV || 'development'; //environments from knexfile.js
const config = require('../knexfile.js')[environment]; //knex object
console.log(config)
module.exports = require('knex')(config);