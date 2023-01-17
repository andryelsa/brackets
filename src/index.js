module.exports = function check(str, bracketsConfig) {
  const obj = {};
  let stack = [];
  bracketsConfig.forEach((char) => (obj[char[1]] = char[0]));

  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if (stack.includes(el) && Object.values(obj).includes(el) && Object.keys(obj).includes(el)) {
      stack.pop();
    } else if (Object.values(obj).includes(el)) {
      stack.push(el);
    } else if (obj[el] !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};
