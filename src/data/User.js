const fetch = require("node-fetch");
const { endpoint, hasuraSecret } = require("../config");

const getUserData = (username) => {
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": hasuraSecret,
    },
    body: JSON.stringify({
      query: `
        query SearchUser($username: String!) {
          USER_by_pk(USERNAME: $username) {
            NAMES
            PASSWORD
            USERNAME
          }
        }
        `,
      variables: { username },
    }),
  }).then((response) => response.json());
};

module.exports = getUserData;
