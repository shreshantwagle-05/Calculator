let firstvalue = "";
let secondvalue = "";
let operator = "";
let result = "";

let display = document.getElementById("display");

function Dataclicked(a) {
  console.log(operator.length);
  if (operator.length > 0) {
    firstvalue += a;
    display.value = firstvalue;
  } else {
    console.log("first");
    secondvalue += a;
    display.value = secondvalue;
  }
}

function opt(a) {
  operator = a;
  display.value = operator;
}

function ResultData() {
  if (operator == "+") {
    result = Number(firstvalue) + Number(secondvalue);
  } else if (operator == "-") {
    result = Number(firstvalue) - Number(secondvalue);
  } else if (operator == "*") {
    result = Number(firstvalue) * Number(secondvalue);
  } else if (operator == "/") {
    result = Number(firstvalue) / Number(secondvalue);
  } else {
    result = "Invalid Operator";
  }
  console.log(result);
  display.value = result;
  }

  function ClearDisplay(){
    firstvalue = '';
    operator = '';
    secondvalue = '';
    result = '';
    display.value = '';
  }

  function ClearData(){
    if(operator.length>0){
      firstvalue = firstvalue.slice(0, -1);
      display.value = firstvalue;
    }else{
      secondvalue = secondvalue.slice(0, -1);
      display.value = secondvalue;
    }
  }
  