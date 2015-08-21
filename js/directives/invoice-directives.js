var app = angular.module("invoiceMatic");
app.directive("invoiceMatic", [function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/invoice-matic.html',
    controller: ["$scope", function($scope) {

    }]
  }
}]);

app.directive("invoiceBody", [function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/invoice-body.html',
    controller: ["$scope", function($scope) {

    }]
  }
}]);

app.directive("boxInput", [function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/box-input.html',
    controller: ["$scope", "invoiceServices", function($scope,
      invoiceServices) {

      $scope.invoiceServicesData = invoiceServices.data;

      $scope.onClickBox = function($event) {
        console.log("clickedbox");
        $event.stopPropagation();
        invoiceServices.changeIsboxFlag(false);
      }
      $scope.onClickInputBox = function($event) {
        console.log("onClickInputBox");
        $event.stopPropagation();
      }
      $scope.closeInputBox = function() {
        console.log("clickedoutside");
        invoiceServices.changeIsboxFlag(true);
      }

    }]
  };
}]);
