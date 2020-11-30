// init variables
let headsimg = document.querySelector('.head');
let tailimg = document.querySelector('.tail');
let imgsrc = ["img/COIN ICON.png", "img/tail.png"];
let heads = 0;
let tails = 0;
let total = 0;
// scrore boards
let hdscr = document.querySelector('#hscr')
let tscr = document.querySelector("#tscr");
let ttlscr = document.querySelector("#ttlscr");

// inputs
let coininp = document.querySelector('#coininp');

let tossedbtn = document.querySelector('.tossed-btn');

tossedbtn.addEventListener('click', startGameAnime, false);


window.addEventListener('DOMContentLoaded', function(){
    let ovl = document.querySelector('.overlay');
    ovl.style.display ='flex';

    setTimeout(()=>{
        ovl.style.display = 'none';
    }, 4000)
})
function startGameAnime(){
    let inpval = coininp.value;
    if (inpval == "") {
        alert("input cannot be empty");
    }
    else if(isNaN(inpval)){
        alert("not a numbver")
    }
    else if(inpval < 2 || inpval == 1 || inpval == 0){
        alert("number of coins cannot be 1")
    }
    else{
        let num = Math.floor(Math.random() * inpval);
        results(num);
        ttlscr.innerHTML = total++;
        winner(num);
    }
    // settimeout for the animation to start and end
}


function results(num){
    if (num % 2 == 0) {
        hdscr.innerHTML = heads++;
        // tailimg.style.display = 'none';
        headsimg.src = imgsrc[0];
    }
    else if(num % 2 > 0 ){
       tscr.innerHTML = tails++;
        // headsimg.style.display = "none";
        headsimg.src = imgsrc[1];

    }

    
}   

function winner(num){
    if (ttlscr.innerHTML >= 10 || ttlscr.innerHTML == 20) {
        if(hdscr.innerHTML > tscr.innerHTML){
            alert("head is d winner");
            location.reload('true');
        }else if (tscr.innerHTML > hdscr.innerHTML) {
          alert("tail is d winner");
          location.reload('true');
        }
        else if (hdscr.innerHTML = tscr.innerHTML) {
            alert('it a draw');
            location.reload('true')
        }
    }
}