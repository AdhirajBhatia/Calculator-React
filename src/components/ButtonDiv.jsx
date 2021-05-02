import React from "react";
function Calculate() {
  var num1 = parseFloat(document.getElementById("num1").value, 10);
  var num2 = parseFloat(document.getElementById("num2").value, 10);
  var operation = document.getElementById("select").value;
  if (operation === "+") {
    var sum = num1 + num2;
    document.getElementById("answer").style.visibility = "visible";
    document.getElementById("answer").innerHTML = sum;
  }
  if (operation === "-") {
    var diff = num1 - num2;
    document.getElementById("answer").style.visibility = "visible";
    document.getElementById("answer").innerHTML = diff;
  }
  if (operation === "*") {
    var pro = num1 * num2;
    document.getElementById("answer").style.visibility = "visible";
    document.getElementById("answer").innerHTML = pro;
  }
  if (operation === "/") {
    var quo = num1 / num2;
    document.getElementById("answer").style.visibility = "visible";
    document.getElementById("answer").innerHTML = quo;
  }
  if (operation === "√") {
    var rt = Math.pow(num1, 1 / num2).toFixed(2);
    document.getElementById("answer").style.visibility = "visible";
    document.getElementById("answer").innerHTML = rt;
  }
  if (operation === "^") {
    var power = Math.pow(num1, num2);
    document.getElementById("answer").style.visibility = "visible";
    document.getElementById("answer").innerHTML = power;
  }
}
function Clear() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("select").value = "+";
  document.getElementById("answer").style.visibility = "hidden";
}
function ButtonDiv() {
  return (
    <div>
      <button id="Calculate" onClick={Calculate}>
        Calculate
      </button>
      <button id="clear" onClick={Clear}>
        Clear
      </button>
    </div>
  );
}
export default ButtonDiv;
