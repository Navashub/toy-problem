const prompt = require("prompt-sync")();
function demeritpointsCalculator(speed)
{
    const speedLimit = 70;
    let points = 0;

    if (speed <= speedLimit){
        console.log("OK");
    }else {
        points = Math.floor((speed - speedLimit) / 5);
        console.log(`Demerit points: ${points}`);
    }

    if (points > 12){
        console.log("License suspended");
    }
}

const speed = parseInt(prompt("Enter speed of the car: "));
demeritpointsCalculator(speed);
