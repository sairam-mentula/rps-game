let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const refresh = document.querySelector("#newgame");


const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};
const showwinner = (userrwin, userchoice,compchoice) =>{
  if (userrwin) {
    userscore++;
    userscorepara.innerText = userscore;
    console.log("you Won!")
    msg.innerText = `You Won! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
  }
  else {
    console.log("Computer won!")
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText=`Computer Won! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";

  }
}

const playgame = (userchoice) => {
    console.log("userchoice", userchoice);
    const compchoice = gencompchoice();
    console.log("compchoice", compchoice);
    if (userchoice===compchoice){
        console.log("Game was draw");
        msg.innerText="Match Was Draw";
        msg.style.backgroundcolor = "#081b31";
    } else {
        let userwin = true;
        if(userchoice==="rock"){ 
           userwin = compchoice==="paper"?false:true;
        } else if (userchoice==="paper"){
           userwin= compchoice==="scissors"?false:true;
        }
        else {
             userwin = compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
const userchoice = choice.getAttribute("id");
   
   playgame(userchoice);
    });
});
refresh.addEventListener("click",()=>{
    compscore = 0;
    userscore = 0;
    compscorepara.innerText = 0;
    userscorepara.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    

});
