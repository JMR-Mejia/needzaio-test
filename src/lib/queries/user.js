'use strict';

const User = require('../../data/User')

module.exports = async () => {
    const data = await User.getUser('needzaio');
    const user = data.data.USER_by_pk;

    return {
        username: user.USERNAME,
        password: user.PASSWORD,
        names: user.NAMES
    }
}