document.addEventListener("DOMContentLoaded", function(){

    var Calculator = (function(){

        var buttons = document.querySelectorAll("button");
        var historyView = document.querySelector(".calc-history");
        var equationView = document.querySelector(".calc-view");
        var operations = ["+", "-", "*", "/", "."];

        function attachEvents() {
          buttons.forEach(function(button){
            button.className!=="button-equal"?
            button.addEventListener("click",function(event){
              event.preventDefault();
              var char = event.target.innerHTML===","?".":event.target.innerHTML;
              var canIAddChar = checkEquation(char);
              addCharacter(char, canIAddChar);
            }):
            button.addEventListener("click", function(event){
              event.preventDefault();
              calculate();
            })
          });
        }

        function checkIfDoubleComma(data) {
          if(data=="."){
            var results = equationView.innerText.slice(equationView.innerText.lastIndexOf(data));
            if(results[0]!=="."){
              return true;
            } else {
              if(results.includes("/")) {
                return true;
              } else if (results.includes("*")) {
                return true;
              } else if(results.includes("-")) {
                return true;
              } else if(results.includes("+")) {
                return true;
              } else {
                return false;
              }
            }
          } else {
            return true;
          }
        }

        function checkEquation(data) {
          if(checkIfDoubleComma(data)){
            return (
              operations[operations.indexOf(equationView.innerText[equationView.innerText.length-1])]&&
              checkIfCharIsOperation(data)||
              equationView.innerText.length===0&&checkIfCharIsOperation(data)?
              false:
              true
            );
          }
        }

        function checkIfCharIsOperation(data) {
          return operations.indexOf(data)!==-1?true:false;
        }

        function addCharacter(data, canIAddChar) {
          canIAddChar? equationView.innerText+=data: false;
        }

        function calculate() {
          var eq = equationView.innerText;
          checkIfCharIsOperation(eq[eq.length-1])?eq = eq.substring(0,eq.length-1): false;
          var sum = eval(eq);
          equationView.innerText = sum;
          updateHistory(eq,sum);
        }

        function updateHistory(data, answer) {
          historyView.innerHTML += '<p>'+data+' = '+answer+'</p>';
        }

        function init() {
          attachEvents();
        }

        return {
            init: init
        }


    })();

    Calculator.init();

});
