const _ = require("lodash");

/**
 *
 * @param {*} obj {createdAt: "", updatedAt: ""} <-- object
 * @return {*} {created_at: "", updated_at: ""}
 */

function convertKeysToSnakeCase(obj) {
  return _.toPairs(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [_.snakeCase(key)]: value,
    }),
    {}
  );
}

module.exports = {
  convertKeysToSnakeCase,
};
