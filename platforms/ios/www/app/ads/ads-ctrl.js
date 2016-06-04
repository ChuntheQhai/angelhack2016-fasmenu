(function(){
	'use strict';

	angular.module('eliteApp').controller('AdsCtrl',['$state',AdsCtrl]);

	function AdsCtrl($state){
		var vm = this;

		vm.finished = function(){
			console.log("finished");
			$state.go('app.menu');
		}	
		// var data = eliteApi.getLeagueData();
		// console.log("data:" + data.standings);
		// vm.standings = data.standings;
	};

})();