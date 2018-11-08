var module = angular.module("calcApp", []);
module.controller("calcCtrl", main);

function main()  {
    this.buttons = ['+','-', '*', '/' ];
    this.calculate = function() {
       this.result = eval(this.num1 + this.op + this.num2);
    }
    this.getOp = function(element) {
        element.preventDefault();
        this.op = element.currentTarget.value;
    }
    this.getButton = function(button) {
        this.op = button;
    }
}
