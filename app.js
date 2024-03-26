let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userS = document.querySelector('#user-score');
const userC = document.querySelector('#comp-score');
const genCompChoice = () => {
  const opt = ["rock", "paper", "scissors"];
  let id = Math.floor(Math.random() * 3);
  return opt[id];
};

const drawGame = ()=>{
    msg.innerText = "Match Draw";
    msg.style.backgroundColor = "Blue";
}

const showWinner=(e)=>{
    if(e){
        userScore++;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "Green";
        userS.innerText = userScore;
    }
    else{
        comScore++;
        msg.innerText = "You Loss"
        msg.style.backgroundColor = "red";
        userC.innerText = comScore;
    }
}
const playGame = (c) => {
    const compChoice = genCompChoice();
    if(c===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(c ==='rock'){
           userWin= compChoice ==='paper' ? false : true;
        }else if(c==="paper"){
           userWin =  compChoice === 'scissors'? false: true;
        }else{
            userWin = compChoice === 'rock'? false: true;
        }
        showWinner(userWin);
    }
};
choices.forEach((e) => {
  e.addEventListener("click", () => {
    const id = e.getAttribute("id");
    playGame(id);
  });
});
