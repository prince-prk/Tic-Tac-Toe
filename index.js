const player = document.querySelector("#currplayer");
const boxs = document.querySelectorAll(".box");
const newgm = document.querySelector("#newgame");

let answer = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]
];
let curr_player = "X";
let winner = "";
let possility = [
    "","","","","","","","",""
];

newgm.addEventListener('click',()=>{
    boxs.forEach((items)=>{
        items.innerText="";
        items.style.pointerEvents="auto";
        items.classList.remove("green");
    });
    for(let i=0;i<possility.length;i++){
        possility[i]="";
    }
    winner="";
    newgm.style.visibility="hidden";
    player.innerText="Current Player X";
    curr_player="X";
    
});
function swap() {
    if (curr_player === "X") {
        curr_player = "O";
    }
    else
        curr_player = "X";
    player.innerText = 'Current Player ' + curr_player;

}

function draw(){
    let count=0;
    for(let i=0;i<possility.length;i++){
        if(possility[i]!=""){
            count++;
        }
    }
    if(count===possility.length){
        newgm.style.visibility="visible";
        player.innerText="Draw";
        winner="draw";
    }
}



function endgame(){
    boxs.forEach((items)=>{
        items.style.pointerEvents="none";
        newgm.style.visibility="visible";
    });
    curr_player="X";
}

function winn() {
    answer.forEach((items) => {
        if ((possility[items[0]-1] != "" || possility[items[1]-1] != "" || possility[items[2]-1] != "") && (possility[items[0]-1] === possility[items[1]-1] && possility[items[2]-1] === possility[items[1]-1])) {
            winner = possility[items[0]];
            boxs[items[0]-1].classList.add("green");
            boxs[items[1]-1].classList.add("green");
            boxs[items[2]-1].classList.add("green");
            player.innerText = 'Winner - '+ possility[items[2]-1];
            console.log(player.innerText);
            endgame();                                      
            return true;
        }
        return false;
    });
}

if (winner != "") {
    newgm.style.visibility = "visible";
}

boxs.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = curr_player;
            box.style.pointerEvents = "none";
            possility[index]=curr_player;
            draw();
            winn();
            console.log(winner);
            if(player.innerText!="Winner - X" && player.innerText!="Winner - O" && player.innerText!="Draw"){
                console.log("prince");
                
                swap();
            }
        }

    });
});


function initial() {
    newgm.style.visibility = "hidden";
}
