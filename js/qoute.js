const qouteText = document.querySelector(".quote"),
authorName= document.querySelector(".author")
qouteBtn = document.querySelector(".new-qoute-btn");
window.onload = randomQoute();
function randomQoute(){
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result => {
        console.log(result)
        qouteText.innerHTML = result.content;
        authorName.innerHTML = result.author;
    })
}

qouteBtn.addEventListener("click",randomQoute)