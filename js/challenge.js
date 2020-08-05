
document.addEventListener("DOMContentLoaded", function(e) {

let value = 0

    function setTimer () {

        let counterValue = document.getElementById("counter")
        value += 1

        counterValue.innerHTML = value

        console.log(value)


        setTimeout(setTimer, 1000);


    }

    setTimeout(setTimer, 1000);


    const counterBox = document.getElementById("counter");
    //setInterval(increaseTime, 100)


    let counterButton = document.getElementById("counter")








})


