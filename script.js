let firstvalue = "";
let secondvalue = "";
let operator = "";
let result = "";

let display = document.getElementById("display");

function dataclicked(a) {
  if (operator.length == 0) {
    firstvalue += a;
  } else {
    secondvalue += a;
  }

  display.value = firstvalue + operator + secondvalue;
}

function opt(a) {
  operator = a;
  display.value = firstvalue + operator + secondvalue;
}

function ResultData() {
  if (operator == "+") {
    result = Number(firstvalue) + Number(secondvalue);
  } 
  else if (operator == "-") {
    result = Number(firstvalue) - Number(secondvalue);
  } 
  else if (operator == "*") {
    result = Number(firstvalue) * Number(secondvalue);
  } 
  else if (operator == "/") {
    if (secondvalue === "0") {
      result = "Error: Division by zero";
    } 
    else {
      result = Number(firstvalue) / Number(secondvalue);
    }
   
  } 
  else {
    result = "HAHAHA! Try Again!";
  }

  display.value = result;

  firstvalue = result.toString();
  secondvalue = "";
  operator = "";
}

  function ClearDisplay(){
    firstvalue = '';
    operator = '';
    secondvalue = '';
    result = '';
    display.value = '';
  }

 function Back() {
  if (operator.length == 0) {
    firstvalue = firstvalue.slice(0, -1);
    display.value = firstvalue;
    
  } 
  else if (secondvalue.length == 0) {
    operator = '';
    display.value = firstvalue;
  }
  else {
    secondvalue = secondvalue.slice(0, -1);
    display.value = secondvalue;
   }
}
