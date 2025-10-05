  let boxs =document.querySelectorAll(".box") ;
  let reset =document.querySelector("#reset");
  let winner =document.querySelector("#winner");
  let msgcontainer =document.querySelector(".msg-container");
  let newgame =document.querySelector("#newGame");
  let turno=true;

  const winPatterns = [ 
       [0,1,2],
       [0,3,6],
       [0,4,8],
       [1,4,7],
       [2,5,8],
       [2,4,6],
       [3,4,5],
       [6,7,8],

  ];

  const disableboxs =()=>{
  boxs.forEach((box)=>{
    box.disabled = true ;
  });
  };
 const enableboxs =()=>{
  boxs.forEach((box)=>{
    box.disabled = false ;
    box.innerText="";
  });
  };
   
  const resetGame =()=>{
    turno=true;
    enableboxs ();
    msgcontainer.classList.add("hide");
  }
    
  
  boxs.forEach((box) => {
    
  box.addEventListener("click",()=>{
    console.log("button was clicked");
    if(turno === true ){
      box.innerText = "O";
      turno = false ;
    }else{
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkWinner ();
  })

  })

  const showWinner = (win)=>{
     winner.innerText=`CONGRATULATIONS WINNER IS ${win} !`;
     msgcontainer.classList.remove("hide");
     disableboxs ();
  }

  const checkWinner = ()=>{
    let isDraw = true ;
  for (pattern of winPatterns){

    let posval1 = boxs[pattern[0]].innerText;
    let posval2 = boxs[pattern[1]].innerText;
    let posval3 = boxs[pattern[2]].innerText;

    if(posval1 !== "" && posval2 !=="" && posval3 !==""){

     if(posval1 === posval2 && posval2 === posval3 ){
        console.log("WINNER",posval1);
        showWinner (posval1);
     }
    }
    if(posval1 =="" ||posval2 ==""||  posval3=="" ){
       isDraw = false;
    }

   }
   if(isDraw){
      winner.innerText="MATCH IS DRAW !";
      msgcontainer.classList.remove("hide");
   }
}
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);