
// Takes the percentage growths of both funds and returns the better percentage in green
// Also returns the difference in percent between the funds
// syntax = [initial stock price, final stock price, percent growth]
let vfinx = [259.75, 273.45, 0.0527];
let fxaix = [97.77, 102.76, 0.0510];
let swppx = [43, 45.31, 0.0537];
let bspix = [333.77, 350.94, 0.0514];
let preix = [74.97, 78.70, 0.0497];
let meanIndeces = [167.36, 170.23, 0.0517];





function percentageColor() {
    let monkeyPercentage = Number(document.getElementById('monkeyPercent').textContent);
    let indexPercentage = Number(document.getElementById('indexPercent').textContent);

    if (monkeyPercentage > indexPercentage) {
        let diffPercentage = monkeyPercentage - indexPercentage;
        document.getElementById('monkeyPercent').style.color = "green" ;
        document.getElementById('indexPercent').style.color = "red" ;
        document.getElementById("resultPercent").innerHTML = " The monkeys beat the index fund by " + diffPercentage.toFixed(2) + "%!";
    }

    else {
        let diffPercentage = indexPercentage - monkeyPercentage;
        document.getElementById('monkeyPercent').style.color = "red" ;
        document.getElementById('indexPercent').style.color = "green" ;
        document.getElementById("resultPercent").innerHTML = "The index fund beat the monkeys by " + diffPercentage.toFixed(2) + "%!";
    }
}