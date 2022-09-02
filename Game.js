// let userName=prompt("what is your name:");
let player=document.getElementById("player");
let btn=document.querySelectorAll(".buttons");
let main =document.getElementsByClassName("main");
// let score=document.getElementById("score").children;
let playerChoice=document.getElementById("player-choice");
let computerChoice=document.getElementById("computer-choice");

// userName===""?player.textContent=player.textContent:player.textContent=userName.toUpperCase();
btn.forEach((button) => {button.addEventListener("click",playRound)});


function playRound(evt) {debugger
    computerChoice.classList.remove("anim-computer");
    playerChoice.classList.remove("anim-player");
    let user =evt.target.value;
    let option =["Rock","Paper","Scissors"];
    let randomItem = option[Math.floor(Math.random()*option.length)];
        if(randomItem ==="Rock"){
        computerChoice.innerHTML=`<img src="rock-paper-scissors-icon-3.jpg" width="100" height="100" alt="Rock">`;
        computerChoice.setAttribute("class","anim-computer");
        }else if (randomItem ==="Paper") {
        computerChoice.innerHTML=`<img src="rock-paper-scissors-icon-2.jpg" width="100" height="100" alt="Paper">`;
        computerChoice.setAttribute("class","anim-computer");
        }else if (randomItem ==="Scissors") {
        computerChoice.innerHTML=`<img src="rock-paper-scissors-icon-4.jpg" width="100" height="100" alt="Scissors">`;    
        computerChoice.setAttribute("class","anim-computer");
        }
        if(user ==="Rock"){
            playerChoice.innerHTML=`<img src="rock-paper-scissors-icon-3.jpg" width="100" height="100" alt="Rock">`;
            playerChoice.setAttribute("class","anim-player");
        }else if (user ==="Paper") {
            playerChoice.innerHTML=`<img src="rock-paper-scissors-icon-2.jpg" width="100" height="100" alt="Paper">`;
            playerChoice.setAttribute("class","anim-player");
        }else if (user ==="Scissors") {
            playerChoice.innerHTML=`<img src="rock-paper-scissors-icon-4.jpg" width="100" height="100" alt="Scissors">`;    
            playerChoice.setAttribute("class","anim-player");
        }

     
    // let displayResult=document.getElementById("display-result").children;
    // let userOutput=displayResult[0].innerHTML=`User Chose: ${user}`;
    // let computerOutput=displayResult[1].innerHTML=`Computer Chose: ${randomItem}`;
    
   /* let output=document.getElementById("winner");
    let i=Number(score[1].textContent);
    let j=Number(score[3].textContent);
    if (randomItem===user) { 
        return output.innerHTML=`draw, you both choose ${randomItem}`;
        }else if (randomItem==="Rock" && user ==="Scissors") {
            j=j+1;
            score[3].textContent=j;
            if(j===5){
                score[1].textContent=0;
                score[3].textContent=0;
                return output.textContent=`You Lost`;
            }
            return output.innerHTML=`You Lose! ${randomItem} beats ${user}`;

        }else if (randomItem==="Rock" && user ==="Paper") { 
            i=i+1;
            score[1].textContent=i;
            if(i===5){
                score[1].textContent=0;
                score[3].textContent=0;
                return output.textContent=`You Won`;
            }
            return output.innerHTML=`You Win! ${user} beats ${randomItem}`;

        }else if (randomItem==="Paper" && user ==="Rock") {
            j=j+1;
            score[3].textContent=j;
            if(j===5){
                score[1].textContent=0;
                score[3].textContent=0;
                return output.textContent=`You Lost`;
            }
            return output.innerHTML=`You lose! ${randomItem} beats ${user}`;

        }else if (randomItem==="Paper" && user ==="Scissors") { 
            i=i+1;
            score[1].textContent=i;
            if(i===5){
                score[1].textContent=0;
                score[3].textContent=0;
                return output.textContent=`You Won`;
            }
            return output.innerHTML=`You Win! ${user} beats ${randomItem}`;

        }else if (randomItem==="Scissors" && user ==="Rock") { 
            i=i+1;
            score[1].textContent=i;
            if(i===5){
                score[1].textContent=0;
                score[3].textContent=0;
                return output.textContent=`You Won`;
            }
            return output.innerHTML=`You Win! ${user} beats ${randomItem}`;

        }else if (randomItem==="Scissors" && user ==="Paper") {
            j=j+1;
            score[3].textContent=j; 
            if(j===5){
                score[1].textContent=0;
                score[3].textContent=0;
                return output.textContent=`You Lost`;
            }
            return output.innerHTML=`You lose! ${randomItem} beats ${user}`;
      } */
    }