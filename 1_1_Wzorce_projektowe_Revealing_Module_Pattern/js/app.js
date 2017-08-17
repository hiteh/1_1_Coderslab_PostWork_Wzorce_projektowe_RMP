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
              addCharacter(event.target.innerHTML);
              console.log("Naciśnięto przycisk!");
            }):
            button.addEventListener("click", function(event){
              event.preventDefault();
              console.log("Sprawdzam wynik działania!");
            })
          });
        }

        function checkEquation() {

        }

        function checkIfCharIsOperation() {

        }

        function addCharacter(data) {
          equationView.innerHTML+=data;
        }

        function calculate() {

        }

        function updateHistory() {

        }

        function init() {
          console.log(equationView);
          attachEvents();
        }

        return {
            init: init
        }


    })();

    Calculator.init();

});
