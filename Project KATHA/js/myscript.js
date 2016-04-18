var numOfClicks = 0;
var dayCount = 0;
var timeValue = 100;
var energyValue = 100;
var totalDebtValue = 30;
var healthValue = 80;
var cashValue = 1000;
var salary = 500;
var incValue = 0;
var isIncAvailable = false;
var numOfCourses = 0;
var maxDebt = 5000;
var totalDebtValue = (Math.round)(.3 * maxDebt);


$(document).ready(function () {


    Util.prototype.init();

    $(".mainB").click(function () {
        //alert("tst");
        Util.prototype.checkClickCount();
        var idValue = this.id;
        //alert(idValue);
        if (idValue == "Sleep") {


            Util.prototype.onSleep();




        } else if (idValue == "Work") {

            Util.prototype.onWork();
            //energy dec


        } else if (idValue == "Family") {

            Util.prototype.onFamily();



        } else if (idValue == "Study") {
            Util.prototype.onStudy()


        }


        $("#progressbar2>.ui-progressbar-value").css("width", energyValue + "%");
        $("#health>.ui-progressbar-value").css("width", healthValue + "%");
        //$("#progressbar2>.ui-progressbar-value").css("width",energyValue+"%");
        $("#cash").html("" + Math.round(cashValue));




    });

    $("#nextDay").click(function () {
        checkForVictory();
        Util.prototype.incrementDay();
        Util.prototype.resetCounter();

    });

    function checkForVictory() {



    }
    $("#Pay").click(function () {
        var payment = $("#debtPayment").val();

        if (!cashValue - payment < 0) {
            cashValue = cashValue - payment;

            totalDebtValue = totalDebtValue - payment;


            //$("#cashValue").html(""+cashValue);
            $("#cash").html("" + Math.round(cashValue));
            var debtPer = (totalDebtValue / maxDebt) * 100;
            $("#progressbar>.ui-progressbar-value").css("width", debtPer + "%");

        } else {
            alert("Enter the Valid Payment!");
        }


    });

});