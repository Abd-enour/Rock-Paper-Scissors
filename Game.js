function playRound() {
let option =["Rock","Paper","Scissors"];

let randomItem = option[Math.floor(Math.random()*option.length)];

let userIput= document.getElementById("user-input").value; 
document.getElementById("text").innerHTML=`Computer chose ${randomItem}`;

let output= document.getElementById("result");
    if (randomItem===userIput) { 
    return output.innerHTML=`draw, you both choose ${randomItem}`;
    }else if (randomItem==="Rock" && userIput ==="Scissors") {
        return output.innerHTML=`You Lose! ${randomItem} beats ${userIput}`;
    }else if (randomItem==="Rock" && userIput ==="Paper") {
        return output.innerHTML=`You Win! ${userIput} beats ${randomItem}`;
    }
    else if (randomItem==="Paper" && userIput ==="Rock") {
        return output.innerHTML=`You lose! ${randomItem} beats ${userIput}`;
    }else if (randomItem==="Paper" && userIput ==="Scissors") {
        return output.innerHTML=`You Win! ${userIput} beats ${randomItem}`;
    }
    else if (randomItem==="Scissors" && userIput ==="Rock") {
        return output.innerHTML=`You Win! ${userIput} beats ${randomItem}`;
    }else if (randomItem==="Scissors" && userIput ==="Paper") {
        return output.innerHTML=`You lose! ${randomItem} beats ${userIput}`;
    }
}