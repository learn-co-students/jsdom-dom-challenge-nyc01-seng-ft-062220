document.addEventListener("DOMContentLoaded", function(e) {
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    let value = 0
    function setTimer () {
        let counterValue = document.getElementById("counter")
        value += 1
        counterValue.innerHTML = value
        setTimeout(setTimer, 1000);
    }
    setTimeout(setTimer, 1000);

    let array = []

    let likes = 1


    document.addEventListener("click", function(e) {
        e.preventDefault()

        let counterValue = document.getElementById("counter")
        array.push(parseInt(counterValue.textContent))

        if (e.target.matches("#plus")) {
            let countValue = parseInt(counterValue.textContent)
            countValue += 1

        } else if (e.target.matches("#minus")) {
            let countValue = parseInt(counterValue.textContent)
            countValue -= 1


        } else if (e.target.matches("#heart")) {
            let countValue = parseInt(counterValue.textContent)
            let ul = document.querySelector(".likes")

            let list = document.createElement('li')


            parseInt(countValue)


            if (array[array.length - 1] === array[array.length - 2] ) {
                likes += 1
            } else {
                likes = 1
            }

            list.innerHTML = `${counterValue.textContent} has ${likes} likes.`
            ul.append(list)


        }

        const commentBox = document.getElementById("comment-input");
        const commentHeader = document.getElementById("comment-header")

        if (e.target.matches("#submit")) {

            let commentObject = document.createElement("p")
            commentObject.innerText = commentBox.value

            commentHeader.append(commentObject)


        }


    })

})

