var module = angular.module("myApp", []);
module.controller("mainCtrl", main);
module.controller("ctrl1", ctrl1);
module.controller("ctrl2", ctrl2);

function main($scope) {
	//var currentDate = new Date();
	$scope.currentDate = new Date();
	$scope.currentTime = $scope.currentDate.toTimeString();

	$scope.updateTime = function() {
		$scope.currentDate = new Date();
		$scope.currentTime = $scope.currentDate.toTimeString();
	}
}

function ctrl1() {
	this.testProp = 'i am from ctrl1';
}

function ctrl2() {
	this.testProp = 'i am from ctrl2';
}