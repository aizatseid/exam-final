const isPalindrom = (str) => {
  let arr = str.split('').reverse().join('');
  console.log(arr);
  if (arr === str) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isPalindrom('racecar');
isPalindrom('Race Car');
isPalindrom('hello');