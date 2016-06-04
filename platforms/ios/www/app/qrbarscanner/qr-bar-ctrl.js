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



        // vm.lookup = function () {
        //     window.open("http://www.upcindex.com/" + vm.results.text, "_system");
        // };


    };
})();