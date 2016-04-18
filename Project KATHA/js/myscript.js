var numOfClicks = 0;
var dayCount = 0;
var timeValue = 100;
var energyValue = 100;
var totalDebtValue = 30;
var healthValue = 80;
var cashValue = 1000;
var incValue = 0;
var isIncAvailable = false;
var numOfCourses = 0;
var maxDebt = 5000;
var totalDebtValue = (Math.round)(.3 * maxDebt);


$(document).ready(function () {

    function calDebt() {

        //cal p+ pnr/100
        var si = (Math.round)(totalDebtValue * 1 * 17) / (100);
        totalDebtValue = totalDebtValue + si;
        var debtPer = (totalDebtValue / maxDebt) * 100;


        $("#progressbar>.ui-progressbar-value").css("width", debtPer + "%");
        if (totalDebtValue > maxDebt) {
            alert("Game Over!");
        }

    }

    function init() {



        //$("#cashValue").html(""+cashValue);
        $("#cash").html("" + Math.round(cashValue));
        //update all the meters
        //start all meters with 70% except Debt- 30%
        $("#progressbar").progressbar({
            value: 37
        });

        $("#progressbar2").progressbar({
            value: 75
        });

        $("#health").progressbar({
            value: 75
        });

        $("#time").progressbar({
            value: 100
        });
    }

    init();

    //disable on load

    $("#nextDay").attr('disabled', 'enabled');

    function resetCounter() {
        numOfClicks = 0;
        $("#time>.ui-progressbar-value").css("width", "100%");
        $(".mainB").removeAttr("disabled");
        $("#nextDay").attr('disabled', 'enabled');
    }

    function checkClickCount() {

        if (numOfClicks + 1 == 1) {
            //timeValue=66;
            $("#time>.ui-progressbar-value").css("width", "66%");
            numOfClicks++;

        } else if (numOfClicks + 1 == 2) {
            //timeValue=33;
            $("#time>.ui-progressbar-value").css("width", "33%");
            numOfClicks++;

        } else if (numOfClicks == 2) {
            //enable next day button
            //timeValue=0;
            $("#time>.ui-progressbar-value").css("width", "0%");

            $("#nextDay").removeAttr("disabled");
            $(".mainB").attr('disabled', 'enabled');
            numOfClicks++;

            calDebt();

        } else {
            //increment count
            numOfClicks++;

        }

    }

    function incrementDay() {

        dayCount++;

        $("#dayCount").html("" + dayCount);

    }



    $(".mainB").click(function () {
        //alert("tst");
        checkClickCount();
        var idValue = this.id;
        //alert(idValue);
        if (idValue == "Sleep") {
            energyValue = (Math.round)(energyValue + (0.35 * energyValue));
            if (energyValue > 100) {
                energyValue = 100;
            }
            healthValue = (Math.round)(healthValue + (0.05 * healthValue));
            if (healthValue > 100) {
                healthValue = 100;
            }


        } else if (idValue == "Work") {
            //energy dec
            energyValue = (Math.round)(energyValue - (0.4 * energyValue));
            if (energyValue < 0) {
                energyValue = 0;
            }
            //cash inc
            if (isIncAvailable) {
                cashValue = cashValue + incValue;
            }
            cashValue = 2 * (cashValue);
            $("#cash").html("" + Math.round(cashValue));

            //health dec
            if (energyValue < 35) {
                healthValue = (Math.round)(healthValue - (0.25 * healthValue));
                if (healthValue < 0) {
                    healthValue = 0;
                }
            }

        } else if (idValue == "Family") {
            cashValue = cashValue - (.1 * cashValue);
            if (cashValue < 0) {
                cashValue = 0;
            }

            energyValue = (Math.round)(energyValue - (0.1 * energyValue));
            if (energyValue < 0) {
                energyValue = 0;
            }

            healthValue = (Math.round)(healthValue + (0.25 * healthValue));
            if (healthValue > 100) {
                healthValue = 100;
            }


        } else if (idValue == "Study") {
            //alert("stest");
            cashValue = (Math.round)(cashValue - (500 * numOfCourses * .35));
            if (cashValue < 0) {
                cashValue = 0;
            }

            isIncAvailable = true;

            //alert(energyValue);
            energyValue = (Math.round)(energyValue - (0.2 * energyValue));
            //alert(energyValue);
            if (energyValue < 0) {
                energyValue = 0;
            }

            numOfCourses++;

        }


        $("#progressbar2>.ui-progressbar-value").css("width", energyValue + "%");
        $("#health>.ui-progressbar-value").css("width", healthValue + "%");
        //$("#progressbar2>.ui-progressbar-value").css("width",energyValue+"%");
        $("#cash").html("" + Math.round(cashValue));




    });

    $("#nextDay").click(function () {
        checkForVictory();
        incrementDay();
        resetCounter();

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