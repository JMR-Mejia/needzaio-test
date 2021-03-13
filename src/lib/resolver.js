'use strict'

const mutation = require('./mutations')
const queries = require('./queries/index')

module.exports = {
    Query: queries,
    Mutation: mutation,
}