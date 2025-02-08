let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".btn");
let winner_msg = document.querySelector(".winner_msg");
let winner_container = document.querySelector(".winner_container");
let newgame_btn = document.querySelector(".newgame_btn");
let reset_btn = document.querySelector(".reset_btn");

let turnO =true; 

const winning_Patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
          if(turnO){
            box.innerHTML="O";
            turnO=false;
          }
          else{
            box.innerText="X";
            turnO=true;
          }
          box.classList.add("disabled-box")
          check_winner();
    })
})

const check_winner=()=>{
    for(let pattern of winning_Patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                  winner_msg.innerText=`Congratulations !! , Winner is ${pos3}`;
                  winner_container.classList.remove("hide");
                  boxes.forEach((box)=>{
                  box.classList.add("disabled-box");
                 }
              )
            }
        }
    }
}


function resetGame(){
    winner_container.classList.add("hide");
    turnO =true; 
    boxes.forEach((box)=>{
    box.classList.remove("disabled-box");
    box.innerText="";
      }
    )
}

newgame_btn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);