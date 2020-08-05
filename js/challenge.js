document.addEventListener('DOMContentLoaded', function(){
    //global variables
    const plusButton = document.getElementById('plus')
    const minusButton = document.getElementById('minus')
    const pauseButton = document.getElementById('pause')
    const heartButton = document.getElementById('heart')
    const submitButton = document.getElementById('submit')
    const counter = document.getElementById('counter')
    const likesSpace = document.querySelector(`ul.likes`)
    const incrementCounterText = () => {
        counter.innerText = parseInt(counter.innerText) + 1
    }
    let currentInterval = setInterval(incrementCounterText, 1000);

    //button events
    minusButton.addEventListener('click', function(){
        counter.innerText = parseInt(counter.innerText) - 1
    })

    plusButton.addEventListener('click', function(){
        counter.innerText = parseInt(counter.innerText) + 1
    })

    heartButton.addEventListener('click', function(){
        if (document.getElementById(counter.innerText)) {
            let currentListItem = document.getElementById(counter.innerText)
            currentListItem.counter++
            currentListItem.innerText = `${counter.innerText} has been liked ${currentListItem.counter} time(s)`
        } else {
            const newListItem = document.createElement('li')
            newListItem.counter = 1
            newListItem.innerText = `${counter.innerText} has been liked ${newListItem.counter} time(s)`
            newListItem.id = counter.innerText
            likesSpace.append(newListItem)
        }
    })

    submitButton.addEventListener('click', function(e){
        e.preventDefault()
        let inputText = document.getElementById('comment-input').value
        let commentsDiv = document.getElementById('list')
        let newComment = document.createElement('li')
        newComment.innerText = inputText
        commentsDiv.append(newComment)
        document.getElementById('comment-input').value = ''
    })
    
    pauseButton.addEventListener('click', function(){
        if (pauseButton.innerText === 'pause') {
            clearInterval(currentInterval)
            pauseButton.innerText = 'resume'
            heartButton.disabled = true;
            plusButton.disabled = true;
            minusButton.disabled = true;
            submitButton.disabled = true;
        } else {
            currentInterval = setInterval(incrementCounterText, 1000)
            pauseButton.innerText = 'pause'
            heartButton.disabled = false;
            plusButton.disabled = false;
            minusButton.disabled = false;
            submitButton.disabled = false;
        }
    })
}); 