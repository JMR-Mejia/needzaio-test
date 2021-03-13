'use strict';

require('dotenv').config()

module.exports =  {
    port: process.env.PORT || 3000,
    endpoint: process.env.ENDPOINT,
    hasuraSecret: process.env.HASURA_SECRET,
}