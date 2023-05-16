
function startAnimation(){
    document.querySelector(".logo-box img").classList.add("start-animation");

    setTimeout(()=>{
        document.querySelector(".logo-box img").classList.remove("start-animation");
        setTimeout(startAnimation, 10000);
    },10000);
}

// setTimeout(startAnimation, 10000);
setInterval(startAnimation, 10000);