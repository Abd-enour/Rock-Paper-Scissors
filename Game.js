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
        return output.innerHTML=`draw, you both choose ${randomItem}`;
        }else if (randomItem==="Rock" && user ==="Scissors") {
            j++;
            round++;
            computerScore.textContent=j;
            return output.innerHTML=`You Lose! ${randomItem} beats ${user}`;
        }else if (randomItem==="Rock" && user ==="Paper") { 
            i++;
            round++;
            playerScore.textContent=i;
            return output.innerHTML=`You Win! ${user} beats ${randomItem}`;
        }else if (randomItem==="Paper" && user ==="Rock") {
            j++;
            round++;
            computerScore.textContent=j;
            return output.innerHTML=`You lose! ${randomItem} beats ${user}`;
        }else if (randomItem==="Paper" && user ==="Scissors") { 
            i++;
            round++;
            playerScore.textContent=i;
            return output.innerHTML=`You Win! ${user} beats ${randomItem}`;
        }else if (randomItem==="Scissors" && user ==="Rock") { 
            i++;
            round++;
            playerScore.textContent=i;
            return output.innerHTML=`You Win! ${user} beats ${randomItem}`;
        }else if (randomItem==="Scissors" && user ==="Paper") {
            j++;
            round++;
            computerScore.textContent=j; 
            return output.innerHTML=`You lose! ${randomItem} beats ${user}`;
      }
    }else if(round >= roundNbr.value){
        if ( Number(score[0].textContent) < Number(score[1].textContent)){
            displayResult.innerHTML="";
            createResetBtn();
           return output.textContent="computer wins";
        }else if (Number(score[0].textContent) === Number(score[1].textContent)){
            displayResult.innerHTML="";
            createResetBtn();
            return output.textContent="draw";
        }else{
            displayResult.innerHTML="";
            createResetBtn();
           return output.textContent=`${userName.value} wins`;
        }
    }
}
function createResetBtn(){
    let resetBtn =document.createElement("button");
    resetBtn.setAttribute('type','submit');
    resetBtn.setAttribute('id','playAgain');
    resetBtn.textContent="Play Again";
    displayResult.appendChild(resetBtn);
    resetBtn.onclick=()=>{
        resetBtn.remove();
        location.reload();
    }
}