
const p = document.querySelectorAll("p");
const text = '';
const listOfRSP = ["rock", "scissor", "paper"];
const btn = document.querySelector('button');
const h3 = document.querySelector("h3");
const div = document.querySelector('div');


//getPlayerChoise();

btn.addEventListener('click', getPlayerName);
btn.addEventListener("click", function(){
    document.location.href = "game.html"
    });


//FUNKTIONER
function generateRockScissorPaper(listOfRSP){
    return listOfRSP[Math.floor(Math.random()*listOfRSP.length)];
}

function getPlayerName(){
    let inputVal = document.getElementById("myInput").value;
    
    p[0].innerText="Player Name: "+inputVal;

    
}

//function getPlayerChoise(){
     div.addEventListener('click', function(e){
        console.log(e.target.innerText)
        console.log(e.target);

        p[1].innerText = e.target.innerText;
    
    });























