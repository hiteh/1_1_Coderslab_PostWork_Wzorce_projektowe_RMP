document.addEventListener("DOMContentLoaded", function(){

    var Calculator = (function(){

        var buttons = document.querySelectorAll("button");
        var historyView = document.querySelector(".calc-history");
        var equationView = document.querySelector(".calc-view");
        var operations = ["+", "-", "*", "/", ","];

        function attachEvents() {
          buttons.forEach(function(button){
            button.className!=="button-equal"?
            button.addEventListener("click",function(event){
              event.preventDefault();
              var canIAddChar = checkEquation(event.target.innerHTML);
              addCharacter(event.target.innerHTML, canIAddChar);
            }):
            button.addEventListener("click", function(event){
              event.preventDefault();
              console.log("Sprawdzam wynik działania!");
            })
          });
        }

        function checkEquation(data) {
          return (
            operations[operations.indexOf(equationView.innerText[equationView.innerText.length-1])]&&
            checkIfCharIsOperation(data)||
            equationView.innerText.length===0&&checkIfCharIsOperation(data)?
            false:
            true
          );
        }

        function checkIfCharIsOperation(data) {
          return operations.indexOf(data)!==-1?true:false;
        }

        function addCharacter(data, canIAddChar) {
          canIAddChar? equationView.innerText+=data: false;
          console.log(equationView.innerText);
        }

        function calculate() {

        }

        function updateHistory() {

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
