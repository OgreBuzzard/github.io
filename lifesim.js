'use strict';

// create all the variables
var ageYears = 18;
var ageMonths = 0;
var income = 4000;
var takeHome = income * .75;
var rent = 750;
var utilities = income * .1;
var food = 1200;
var entertainment = 1000;
var savings = 0;
var savingsHappiness = savings;
var ccDebt = 0;
var ccDebtHappiness = ccDebt;
var studentDebt = 40000;
var studentDebtHappiness = studentDebt;
var happiness = 50;

// display all the info
document.getElementById('ageValue').innerHTML = ageYears + " Years " + ageMonths + " Months";
document.getElementById('incomeValue').innerHTML = income.toFixed(2);
document.getElementById('takeHomeValue').innerHTML = takeHome.toFixed(2);
document.getElementById('rentValue').innerHTML = rent.toFixed(2);
document.getElementById('utilitiesValue').innerHTML = utilities.toFixed(2);
document.getElementById('foodValue').innerHTML = food.toFixed(2);
document.getElementById('entValue').innerHTML = entertainment.toFixed(2);
document.getElementById('savingsValue').innerHTML = savings.toFixed(2);
document.getElementById('ccDebtValue').innerHTML = ccDebt.toFixed(2);
document.getElementById('studentDebtValue').innerHTML = studentDebt.toFixed(2);
document.getElementById('happinessValue').innerHTML = happiness;

// advance the counter by a month
function advanceMonth() {
    ageMonths++
 // reset the year
    if(ageMonths > 11)
    {
        ageYears++;
        ageMonths = 0;
        // annual raise
        income = income * 1.05;
        takeHome = income * .75;
        document.getElementById('incomeValue').innerHTML = income.toFixed(2);
        document.getElementById('takeHomeValue').innerHTML = takeHome.toFixed(2);    
    }
    // pay bills and add/subtract remainder to savings
    savings = savings + takeHome - rent - utilities - food - entertainment;
    // calculate cc debt
    ccDebt = ccDebt * (1 + 17/1200);
    // put shortfall on credit card
    if(savings < 0)
    {
        ccDebt = ccDebt + (0 - savings);
        savings = 0;
    }
    // calculate student loan debt
    studentDebt = studentDebt * (1 + 4/1200);
    // update values
    document.getElementById('ageValue').innerHTML = ageYears + " Years " + ageMonths + " Months";
    document.getElementById('savingsValue').innerHTML = savings.toFixed(2);
    document.getElementById('ccDebtValue').innerHTML = ccDebt.toFixed(2);
    document.getElementById('studentDebtValue').innerHTML = studentDebt.toFixed(2);

    // adjust happiness
    if (savings > (savingsHappiness + 1000))
    {    
        happiness++;
        savingsHappiness = savings;
        document.getElementById('happinessValue').innerHTML = happiness;
    } else if (savings < (savingsHappiness - 1000))
    {
        happiness--;
        savingsHappiness = savings;
        document.getElementById('happinessValue').innerHTML = happiness;
    }
    if (ccDebt > (ccDebtHappiness + 1000))
    {    
        happiness--;
        ccDebtHappiness = ccDebt;
        document.getElementById('happinessValue').innerHTML = happiness;
    } else if (ccDebt < (ccDebtHappiness - 1000))
    {
        happiness++;
        ccDebtHappiness = ccDebt;
        document.getElementById('happinessValue').innerHTML = happiness;
    }
    if (studentDebt > (studentDebtHappiness + 1000))
    {    
        happiness--;
        studentDebtHappiness = studentDebt;
        document.getElementById('happinessValue').innerHTML = happiness;
    } else if (studentDebt < (studentDebtHappiness - 1000))
    {
        happiness++;
        studentDebtHappiness = studentDebt;
        document.getElementById('happinessValue').innerHTML = happiness;
    }
}

// transfer savings to credit card
function payCCDebt() {
    if(ccDebt >= savings) {
        ccDebt = ccDebt - savings;
        savings = 0;
    } else {
        savings = savings - ccDebt;
        ccDebt = 0;
    }

    document.getElementById('savingsValue').innerHTML = savings.toFixed(2);
    document.getElementById('ccDebtValue').innerHTML = ccDebt.toFixed(2);
}

// transfer savings to student loan
function payStudentDebt() {
    if(studentDebt >= savings) {
        studentDebt = studentDebt - savings;
        savings = 0;
    } else {
        savings = savings - studentDebt;
        studentDebt = 0;
    }
    document.getElementById('savingsValue').innerHTML = savings.toFixed(2);
    document.getElementById('studentDebtValue').innerHTML = studentDebt.toFixed(2);
};