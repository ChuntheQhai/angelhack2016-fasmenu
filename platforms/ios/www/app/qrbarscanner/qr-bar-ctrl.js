(function () {
    'use strict';

    angular.module('eliteApp').controller('BarCodeCtrl', ['$ionicPopup','$state', LeaguesCtrl]);

    function LeaguesCtrl($ionicPopup,$state) {
      	var vm = this;

        vm.scan = function(){
            cordova.plugins.barcodeScanner.scan(
              function (result) {
                  if(!result.cancelled)
                  {
                      if(result.format == "QR_CODE")
                      {
                          vm.results = result;
                          $state.go("app.ads");
                      }
                  }
              },
              function (error) {
                  alert("Scanning failed: " + error);
              }
            );
        }
        
        vm.showAds = function(){
          $state.go("app.ads");
        }

        vm.graph = {};
        vm.graph.data = [
          //Awake
          [60, 9.60, 20.30, 10.50, 20.90, 15.30]
        ];
        
        vm.graph.labels = ['5/21', '5/25', '5/28', '5/31', '6/1', '6/3'];




        // vm.lookup = function () {
        //     window.open("http://www.upcindex.com/" + vm.results.text, "_system");
        // };


    };
})();