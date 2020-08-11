document.addEventListener("DOMContentLoaded", () => {
    let count = 0
    const counter = document.querySelector('#counter')
    const minus = document.querySelector('#minus')
    const plus = document.querySelector('#plus')
    const like = document.querySelector('#heart')
    const likesContainer = document.querySelector('.likes')
    let likeCount = 0
    
    // debugger
    function timeHandler() {
        count ++ 
        counter.innerText = 1 + parseInt(counter.innerText)
    }

    function likeCounter() {
        count ++ 
        likeCount += 1
    } 

    setInterval(timeHandler, 1000)
   
    // event delegation
    function clickHandler() {
        document.addEventListener('click', e => {
            if(e.target === minus) {
                counter.innerText -= 1
            }else if(e.target === plus) {
                counter.innerText = 1 + parseInt(counter.innerText) 
            }else if(e.target === like) {
                
                likeCounter() 
                let liked = document.createElement('li')
                if(likeCount > 1) {
                    liked.innerText = `${counter.innerText} has been liked ${likeCount} times`
                } else {
                    liked.innerText = `${counter.innerText} has been liked ${likeCount} time`
                }
                 
                    // debugger
            
                
                    
                
                likesContainer.append(liked);
                
            }
        })
    }

    clickHandler()
    
})



/* 
What is the count of the number likes associated with the number.
create one LI for multiple likes at a given time
one li for one like at a given time
DOMContentLoaded
current time 
As a user, I should see the timer increment every second once the page has loaded.
*/