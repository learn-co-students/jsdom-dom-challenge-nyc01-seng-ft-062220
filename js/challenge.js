const timer = document.querySelector("#counter")

let x = setInterval(function(){increment()},1000)
function increment(){
    let counter = parseInt(timer.innerText,10)
    counter += 1
    timer.innerText = counter
} 

document.addEventListener("click", function(e){
    if (e.target.matches("#minus")) {
        let counter = parseInt(timer.innerText,10)
        counter -= 1
        timer.innerText = counter
    } else if (e.target.matches("#plus")) {
        let counter = parseInt(timer.innerText,10)
        counter += 1
        timer.innerText = counter

    } else if (e.target.matches("#heart")) {

        const currentTime = document.querySelector("#counter").innerText

        const liList = document.querySelectorAll(`ul.likes > li`)
        let exists = false
        
        for (let i = 0; i < liList.length; i++) {
            if (liList[i].id === currentTime) {
                exists = true
            } 
        }

        if (exists === true) {
                // increments bullet point element
                const li = document.getElementById(`${currentTime}`)
                let likes = parseInt(li.getAttribute('data-likes'),10)
                likes += 1
                li.setAttribute('data-likes',likes)
                li.innerText = `${li.id} has been liked ${li.getAttribute('data-likes')} times`
        } else { //makes new like bullet point element
                const li = document.createElement("li")
                li.id = currentTime
                li.setAttribute('data-likes', 1)
                li.innerText = `${li.id} has been liked ${li.getAttribute('data-likes')} times`
                document.querySelector("ul.likes").append(li)
        }

    } else if (e.target.matches("#pause")) {
        if (document.querySelector("#pause").innerText === "pause") {
            clearInterval(x)
            document.querySelector("#pause").innerText = "resume"
            document.querySelector("#minus").disabled = true
            document.querySelector("#plus").disabled = true
            document.querySelector("#heart").disabled = true
            document.querySelector("#comment-form").disabled = true
            document.querySelector("#submit").disabled = true
        } else {
            x = setInterval(function(){increment()},1000)
            document.querySelector("#pause").innerText = "pause"
            document.querySelector("#minus").disabled = false
            document.querySelector("#plus").disabled = false
            document.querySelector("#heart").disabled = false
            document.querySelector("#comment-form").disabled = false
            document.querySelector("#submit").disabled = false
        }
    } 
})

const form = document.querySelector("#comment-form")

form.addEventListener("submit", function(e){
        const li = document.createElement("li")
        li.innerText = e.target.comment.value
        const list = document.querySelector("#list")
        list.append(li)
        e.preventDefault()
})