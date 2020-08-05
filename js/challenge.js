const header = document.getElementById('counter')
const setCounter = window.setInterval(addToCounter, 1000)
const likeList = document.querySelector(".likes")
let likeListElements = document.querySelectorAll("li")
let comForm = document.querySelector("#comment-form") 

//let currentSecond = header.textContent --moved to scope for function but messed other stuff up

function addToCounter() {
    header.textContent = parseInt(header.textContent) + 1
}

function createLi() {
    let newLi = document.createElement("li")
    return newLi
}


// function likeNumber() {
//     //iterate through likeListElements 
//     //for each one: 
//     if element.textContent ,exists
//     let likeNumber = likeListElement.textContent += 1
//     else
//     let likeNumber = likeListElement.textContent = 1
// }

document.addEventListener("click", function(e) {
    if (e.target.matches("#minus")) {
        header.textContent = parseInt(header.textContent) - 1
    }
    else if (e.target.matches("#plus")) {
        addToCounter()
    }
    else if (e.target.matches("#heart")) {
        let currentSecond = header.textContent
        
        // likeList.forEach(function(likeElement){
        //     likeElement.id === currentSecond
        // })

        //check if it exists
        const currentLi = document.getElementById(currentSecond)

        

        if (!currentLi) {
            let updatedLi = createLi()
            updatedLi.setAttribute("id", currentSecond)
            updatedLi.setAttribute("data-like", 1)
            updatedLi.textContent = `${updatedLi.id} has been liked ${updatedLi.getAttribute("data-likes")} times`
            likeList.append(updatedLi)
        } else {
            let newLikeCount = parseInt(currentLi.dataset.likes) + 1
            currentLi.dataset.likes = newLikeCount
            currentLi.textContent = `${currentLi.id} has been liked ${currentLi.getAttribute("data-likes")} times`
        }

        
        
        
    } else if (e.target.matches("#pause")) {
        // pseudocode - ran out of time
        // if inntertext === "pause"
            //  - resetn innertext to resume
            // - Button.disabled = true (for all buttons)
            // clearInterval(setCounter)
        ///else
            // set inner text to pause 
            // button.disabled = false (for all buttons)

        //if inncontent === "pause" resume aka set disabled to true
        clear interval
    }

})

comForm.addEventListener("submit", function(e) {
    const inputField = document.querySelector('#comment-input')
    let newP = document.createElement("p")
    newP.textContent = inputField.value 
    comDiv = document.querySelector("#list")
    comDiv.append(newP)
    inputField.value = ""
    e.preventDefault()
})


