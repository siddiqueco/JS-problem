// Function 1A

function getUniqueArray(arr) {
  const len = arr.length;
  let newArr = [];
  let duplicateNumber = arr.filter((item, pos) => arr.indexOf(item) !== pos);
  for (i = 0; i < len; i++) {
    if (!duplicateNumber.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// Function 2A
function failPassAverage(arr) {
  const failArr = arr.filter((i) => i < 50);
  const passArr = arr.filter((i) => i > 50 && i != 0 && i != 50);

  const failAvg =
    failArr.length !== 0
      ? Math.round(failArr.reduce((a, b) => a + b) / failArr.length)
      : -1;
  const passAvg =
    passArr.length !== 0
      ? Math.round(passArr.reduce((a, b) => a + b) / passArr.length)
      : -1;

  return [failAvg, passAvg];
}

//Function 3A: Check Date
function checkValidDate(dateStr) {
  const MONTH = {
    January: "January",
    February: "February",
    March: "March",
    April: "April",
    May: "May",
    June: "June",
    July: "July",
    August: "August",
    September: "September",
    October: "October",
    November: "November",
    December: "December",
  };
  let [month, day] = dateStr.split(" ").filter(Boolean);

  if (month === MONTH.January && day <= 31 && day != 0) return true;
  else if (month === MONTH.February && day <= 28 && day != 0) return true;
  else if (month === MONTH.March && day <= 31 && day != 0) return true;
  else if (month === MONTH.April && day <= 30 && day != 0) return true;
  else if (month === MONTH.May && day <= 31 && day != 0) return true;
  else if (month === MONTH.June && day <= 30 && day != 0) return true;
  else if (month === MONTH.July && day <= 31 && day != 0) return true;
  else if (month === MONTH.August && day <= 30 && day != 0) return true;
  else if (month === MONTH.September && day <= 31 && day != 0) return true;
  else if (month === MONTH.October && day <= 30 && day != 0) return true;
  else if (month === MONTH.November && day <= 31 && day != 0) return true;
  else if (month === MONTH.December && day <= 30 && day != 0) return true;
  else return false;
}

//Function 4A: How many Days Between

function getDaysBetweenTwoDate(str1, str2) {
  const date1 = new Date(str1);
  const date2 = new Date(str2);
  const startDay = Math.floor(date1.getTime() / (60 * 60 * 24 * 1000)); //days as integer from..
  const endDay = Math.floor(date2.getTime() / (60 * 60 * 24 * 1000)); //days as integer from..
  return endDay - startDay;
}

//5A: Swap Characters

function swapCharactersInString(str, c1, c2) {
  let arr = str.split("").map((char) => {
    if (char === c1) {
      char = c2;
    } else if (char === c2) {
      char = c1;
    }
    return char;
  });

  return arr.join("");
}

// Function 6A: Move Capital Letters

function moveCapitalLetterToFront(str) {
  const res = [...str].sort((a, b) => (isCaps(a) ? (isCaps(b) ? 0 : -1) : 0));
  return res.join("");

  function isCaps(c) {
    return c.charCodeAt() >= 65 && c.charCodeAt() <= 90;
  }
}

// 7A: Leading Zeros

function removeLeadingZeros(num) {
  return +num;
}

// Function 8A: Sort Me

function sortByOrder(arr, str) {
  let sortedArr = [...arr];
  if (str === "Asc") {
    sortedArr = arr.sort((a, b) => a - b);
  } else if (str === "Des") {
    sortedArr = arr.sort((a, b) => b - a);
  }
  return sortedArr;
}

//  9A: Repeating Characters

function repeatedCharacterInString(str) {
  const result = [];
  const strArr = [...str]
    .sort()
    .join("")
    .match(/(.)\1+/g);

  if (strArr != null) {
    strArr.forEach((elem) => {
      result.push(elem[0]);
    });
  }
  return result.length !== 0 ? result[0] : -1;
}

// 10A: Capitalize first Letter of Each Word

function capFirstLetterOfEachWord(str) {
  let arr = str.split(" ");
  return arr.map((word) => word[0].toUpperCase() + word.slice(1));
}
