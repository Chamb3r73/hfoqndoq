function setInstructions(box){
    let insBox = document.getElementById("instructions");
    if (insBox.textContent == "Click a box and instructions go here"){
        insBox.textContent = "Select a movie to download"
    } else {
        insBox.textContent = "Click a box and instructions go here"
    }
}

function first(){
    alert("HA!");
}

function second(){
    // alert("Imagine a bunch of posters came up and you could click one and it would let you download the film in question");
    let posters = document.getElementsByClassName("poster");
    Array.from(posters).forEach(poster => {
        if (poster.style.display == "inline"){
        poster.style.display = "none";
    } else {
        poster.style.display = "inline";
    }
    })
}

function third(){
    alert("#STAYTUNED");
}

function fourth(){
    alert("EMAIL people@hfoqndoq.com");
}

function fifth(){
    window.open("http://100.101.126.7:8096/web/#/movies.html?topParentId=f137a2dd21bbc1b99aa5c0f6bf02a805&collectionType=movies", "_blank")
}