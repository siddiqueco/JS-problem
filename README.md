## Problem solving with JavaScript

Create JavaScript function that meets some requirements.

### Table off content
  1. [ Fail / Pass Averages](https://github.com/siddique000/JS-problem#1-fail--pass-averages)
  2. [ Swap Characters](https://github.com/siddique000/JS-problem#2-swap-characters)
  3. [ Move Capital Letters](https://github.com/siddique000/JS-problem#3-move-capital-letters)
  4. [ Check Date ](https://github.com/siddique000/JS-problem#4-check-date)
  5. [ How many Days Between](https://github.com/siddique000/JS-problem#5-how-many-days-between)

#

###### 1. Fail / Pass Averages
  
  - Receives an array of numbers as a parameter, with each integer being a mark out of 100.
  - The function should return an array consisting of all the averages less than 50, followed by the average
of all the mark more than 50.
  - both averages should be rounded to the nearest whole number. 
  - If there are no failing marks (< 50), then the average fail mark should be set to -1.
  - If there are no passing marks (< 50), then the average pass mark should be set to -1.

>
      Test Case:
      functionName([63, 65, 33])) --> [33,64] 
      functionName([63, 62, 100, 100])) --> [-1, 81]
      functionName([33, 42, 20, 10])) --> [26, -1]
  
<details><summary><b>Answer</b></summary>

```javaScript
function failPassAverage(arr) {
  const failArr = arr.filter((i) => i < 50);
  const passArr = arr.filter((i) => i >= 50 && i != 0);

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
```
</details>

###### 2. Swap Characters
  
  - function take three arguments, a string, character 1 and character 2
  - The function replaces all instances of c1 with c2, and vice versa
  - The function returns the updated string
>
      Test Case:
      functionName("aabbccc", "a", "b) --> "bbaaccc" 
      functionName("random w#rds writt&n h&r&", "#", "&") --> "random w&rds writt#n h#r#"
      functionName("128 895 556 788 999", "8", "9") -->  "129 985 556 799 888"
  
<details><summary><b>Answer</b></summary>

```javaScript
function swapCharactersInString(str, c1, c2) {
  let stringArr = str.split("");

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === c1) {
      stringArr[i] = c2;
    } else if (stringArr[i] === c2) {
      stringArr[i] = c1;
    }
  }
  return stringArr.join("");
}
```
</details>

###### 3. Move Capital Letters
  
  - That takes in a string parameter, of mixed casing (mix of upper and lowercase letters)
  - The function moves all capital letters to the front of a word.
  - The uppercase letters moved to the front, maintain their original relative order
  - The lowercase letters moved to the back front, maintain their original relative order
>
      Test Case:
      functionName("hApPy") --> "APhpy"
      functionName("moveMENT") --> "MENTmove"
      functionName("shOrtCAKE") -->  "OCAKEshrt"
  
<details><summary><b>Answer</b></summary>

```javaScript
function moveCapitalLetter(str) {
  let cap = "";
  let small = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      cap += str[i];
    } else {
      small += str[i];
    }
  }
  return cap + small;
}
```
</details>

<details><summary><b>Answer 2</b></summary>

```javaScript
function moveCapitalLetter(str) {
  const res = [...str].sort((a, b) => (isCaps(a) ? (isCaps(b) ? 0 : -1) : 0));
  return res.join("");

  function isCaps(c) {
    return c.charCodeAt() >= 65 && c.charCodeAt() <= 90;
  }
}

```
</details>

###### 4. Check Date
  
  - Receives a string as a parameter.
  - The function returns a Boolean indicating if the parameter string passed, is a valid date. True indicates a valid date was provided o False indicates that a valid date was not provided.
  - A valid date string, will have only the full month name (ex “January” not “Jan”) and a day number.A year will not be provided and thus your logic need not be concerned in that regard
  - The string parameter can contain any number of spaces, but the month name must always start at the
    first non-space character from the beginning of the string
  - The day number part of the date string to be tested could contain alphabetic characters and thus making
    it invalid
  - You may assume February only has 28 days in it.
>
      Test Case:
      functionName("aabbccc", "a", "b) --> "bbaaccc" 
      functionName("random w#rds writt&n h&r&", "#", "&") --> "random w&rds writt#n h#r#"
      functionName("128 895 556 788 999", "8", "9") -->  "129 985 556 799 888"
      functionName("January 21"))  -->  true
      functionName("Auust 3")) -->  false
      functionName(" June 15B ")) -->  false
      functionName("February 0")) --> false
      functionName(" December 3K1"))  -->  false
      functionName("February 29"))  -->  false
      functionName(" February 28 "))  -->  true
  
<details><summary><b>Answer</b></summary>

```javaScript
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
  let [month, day] = filterUndefined(splitToArr(dateStr, " "));

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

  function filterUndefined(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== undefined) {
        newArr = [...newArr, arr[i]];
      }
    }
    return newArr;
  }

  function splitToArr(string, separator) {
    let cache = [];
    let cachInt = 0;
    let lastWord = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] == separator) {
        cachInt++;
        lastWord = "";
      } else {
        if (lastWord !== " ") {
          lastWord += string[i];
          cache[cachInt] = lastWord;
        }
      }
    }
    return cache;
  }
}
```
</details>
  
  ###### 5. How many Days Between
  
  - Create a function that takes two valid dates as arguments
  - The function returns the number of days between str_date1 and str_date2


      Test Case:
      
      functionName("June 14, 2021", "June 20, 2021")  --> 6
      functionName("December 29, 2021", "January 1, 2022")  --> 3
      functionName("July 20, 2021", "July 30, 2021")  --> 10
  
<details><summary><b>Answer</b></summary>

function getDaysBetweenTwoDate(str1, str2) {
  const date1 = new Date(str1);
  const date2 = new Date(str2);
  const startDay = Math.floor(date1.getTime() / (60 * 60 * 24 * 1000)); 
  const endDay = Math.floor(date2.getTime() / (60 * 60 * 24 * 1000)); 
  return endDay - startDay;
}
</details>
  
 ###### 6. Leading Zeros
  
  - That takes in a string number as an argument
  - The function returns the number removing any trailing and/or leading zeros.
  - Trailing zeros are the zeros after a decimal point which don’t affect the value of the number
  - Leading zeros are the zeros before a number which don’t affect the value of the number
>
      Test Case:
      
      functionName("230.000")  --> 230
      functionName("00402")  --> 402
      functionName("03.1400")  --> 3.14
      functionName("30")  --> 30
<details><summary><b>Answer</b></summary>

```javaScript
function removeLeadingZeros(num) {
  return +num;
}
```
</details>
