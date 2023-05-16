let button = document.querySelector("#bt");
let quebrou=false;
let contaClique=0;

button.style.background="blue";

button.addEventListener("mouseover",e =>{
    if(quebrou===false)
    button.style.background="green";
});
/*button.addEventListener("mouseleave",retornaAzul);*/
button.addEventListener("mouseout",e =>{
    if(quebrou===false)
    button.style.background="blue" ;
});

button.addEventListener("click",e =>{

    contaClique++; //contaClique=contaClique+1;
    if(contaClique>=10){
    button.style.background="red";
    button.innerHTML="Quebrei";
    quebrou=true;
    }
});

/*function botaoVerde(){
    button.style.background="green";
}
function retornaAzul(){
    button.style.background="blue";
}
function quebrouVermelho(){
    button.style.background="red";
    
}*/