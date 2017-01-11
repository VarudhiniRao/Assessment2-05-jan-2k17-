app.service('jsonService', function($http) {
            this.getc_FrequencyType = function(callbackFunc) {
                $http.get('jsons/c_frequecyType.json').success(function(data) {
                    // console.log(data)
                    callbackFunc(data);

                }).error(function() {
                    // console.log("error");
                });
            }

            this.getc_PaymentType = function(callbackFunc) {
                $http.get('jsons/c_paymentType.json').success(function(data) {
                    // console.log(data)
                    callbackFunc(data);

                }).error(function() {
                    // console.log("error");
                });
            }
            this.getI_AccountingType = function(callbackFunc) {
                $http.get('jsons/l_AccountingType.json').success(function(data) {
                    // console.log(data)
                    callbackFunc(data);

                }).error(function() {
                    // console.log("error");
                });
            }
            this.getI_ChargeAmountBasis = function(callbackFunc) {
                $http.get('jsons/l_ChargeAmountBasis.json').success(function(data) {
                    // console.log(data)
                    callbackFunc(data);

                }).error(function() {
                    // console.log("error");
                });
            }
            this.getI_GrowthType = function(callbackFunc) {
                $http.get('jsons/l_GrowthType.json').success(function(data) {
                    // console.log(data)
                    callbackFunc(data);

                }).error(function() {
                    // console.log("error");
                });
            }
            this.getI_PaymentDueDay = function(callbackFunc) {
                $http.get('jsons/l_PaymentDueDay.json').success(function(data) {
                    // console.log(data)
                    callbackFunc(data);

                }).error(function() {
                    // console.log("error");
                });
            }
            this.getI_PaymentDueOn = function(callbackFunc) {
                $http.get('jsons/l_PaymentDueOn.json').success(function(data) {
                    // console.log(data)
                    callbackFunc(data);

                }).error(function() {
                    // console.log("error");
                });
            }
            this.getI_PaymentTiming = function(callbackFunc) {
                $http.get('jsons/l_PaymentTiming.json').success(function(data) {
                    // console.log(data)
                    callbackFunc(data);

                }).error(function() {
                    // console.log("error");
                });
            }



        });
