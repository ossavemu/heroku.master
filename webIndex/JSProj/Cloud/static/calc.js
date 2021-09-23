let c = 0;
let opcode = 0;
let num1code = 0;
let num2code = 0;
let op = ["+", "-", "/", 0, "*"];
function input() {
  let rw = prompt(
    "Enter your arimetric problem with this syntax A + B, and we give you the answer"
  );
  if (rw.length == 1) {
    alert("Invalid input");
  }
  let ix = 0;
  for (let i = 0; i < op.length + 1; i++) {
    if (rw.includes(op[i])) {
      ix = rw.indexOf(op[i]);
    } else i++;
  }

  opcode = rw.charAt(ix);
  num1code = Number(rw.substring(0, ix));
  num2code = Number(rw.substring(ix + 1, rw.length));
  function AlfCalc(numberA, operator, numberB) {
    if (isNaN(num1code) || isNaN(num2code)) {
      alert(
        "The input format is not valid, do not use spaces or non-numeric characters."
      );
      alert("Sorry, we could not understand you, try again");
    } else if (isNaN(opcode) == false) {
      alert(
        "Please insert an addition or a subtraction or a multiplication or a division"
      );
    } else
      for (let j = 0; j < op.length + 1; j++) {
        if (operator == op[j]) {
          switch (j) {
            case 0:
              c = numberA + numberB;
              break;
            case 1:
              c = numberA - numberB;
              break;
            case 2:
              c = numberA / numberB;
              break;
            case 4:
              c = numberA * numberB;
              break;
          }
          alert("The answer is " + c);
        } else {
          j++;
        }
      }
  }
  AlfCalc(num1code, opcode, num2code);
}
