var app = angular.module('paymentInfoApp', []);

app.controller('addDetailsCtrl', function($scope, jsonService) {
    var vm = {};
    // body
    var deletedIndex = '';
    var DeleteObj = '';
    // var editedText = '';
    vm.DetailedArray = [];
    vm.fnOpen = function() {

        $("#myModal").modal('show');


    }
    vm.DetailedArray = [];

    vm.moveNext = function() {
        $('#myModal').modal('hide');

        $('#myModal2').modal('show');
    }



    vm.moveBack = function() {
        $('#myModal2').modal('hide');
        $("#myModal").modal('show');

    }



    //getting all the json
    vm.myData1 = {};
    vm.select = "Select";
    vm.select2 = "Select";
    vm.select3 = "Select";
    vm.select4 = "Select";
    vm.select5 = "Select";
    vm.select6 = "Select";
    vm.select7 = "Select";
    vm.select8 = "Select";

    jsonService.getc_FrequencyType(function(dataResponse) {
        vm.myData1 = dataResponse;
        for (var i = 0; i < vm.myData1.length; i++) {
            var myPath = vm.myData1[i].path;
            vm.myPathValue1 = myPath.split("\\");
        }
    });

    vm.changeSelect = function(select) {
        vm.select = select;
    };
    vm.changeSelect2 = function(select2) {
        vm.select2 = select2;
    };
    vm.changeSelect3 = function(select3) {
        vm.select3 = select3;
    };
    vm.changeSelect4 = function(select4) {
        vm.select4 = select4;
    };
    vm.changeSelect5 = function(select5) {
        vm.select5 = select5;
    };
    vm.changeSelect6 = function(select6) {
        vm.select6 = select6;
    };
    vm.changeSelect7 = function(select7) {
        vm.select7 = select7;
    };
    vm.changeSelect8 = function(select8) {
        vm.select8 = select8;
    };
    vm.DetailedArray = [];


    vm.SaveMe = function() {
        var flag = false;
        vm.detailobj = {};
        vm.detailobj.paymentType = vm.select;
        vm.detailobj.accountType = vm.select2;
        vm.detailobj.Frequency = vm.select3;
        vm.detailobj.startDate = vm.timeEntered;
        vm.detailobj.paymentTime = vm.select4;
        vm.detailobj.paymentDueOn = vm.select6;
        vm.detailobj.AccountingCount = vm.accountdetails;
        vm.detailobj.GrowthType = vm.select8;
        vm.detailobj.FixedType = vm.textTyped_5;
        vm.detailobj.NumberOfSchedules = vm.textTyped_1;
        vm.detailobj.AdjustEveryMonth = vm.textTyped_2;
        vm.detailobj.ChargeAmount = vm.select7;
        vm.detailobj.ContractRent = vm.textTyped_3;
        vm.detailobj.AmountBase = vm.textTyped_4;
        console.log(vm.detailobj);
        for (var i = 0; i < vm.DetailedArray.length; i++) {
            if (vm.select == vm.DetailedArray[i].paymentType) {
                flag = true;
            }
        }
        if (flag) {
            for (var i = 0; i < vm.DetailedArray.length; i++) {
                if (vm.select == vm.DetailedArray[i].paymentType) {
                    vm.DetailedArray[i].AddFeaturesArray.push(vm.detailobj);
                }
            }
        } else {
            vm.newobject = {};
            vm.newobject.paymentType = vm.select;
            vm.newobject.AddFeaturesArray = [];
            vm.newobject.AddFeaturesArray.push(vm.detailobj);

            vm.DetailedArray.push(vm.newobject);
            console.log(vm.newobject);
            // console.log(vm.Details);
        }


        $('#myModal2').modal('hide');

        $('#myModal').modal('hide');

        console.log(vm.DetailedArray);
        vm.select = "Select";
        vm.select2 = "Select";
        vm.select3 = "Select";
        vm.timeEntered = "Select";
        vm.select4 = "Select";
        vm.select6 = "Select";
        vm.accountdetails = "Select";
        vm.select8 = "Select";
        vm.textTyped_5 = "Select";
        vm.textTyped_1 = "Select";
        vm.textTyped_2 = "Select";
        vm.select7 = "Select";
        vm.textTyped_3 = "Select";
        vm.textTyped_4 = "Select";


    }



    vm.edit = function(detailobj, index) {
        console.log(detailobj)
        $('#myModalForEdit').modal('show');
        vm.select = vm.DetailedArray[detailobj].paymentType;
        vm.select3 = vm.DetailedArray[detailobj].AddFeaturesArray[index].Frequency;
        vm.select2 = vm.DetailedArray[detailobj].AddFeaturesArray[index].accountType;
        vm.timeEntered = vm.DetailedArray[detailobj].AddFeaturesArray[index].startDate;
        vm.select4 = vm.DetailedArray[detailobj].AddFeaturesArray[index].paymentTime;
        vm.select6 = vm.DetailedArray[detailobj].AddFeaturesArray[index].paymentDueOn;
        vm.accountdetails = vm.DetailedArray[detailobj].AddFeaturesArray[index].AccountingCount;
        vm.select8 = vm.DetailedArray[detailobj].AddFeaturesArray[index].GrowthType;
        vm.textTyped_5 = vm.DetailedArray[detailobj].AddFeaturesArray[index].FixedType;
        vm.textTyped_1 = vm.DetailedArray[detailobj].AddFeaturesArray[index].NumberOfSchedules;
        vm.textTyped_2 = vm.DetailedArray[detailobj].AddFeaturesArray[index].AdjustEveryMonth;
        vm.select7 = vm.DetailedArray[detailobj].AddFeaturesArray[index].ChargeAmount;
        vm.textTyped_3 = vm.DetailedArray[detailobj].AddFeaturesArray[index].ContractRent;
        vm.textTyped_4 = vm.DetailedArray[detailobj].AddFeaturesArray[index].AmountBase;
        vm.parent = detailobj;
        vm.index = index;
    }

    $('#myModal2').modal('hide');

    $('#myModal').modal('hide');


    vm.sureForSave = function(index) {
        // editedText=index;
        // body...
        $('#myModalForSureSave').modal('show');
    }

    vm.saveData = function() {
            // console.log(parent+""+index)
            vm.detailobj = {};
            vm.detailobj.paymentType = vm.select;
            vm.detailobj.accountType = vm.select2;
            vm.detailobj.Frequency = vm.select3;
            vm.detailobj.startDate = vm.timeEntered;
            vm.detailobj.paymentTime = vm.select4;
            vm.detailobj.paymentDueOn = vm.select6;
            vm.detailobj.AccountingCount = vm.accountdetails;
            vm.detailobj.GrowthType = vm.select8;
            vm.detailobj.FixedType = vm.textTyped_5;
            vm.detailobj.NumberOfSchedules = vm.textTyped_1;
            vm.detailobj.AdjustEveryMonth = vm.textTyped_2;
            vm.detailobj.ChargeAmount = vm.select7;
            vm.detailobj.ContractRent = vm.textTyped_3;
            vm.detailobj.AmountBase = vm.textTyped_4;
            vm.DetailedArray[vm.parent].AddFeaturesArray[vm.index] = vm.detailobj;



            $('#myModalForSureSave').modal('hide')
            $('#myModalForEdit').modal('hide')

        }
        // deleting the required indexed 
    vm.delete = function(parent, index) {
            deletedIndex = index;
            DeleteObj = parent;

            $('#myModalForSureDelete').modal('show');


        }
        // confirmation deletion
        // deletedIndex will have the entered index
    vm.deleteOkay = function(index) {
        //console.log(index);

        vm.DetailedArray[DeleteObj].AddFeaturesArray[deletedIndex] = {}


    }

    vm.myData2 = {};
    jsonService.getc_PaymentType(function(dataResponse) {
        vm.myData2 = dataResponse;
        vm.myPathValue2 = [];
        for (var i = 0; i < vm.myData2.length; i++) {
            var myPath = vm.myData2[i].path;
            //console.log(myPath);
            var myPatharray = myPath.split("\\");
            //console.log(myPatharray);
            vm.myPathValue2.push(myPatharray[myPatharray.length - 1]);
        }
        //console.log(vm.data2)
    });

    vm.myData3 = {};
    jsonService.getI_AccountingType(function(dataResponse) {
        vm.myData3 = dataResponse;

        // vm.changeSelect = function(select) {
        //     vm.select = select;
        // };
    });

    vm.myData4 = {};
    jsonService.getI_ChargeAmountBasis(function(dataResponse) {
        vm.myData4 = dataResponse;

    });
    vm.myData5 = {};
    jsonService.getI_GrowthType(function(dataResponse) {
        vm.myData5 = dataResponse;

    });


    vm.myData6 = {};
    jsonService.getI_PaymentDueDay(function(dataResponse) {
        vm.myData6 = dataResponse;

    });
    vm.myData7 = {};
    jsonService.getI_PaymentDueOn(function(dataResponse) {
        vm.myData7 = dataResponse;

    });


    vm.myData8 = {};
    jsonService.getI_PaymentTiming(function(dataResponse) {
        vm.myData8 = dataResponse;

    });
    return vm;

});
