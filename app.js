
const yes= document.querySelector("#yes");
const no= document.querySelector("#no");
const message=document.querySelector("#message");
const main=document.querySelector("#main");
let gif=document.querySelector("#gif");

//yes button logic

yes.onclick=()=>{
    message.innerText="Yayyy...!!!!!\nWe are soulmates forever!💖";
    main.style.display="none";
    gif.classList.remove("hidden");
    
    document.body.classList.add("yes-bg");
}

no.onmouseover=()=>{
    no.style.position="absolute";
    
    let x= Math.random()*300;
    let y= Math.random()*300;
    no.style.left=x+"px";
    no.style.top=y+"px";
    
}

