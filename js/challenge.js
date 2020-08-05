document.addEventListener('DOMContentLoaded', function(event){
    
    // 1. variables
    let counter = document.getElementById("counter")
    let likesBox = document.querySelector('ul.likes')
    let incrementer = setInterval(increment, 1000);

    // 2. functions

    function increment(){
        counter.innerText = parseInt(counter.innerText) + 1;
    } 

    function clock() {
        // let incrementer = setInterval(increment, 1000);

         increment()
         
    }

    function nameChange() {
        let timeButton = document.getElementById("pause")
        
        if (timeButton.innerText == "pause") {
            timeButton.innerText = "resume"

            document.getElementById("plus").disabled = true;
            document.getElementById("minus").disabled = true;
            document.getElementById("heart").disabled = true;
            document.getElementById("submit").disabled = true;

            clearInterval(incrementer)

        } else {
            timeButton.innerText = "pause"
            document.getElementById("plus").disabled = false;
            document.getElementById("minus").disabled = false;
            document.getElementById("heart").disabled = false;
            document.getElementById("submit").disabled = false;

            incrementer = setInterval(increment, 1000);

        }
            
    }


 
    // 3. event listeners

    document.addEventListener("click", function(event){
        

        if (event.target.matches("#minus")){
            
            counter.innerText = parseInt(counter.innerText) - 1;

        } else if (event.target.matches("#plus")){
            counter.innerText = parseInt(counter.innerText) + 1;

        } else if (event.target.matches("#heart")) {
            
            if (document.getElementById(`${counter.innerText}`)) {
                let liked = document.getElementById(`${counter.innerText}`)
                liked.counter += 1
                liked.innerText = `${counter.innerText} has been liked ${liked.counter} time!`

            } else {
                let likes = document.createElement('li')
                likes.counter = 1
                likes.innerText = `${counter.innerText} has been liked ${likes.counter} time!`
                likes.id = `${counter.innerText}`
                likesBox.append(likes)
            }
            



        } else if (event.target.matches("#pause")) { 
            nameChange()

        } else if (event.target.matches("#submit")) {
            let comment = document.createElement("p")
            let input = document.getElementById("comment-input")
            comment.innerText = input.value
            let list = document.getElementById("list")
            list.append(comment)
            
            event.preventDefault()
        }
    })






    // clock()

});