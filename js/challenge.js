   const counter = document.getElementById("counter");

   const minusBtn = document.getElementById("minus");
   const plusBtn = document.getElementById("plus");
   const heartBtn = document.getElementById("heart");
   const pauseBtn = document.getElementById("pause");

   let intervalID = setInterval(timerPlus, 1000);

   const commentList = document.getElementById("list");
   const commentUl = document.createElement("ul");
   commentList.appendChild(commentUl);

   let currentLikesHash = {};


   function addComment() {
       const li = document.createElement("li");
       li.innerText = document.getElementById("comment-input").value;
       commentUl.appendChild(li);
   }

   function timerPlus() {
    parseInt(counter.innerText++)
   }

   function timerMinus() {
       parseInt(counter.innerText--)
   }

    const li = document.createElement("p")
    const displayLike = document.querySelector(".likes")
    displayLike.appendChild(li)

   function addLike() {
        
        if (currentLikesHash[counter.innerText]) {
            currentLikesHash[counter.innerText]++;
        } else {
            currentLikesHash[counter.innerText] = 1;
        }
        
        li.innerText = `The number ${counter.innerText} has ${currentLikesHash[counter.innerText]} like(s)`
   }

   const commentForm = document.getElementById("comment-form")
   
   commentForm.addEventListener("submit", e => {
        e.preventDefault();
        addComment();
   })


   document.addEventListener("click", (e) => {
    // let newTime = window.setTimeout(timerMinus, 3000);
    console.log(e.target)
    switch (e.target) {
        case minusBtn:
            // window.clearInterval(intervalID);
            // newTime;
            timerMinus();
            break;
        case plusBtn:
            timerPlus();
            break;
        case heartBtn:
            addLike();
            break;
        case pauseBtn:
            if (e.srcElement.innerText === "pause") {
                e.srcElement.innerText = "resume"
                console.log("pausing here")
                window.clearInterval(intervalID);

            } else {
                intervalID = setInterval(timerPlus, 1000)
                e.srcElement.innerText = "pause"
                console.log("resume stuff here")
            }
            break;
                
            }
    })

