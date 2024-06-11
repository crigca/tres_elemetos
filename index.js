//variables
let btnBlackMode = document.getElementById("btn-black-mode");
let btnWhiteMode = document.getElementById("btn-white-mode");
let container = document.querySelector(".container-fluid");
let filePathEsp = "lyrics.txt/lyric_esp.txt";
let filePathEng = "lyrics.txt/lyric_eng.txt";

//blackMode and whiteMode events
btnBlackMode.addEventListener("click", function(){
    container.style.backgroundColor = "black";
    container.style.color = "white";
});

btnWhiteMode.addEventListener("click", function(){
    container.style.backgroundColor = "white";
    container.style.color = "black";
});

//Pause event
document.querySelector("video").onpause = function() {
    alert("El video esta en pausa");
};

//Load lyrics
function loadLyrics(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(text => {
            document.getElementById('lyrics-content').innerText = text;
        });
}

//load lyrics on page load
window.onload = () => loadLyrics(filePathEng);

//Change language events
document.getElementById('btn-spanish-lyrics').addEventListener('click', function() {
    loadLyrics(filePathEsp);
});

document.getElementById("btn-english-lyrics").addEventListener("click", function(){
    loadLyrics(filePathEng);
});









