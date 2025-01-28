let ox='O';
let boxes=document.querySelectorAll(".box");

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        ox=(ox=='O')?'X':'O';
        box.innerHTML=ox;
        document.body.classList.toggle("red");
        box.disabled=true;
        check();
    });
})

document.querySelector(".reset").addEventListener("click",()=>{
    document.body.classList.remove("red");
    alert("GAME RESET");
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
    })
    document.querySelector(".message").classList.add("hide");
})

let winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const check=()=>{
    for (const win of winner) {
        let val1=boxes[win[0]].innerHTML;
        let val2=boxes[win[1]].innerHTML;
        let val3=boxes[win[2]].innerHTML;
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1==val2&&val2==val3){
                document.querySelector(".message").classList.remove("hide");
                document.querySelector(".message").innerHTML=`Player ${val1} wins`;
                boxes.forEach((box)=>{
                    box.disabled=true;
                })
            }
        }
    }
}