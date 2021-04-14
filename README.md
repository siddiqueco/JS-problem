## Problem solving with JavaScript

Create JavaScript function that meets the following requirements.
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

