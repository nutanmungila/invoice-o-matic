var app = angular.module("invoiceMatic");

app.factory("invoiceServices", [function() {
  var invoiceServices = {
    data: {
      isbox: true
    },
    changeIsboxFlag: function(value) {
       invoiceServices.data.isbox = value;
    }

  };
  return invoiceServices;
}]);
