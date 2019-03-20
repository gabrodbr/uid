/**
 * Export `uid`
 */

module.exports = uid;

/**
 * Create a `uid`
 *
 * @param {String} len
 * @return {String} uid
 */

function generateRandomNumber() {
  // a random number
  const random = Math.random();

  // convert to base 36 (with letters) and remove decimal case
  const nice = random.toString(36).substr(2);

  return nice;
}

function anyLenght(len = 7) {
  let uid = '';

  while (uid.length < len) {
    uid += generateRandomNumber();
  }

  return uid.substr(0, len);
}

function uid(len) {
  return anyLenght(len);
}
