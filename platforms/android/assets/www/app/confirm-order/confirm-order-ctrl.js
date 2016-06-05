(function(){
	'use strict';

	angular.module('eliteApp').controller('ConfirmOrder',['$scope','$state',ConfirmOrder]);

	function ConfirmOrder($scope,$state){
		var vm = this;

		vm.backtoHome = function() {
			$state.go("app.qrbarcode");
		}

	};

})();