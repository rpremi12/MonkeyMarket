/*console.log("stop")

console.log(document.getElementById("monkeyPercent").value)
console.log(document.getElementById("indexPercent").value)

let monkeyPercentage = Number(document.getElementById('monkeyPercent').value);
let indexPercentage = Number(document.getElementById('indexPercent').value);
*/
function percentageColor() {
    console.log("asdfasdfasdf");
    let monkeyPercentage = Number(document.getElementById('monkeyPercent').value);
    let indexPercentage = Number(document.getElementById('indexPercent').value);
    console.log(monkeyPercentage)
    if (monkeyPercentage >= indexPercentage) {
        document.getElementById('monkeyPercent').style.color = "red" ;
        document.getElementById('indexPercent').style.color = "green" ;
    }

    else {
        document.getElementById('monkeyPercent').style.color = "green" ;
        document.getElementById('indexPercent').style.color = "red" ;
    }

}

//percentageColor();