function Util() {

}

Util.prototype.calDebt = function () {

    //cal p+ pnr/100
    var si = (Math.round)(totalDebtValue * 1 * 17) / (100);
    totalDebtValue = totalDebtValue + si;
    var debtPer = (totalDebtValue / maxDebt) * 100;


    $("#progressbar>.ui-progressbar-value").css("width", debtPer + "%");
    if (totalDebtValue > maxDebt) {
        alert("Game Over!");
    }
}


Util.prototype.init = function () {

    $("body").css("height", "" + $(window).height() + "px");

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

    $("#nextDay").attr('disabled', 'enabled');
}

Util.prototype.resetCounter = function () {

    numOfClicks = 0;
    $("#time>.ui-progressbar-value").css("width", "100%");
    $(".mainB").removeAttr("disabled");
    $("#nextDay").attr('disabled', 'enabled');
}


Util.prototype.checkClickCount = function () {

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

        //            calDebt();
        Util.prototype.calDebt();

    } else {
        //increment count
        numOfClicks++;

    }
}

Util.prototype.incrementDay = function () {
    dayCount++;

    $("#dayCount").html("" + dayCount);

}


Util.prototype.onSleep = function () {
    energyValue = (Math.round)(energyValue + (0.35 * energyValue));
    if (energyValue > 100) {
        energyValue = 100;
    }
    healthValue = (Math.round)(healthValue + (0.05 * healthValue));
    if (healthValue > 100) {
        healthValue = 100;
    }

}

Util.prototype.onWork = function () {
    energyValue = (Math.round)(energyValue - (0.4 * energyValue));
    if (energyValue < 0) {
        energyValue = 0;
    }
    //cash inc
    if (isIncAvailable) {
        salary = salary + incValue;
        cashValue = cashValue + salary;
    } else {
        cashValue = cashValue + salary;
    }
    //    cashValue = 2 * (cashValue);
    $("#cash").html("" + Math.round(cashValue));

    //health dec
    if (energyValue < 35) {
        healthValue = (Math.round)(healthValue - (0.25 * healthValue));
        if (healthValue < 0) {
            healthValue = 0;
        }
    }

}



Util.prototype.onFamily = function () {
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

}


Util.prototype.onStudy = function () {
    //alert("stest");
    cashValue = (Math.round)(cashValue - (500 * numOfCourses * .35));
    if (cashValue < 0) {
        cashValue = 0;
    }

    isIncAvailable = true;
    incValue = incValue + salary * 0.3;

    //alert(energyValue);
    energyValue = (Math.round)(energyValue - (0.2 * energyValue));
    //alert(energyValue);
    if (energyValue < 0) {
        energyValue = 0;
    }

    numOfCourses++;

}