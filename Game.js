let userName=document.getElementById("playerName");
let roundNbr=document.getElementById("select-round");
let player=document.getElementById("player");
let btn=document.querySelectorAll(".buttons");
let main =document.getElementsByClassName("main");
let playerChoice=document.getElementById("player-choice");
let computerChoice=document.getElementById("computer-choice");
let score=document.getElementsByClassName("score");
let playerScore=score[0];   
let computerScore=score[1]; 
let output=document.getElementById("whoWon");
let displayResult=document.getElementById('display-result');

btn.forEach((button) => {button.addEventListener("click",playRound)});

let round=0;
function playRound(evt) {
    player.textContent= userName.value===""?"PLAYER":userName.value.toUpperCase();
    player.textContent.toUpperCase();
    userName.setAttribute('disabled','');
    roundNbr.setAttribute('disabled','');
    if(round < roundNbr.value){
    computerChoice.classList.remove("anim-computer");
    playerChoice.classList.remove("anim-player");
    let user =evt.target.value;
    let option =["Rock","Paper","Scissors"];
    let randomItem = option[Math.floor(Math.random()*option.length)];
        if(randomItem ==="Rock"){
        computerChoice.innerHTML=`<img src="rock-paper-scissors-icon-3.jpg" width="100" height="100" alt="Rock">`;
        setInterval(() => {
            computerChoice.setAttribute("class","anim-computer");
        },20);
        }else if (randomItem ==="Paper") {
        computerChoice.innerHTML=`<img src="rock-paper-scissors-icon-2.jpg" width="100" height="100" alt="Paper">`;
        setInterval(() => {
            computerChoice.setAttribute("class","anim-computer");
        },20);
        }else if (randomItem ==="Scissors") {
        computerChoice.innerHTML=`<img src="rock-paper-scissors-icon-4.jpg" width="100" height="100" alt="Scissors">`;    
        setInterval(() => {
            computerChoice.setAttribute("class","anim-computer");
        },20);
        }
        if(user ==="Rock"){
            playerChoice.innerHTML=`<img src="rock-paper-scissors-icon-3.jpg" width="100" height="100" alt="Rock">`;
            setInterval(() => {
                playerChoice.setAttribute("class","anim-player");
            },20);
        }else if (user ==="Paper") {
            playerChoice.innerHTML=`<img src="rock-paper-scissors-icon-2.jpg" width="100" height="100" alt="Paper">`;
            setInterval(() => {
                playerChoice.setAttribute("class","anim-player");
            },20);    
        }else if (user ==="Scissors") {
            playerChoice.innerHTML=`<img src="rock-paper-scissors-icon-4.jpg" width="100" height="100" alt="Scissors">`;    
            setInterval(() => {
                playerChoice.setAttribute("class","anim-player");
            },20);
        }
    
    let i=Number(playerScore.textContent);
    let j=Number(computerScore.textContent);
    if (randomItem===user) { 
        }else if (randomItem==="Rock" && user ==="Scissors") {
            j++;
            round++;
            computerScore.textContent=j;
        }else if (randomItem==="Rock" && user ==="Paper") { 
            i++;
            round++;
            playerScore.textContent=i;
        }else if (randomItem==="Paper" && user ==="Rock") {
            j++;
            round++;
            computerScore.textContent=j;
        }else if (randomItem==="Paper" && user ==="Scissors") { 
            i++;
            round++;
            playerScore.textContent=i;
        }else if (randomItem==="Scissors" && user ==="Rock") { 
            i++;
            round++;
            playerScore.textContent=i;
        }else if (randomItem==="Scissors" && user ==="Paper") {
            j++;
            round++;
            computerScore.textContent=j; 
      }
    }else if(round >= roundNbr.value){
        if ( Number(score[0].textContent) < Number(score[1].textContent)){
            displayResult.innerHTML="";
            displayResult.textContent=`YOU LOST`;
            displayResult.style.fontSize="45px";
           createResetBtn();
        }else if (Number(score[0].textContent) === Number(score[1].textContent)){
            displayResult.innerHTML="";
            displayResult.textContent=` DRAW`;
            displayResult.style.fontSize="45px";
             createResetBtn();
        }else{
            displayResult.innerHTML=`<div id="celebrate">🏆</div>
                                     <div style="color:black">congratulation, ${player.textContent}</div>
                                     <div id="confetti-wrapper"><div>`;
            displayResult.style.fontSize="45px";
            displayResult.style.cssText="display:flex;flex-direction:column";
            for(l=0; l<100; l++) {
                // Random rotation
                var randomRotation = Math.floor(Math.random() * 360);
                  // Random Scale
                var randomScale = Math.random() * 1;
                // Random width & height between 0 and viewport
                var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
                var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
                
                // Random animation-delay
                var randomAnimationDelay = Math.floor(Math.random() * 15);
              
                // Random colors
                var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#000000', '#8497B0']
                var randomColor = colors[Math.floor(Math.random() * colors.length)];
              
                // Create confetti piece
                var confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.top=randomHeight + 'px';
                confetti.style.right=randomWidth + 'px';
                confetti.style.backgroundColor=randomColor;
                // confetti.style.transform='scale(' + randomScale + ')';
                confetti.style.obacity=randomScale;
                confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
                confetti.style.animationDelay=randomAnimationDelay + 's';
                document.getElementById("confetti-wrapper").appendChild(confetti);
              }
            createResetBtn();
        }
    }
}
function createResetBtn(){
    let resetBtn =document.createElement("button");
    resetBtn.setAttribute('type','submit');
    resetBtn.setAttribute('id','playAgain');
    resetBtn.textContent="Play Again";
    output.appendChild(resetBtn);
    let input=document.querySelectorAll('input');
    input.forEach((inp)=>inp.setAttribute('disabled',''))
    resetBtn.onclick=()=>{
        location.reload();
    }
}