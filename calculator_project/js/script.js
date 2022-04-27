function calculate(a, b, op) {
  if (op == "+") {
    return a + b;
  } else if (op == "-") {
    return a - b;
  } else if (op == "×") {
    return a * b;
  } else if (op == "÷") {
    return a / b;
  }
}
var t = false;

function history_shower (){
    if (t == false){
    document.getElementById("history").style.visibility = "visible";
    t = true;
}
else {
    document.getElementById("history").style.visibility = "hidden";
    t = false;
}
}

function history_maker(str) {
  var his = document.getElementById("history");
  his.innerHTML = his.innerHTML + "<p>" + str + "</p>";
}

function result_printer(str) {
  var res = document.getElementById("display");
  if (str.length > 12) {
      str = str.slice(0,11);
  }
  if (str.length < 5) {
    res.style.fontSize = "4vw";
  } else if (str.length >= 5 && str.length <= 6) {
    res.style.fontSize = "3vw";
  } else if (str.length >= 7 && str.length <= 9) {
    res.style.fontSize = "2vw";
  } else if (str.length >= 10 && str.length <= 12) {
    res.style.fontSize = "1.5vw";
  }
  // else if
  res.innerHTML = str;
}

var turn = 1;
var num1 = "",
  num2 = "";
var operators = ["+", "-", "×", "÷"];
var opertor = null;

function click_handler(value) {
  console.log("called..." + value);
  var flag = false;
  for (let index = 0; index < operators.length; index++) {
    if (operators[index] == value) {
      opertor = value;
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log("in operator");
    opertor = value;
    num2 = '';
    result_printer(opertor + ": ");
    turn = 2;
  } else if (value == "=") {
    var result = calculate(parseFloat(num1), parseFloat(num2), opertor);
    history_maker(num1 + opertor + num2 + "=" + result);
    num1 = String(result);
    num2 = "";
    result_printer(String(result));
    turn = 2;
  } else if (value == "clear") {
    result_printer("0");
    num1 = "";
    num2 = "";

    opertor = null;
    turn = 1;
  } else if (turn == 1) {
    if (num1.length < 12) {
      num1 += value;
      console.log("in num1");
      result_printer(num1);
    }
  } else if (turn == 2) {
    if (num2.length < 12) {
      num2 += value;
      console.log("in num2");
      result_printer(num2);
    }
  }
}

