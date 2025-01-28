const a=async ()=>{
    console.log("starting...");
    let dog=await fetch("https://dog.ceo/api/breeds/image/random");
    let dogpic=await dog.json();
    return dogpic.message;   
}

document.querySelector("button").addEventListener("click",async ()=>{
    console.log("getting image..");
    let url=await a();
    let img=document.createElement("img");
    img.src=url;
    img.setAttribute("height","200px");
    document.querySelector(".photo").append(img);

})


