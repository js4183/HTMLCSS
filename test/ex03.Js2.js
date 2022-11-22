document.querySelector(".like").addEventListener("click",function(){
    document.querySelector("h2>span").innerHTML++;
})
document.querySelector(".dislike").addEventListener("click",function(){
    let like = document.querySelector("h2>span").innerHTML;
    
    if(like>0){
        document.querySelector("h2>span").innerHTML--;
    }
})
document.querySelector(".clear").addEventListener("click",function(){
   document.querySelector("h2>span").innerHTML=0;
    
})