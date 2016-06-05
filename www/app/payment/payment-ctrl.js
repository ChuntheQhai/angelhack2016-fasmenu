(function(){
	'use strict';

	angular.module('eliteApp').controller('PaymentCtrl',['$state',PaymentCtrl]);

	function PaymentCtrl($state){
		var vm = this;
           console.log("Received");
          //console.log($stateParams.total_amount);

    vm.backtoHome = function() {
      $state.go("app.qrbarcode");
    }

		var paymentDetails = {
               // ------- SDK required data ----------
              'mp_amount' : '10.00',
              'mp_username' : 'api_MOLWallet_Dev3',
              'mp_password' : 'api_walletdev3',
              'mp_merchant_ID' : 'MOLWallet_Dev3',
              'mp_app_name' : 'ahkl03',
              'mp_verification_key' : '526cf83bd534609be4ba7df469f43aa1',  
              'mp_currency' : 'MYR',
              'mp_country' : 'MY',  
              'mp_order_ID' : 'd89d0fd0fe9r0f0s',  
               'mp_channel' : '', 
               'mp_bill_description' : 'Bill description',
               'mp_bill_name' : 'Chun Qhai',
               'mp_bill_email' : 'abelchun39@gmail.com',
               'mp_bill_mobile' : '+60173379133',
               'mp_channel_editing' : false,
               'mp_editing_enabled' : false,
               'mp_transaction_id' : '',
               'domain_mode': '1'
           };

		var molpayCallback = function (transactionResult) {
        // transactionResult return in json;
		};

		window.molpay.startMolpay(paymentDetails, molpayCallback);



	};

})();