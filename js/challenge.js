
document.addEventListener("DOMContentLoaded", function(e) {

let value = 0

    function setTimer () {
        let counterValue = document.getElementById("counter")
        value += 1
        counterValue.innerHTML = value
        setTimeout(setTimer, 1000);

    }

    setTimeout(setTimer, 1000);


const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");





})


