const header = document.querySelector("#counter")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")
const heartButton = document.querySelector("#heart")
const ul = document.querySelector(".likes")
const form = document.querySelector("#comment-form")
const commentInput = document.querySelector('#comment-input')
const list = document.querySelector("#list")

function timingClock() {
    setInterval(function() {
        header.textContent = parseInt(header.textContent) + 1  
    }, 1000)
}

document.addEventListener("click", function(e) {
    if (e.target == plusButton) {
        header.textContent = parseInt(header.textContent) + 1 
    }
    else if (e.target == minusButton) {
        header.textContent = parseInt(header.textContent) - 1
    }
    else if (e.target == heartButton) {
        //const li = document.createElement("li")

        let currentTime = header.textContent
        let currentLi = document.getElementById(currentTime)

        if (!currentLi) {
            let updatedLi = document.createElement("li")
            updatedLi.setAttribute('id', currentTime)
            updatedLi.setAttribute('data-likes', 1)
            updatedLi.textContent = `${updatedLi.id} has been liked ${updatedLi.getAttribute('data-likes')} times`
            ul.append(updatedLi)
        }
        else {
            let newLikeCount = parseInt(currentLi.dataset.likes) + 1
            currentLi.dataset.likes = newLikeCount 
            currentLi.textContent = `${currentLi.id} has been liked ${currentLi.getAttribute('data-likes')} times`
            ul.append(currentLi)
        }
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let p = document.createElement("p")
    p.textContent = commentInput.value  
    list.append(p)
})



timingClock()