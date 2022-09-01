let btn=document.querySelectorAll("button");
// btn.forEach((button) => {button.addEventListener("click",playRound)});
let main =document.getElementsByClassName("main"); 

// let score=document.getElementById("score").children;

// function playRound(evt) {
//     let user =evt.target.value;
//     let option =["Rock","Paper","Scissors"];
//     let randomItem = option[Math.floor(Math.random()*option.length)];
     
//     let displayResult=document.getElementById("display-result").children;
//     let userOutput=displayResult[0].innerHTML=`User Chose: ${user}`;
//     let computerOutput=displayResult[1].innerHTML=`Computer Chose: ${randomItem}`;
    
//     let output=document.getElementById("winner");
//     let i=Number(score[1].textContent);
//     let j=Number(score[3].textContent);
//     if (randomItem===user) { 
//         return output.innerHTML=`draw, you both choose ${randomItem}`;
//         }else if (randomItem==="Rock" && user ==="Scissors") {
//             j=j+1;
//             score[3].textContent=j;
//             if(j===5){
//                 score[1].textContent=0;
//                 score[3].textContent=0;
//                 return output.textContent=`You Lost`;
//             }
//             return output.innerHTML=`You Lose! ${randomItem} beats ${user}`;

//         }else if (randomItem==="Rock" && user ==="Paper") { 
//             i=i+1;
//             score[1].textContent=i;
//             if(i===5){
//                 score[1].textContent=0;
//                 score[3].textContent=0;
//                 return output.textContent=`You Won`;
//             }
//             return output.innerHTML=`You Win! ${user} beats ${randomItem}`;

//         }else if (randomItem==="Paper" && user ==="Rock") {
//             j=j+1;
//             score[3].textContent=j;
//             if(j===5){
//                 score[1].textContent=0;
//                 score[3].textContent=0;
//                 return output.textContent=`You Lost`;
//             }
//             return output.innerHTML=`You lose! ${randomItem} beats ${user}`;

//         }else if (randomItem==="Paper" && user ==="Scissors") { 
//             i=i+1;
//             score[1].textContent=i;
//             if(i===5){
//                 score[1].textContent=0;
//                 score[3].textContent=0;
//                 return output.textContent=`You Won`;
//             }
//             return output.innerHTML=`You Win! ${user} beats ${randomItem}`;

//         }else if (randomItem==="Scissors" && user ==="Rock") { 
//             i=i+1;
//             score[1].textContent=i;
//             if(i===5){
//                 score[1].textContent=0;
//                 score[3].textContent=0;
//                 return output.textContent=`You Won`;
//             }
//             return output.innerHTML=`You Win! ${user} beats ${randomItem}`;

//         }else if (randomItem==="Scissors" && user ==="Paper") {
//             j=j+1;
//             score[3].textContent=j; 
//             if(j===5){
//                 score[1].textContent=0;
//                 score[3].textContent=0;
//                 return output.textContent=`You Lost`;
//             }
//             return output.innerHTML=`You lose! ${randomItem} beats ${user}`;
//       } 
//     }