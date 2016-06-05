(function(){
	'use strict';

	angular.module('eliteApp').controller('MenuCtrl',['$scope','$state',MenuCtrl]);

	function MenuCtrl($scope,$state){
		var vm = this;

		vm.payItems = function() {
			console.log("payItems!");
			var tAmount = document.getElementById("totalAmount");
			var totalAmount = tAmount.innerHTML;

			$state.go("app.payment",{'total_amount': totalAmount});
		}

	};

})();