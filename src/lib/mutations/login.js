'use strict';

const User = require('../../data/User')

module.exports = async (root, { input }) => {

//   Validate info user with database
    const user = await User.getUser(input.username)

    if (input.password === user.data.USER_by_pk.PASSWORD) {
      return  true
    }
    return false
}