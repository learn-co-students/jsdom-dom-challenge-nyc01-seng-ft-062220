document.addEventListener("DOMContentLoaded", function(e){

function timerHandler() {
    const counterDisplay = document.querySelector("#counter");
    const pauseButton = document.querySelector("#pause");
    let minusButton = document.querySelector("#minus");
    let plusButton = document.querySelector("#plus");
    counter = 0
    let isPaused = false;
    let timer = setInterval(function() {
        if (!isPaused) {
            counterDisplay.innerHTML  =  counter
            counter += 1
        };
    },1000);
    pauseButton.addEventListener("click", function(e) {
        if (pauseButton.innerText === "pause") {
            pauseButton.innerText = "resume";
            minusButton.disabled = true;
            plusButton.disabled = true;
            document.querySelector("#heart").disabled = true;
            isPaused = true;
        } else {
            pauseButton.innerText = "pause";
            isPaused = false;
            minusButton.disabled = false;
            plusButton.disabled = false;
            document.querySelector("#heart").disabled = false;
        };
    });
    minusButton.addEventListener("click", function(){
        counterDisplay.innerHTML  =  counter 
        counter -= 1
    });
    plusButton.addEventListener("click", function(){
        counterDisplay.innerHTML  =  counter ;
        counter += 1;
    });

};

function likesHandler() {
    document.addEventListener("click", function(e) {
        let heartButton = document.querySelector("#heart");
        let counterDisplay = document.querySelector("#counter");
        let likes = document.querySelector(".likes")
            
        if (e.target === heartButton) {
            if (document.getElementById(`${counterDisplay.innerText}`) == null) {
                const likeStatement = document.createElement("li");
                likeStatement.id = `${counterDisplay.innerText}`;
                likeStatement.innerHTML = `The number ${counterDisplay.innerText} has been this many times:1`
                likes.append(likeStatement);
            } else { 
                const liToUpdate = document.getElementById(`${counterDisplay.innerText}`)
                const newStatement = parseInt(liToUpdate.innerHTML.split(":")[1]) + 1
                liToUpdate.innerText = `The number ${counterDisplay.innerText} has this many likes: ${newStatement}`
            };
        };
    });
};

function commentHandler() {
    let submitButton = document.querySelector("#submit");
    let commentBox = document.querySelector("#comment-input");
    let comments = document.querySelector("#list");
    
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        const commentUl = document.createElement("ul")
        comments.append(commentUl)
        const commentLi = document.createElement("li")
        const commentText = commentBox.value
        commentLi.innerText = commentText
        commentUl.append(commentLi)
    });
}

commentHandler();
likesHandler();
timerHandler();
});


