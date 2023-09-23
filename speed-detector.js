const prompt = require("prompt-sync")();
function demeritpointsCalculator(speed)
{
    // speed limit declaration
    const speedLimit = 70;

    // demerit points initialized to zero
    let points = 0;

    // condition to check if the speed is greater than the speed limit
    if (speed <= speedLimit){

        // if less it prints "OK"
        console.log("OK");
    }else {
        // any speed above the speed limit is divided by 5 for each point
        points = Math.floor((speed - speedLimit) / 5);
        console.log(`Demerit points: ${points}`);
    }

    // checks if the points are greater than 12
    if (points > 12){

        // if greater than 12 it displays "License suspended"
        console.log("License suspended");
    }
}

const speed = parseInt(prompt("Enter speed of the car: "));
// calling the function once the speed is inputed
demeritpointsCalculator(speed);
