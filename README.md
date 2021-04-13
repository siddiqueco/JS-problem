## Problem solving with JavaScript


###### 1. Create a JavaScript function that meets the following requirements:
  
  - Receives an array of numbers as a parameter, with each integer being a mark out of 100.
  - The function should return an array consisting of all the averages less than 50, followed by the average
of all the mark more than 50.
  - both averages should be rounded to the nearest whole number. 
  - If there are no failing marks (< 50), then the average fail mark should be set to -1
  - If there are no passing marks (< 50), then the average pass mark should be set to -1
  
  
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
