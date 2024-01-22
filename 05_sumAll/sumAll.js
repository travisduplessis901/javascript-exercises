const sumAll = function (num1, num2) {

    let finalSum = 0;

    if (num1 > num2) { //swaps provided aruguments around
        let num3 = num2;
        num2 = num1;
        num1 = num3;
    }

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (typeof num1 === "number" && typeof num2 === "number") {
        for (i = num1; i <= num2; i++) {
            finalSum = finalSum + i;
        }
    }
    else
    {
        return "ERROR";
    }

    return finalSum;

};



// Do not edit below this line
module.exports = sumAll;
