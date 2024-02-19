let user_score=0;
let comp_score=0;
// console.log("saf")
const choices= document.querySelectorAll(".rock")

const getCompChoice=()=>{
    const options = ["rock", "paper","scissor"]
    const ind = Math.floor(3*Math.random())
    return options[ind];
}

const playgame =(userchoice) =>{
    const compChoice = getCompChoice();
    let x= document.querySelector("#message")
    let comp=document.querySelector("#comp-score")
    let user=document.querySelector("#user-score")
    if(compChoice==userchoice){
         x.innerHTML="Draw,Try again"
         x.style.backgroundColor="violet";
    }else if(userchoice=="paper"){
        if(compChoice=="rock"){
          user_score++;
          x.innerHTML="You Won"
          x.style.backgroundColor="green";
        }else {
            comp_score++;
            x.innerHTML="Lose"
            x.style.backgroundColor="red";
        }
    } 
    else if(userchoice=="rock"){
        if(compChoice=="scissor"){
          user_score++;
          x.innerHTML="You Won"
          x.style.backgroundColor="green";
        }else {
            comp_score++;
            x.innerHTML="Lose"
            x.style.backgroundColor="red";
        }
    } 
    else if(userchoice=="scissor"){
        if(compChoice=="paper"){
          user_score++;
          x.innerHTML="You Won"
          x.style.backgroundColor="green";
        }else {
            comp_score++;
            x.innerHTML="Lose"
            x.style.backgroundColor="red";
        }
    } 
    comp.innerHTML=comp_score;
    user.innerHTML=user_score;
    // console.log(compChoice);
    // console.log("asd")
}
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userchoice=choice.getAttribute("id");
        //  console.log(userchoice)
        playgame(userchoice);
    })
}

)
