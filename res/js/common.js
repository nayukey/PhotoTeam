/**
 * Created by Nayuki on 2016/1/11.
 */

var sreenHeight;
var containDom,galDom,loadDom,myMusic;
var imgLi = [];
var touchStartPoint = {
    x:0,
    y:0
};
var initialCount = 0;

window.addEventListener("load",handleLoaded,false);
window.addEventListener("touchstart",handleTouchStart,false);

function handleLoaded(){
    sreenHeight = window.innerHeight;

    console.log(sreenHeight);

    containDom = document.getElementById("container");
    galDom = document.getElementById("gal");
    loadDom = document.getElementById("loading");
    myMusic = document.getElementById("myMusic");
    imgLi = document.getElementsByClassName("imgLi")

    containDom.style.height = sreenHeight + "px";
    galDom.style.height = sreenHeight + "px";

    for(var i=0;i < imgLi.length;i++){
        imgLi[i].style.height = sreenHeight + 'px';
        imgLi[i].style.top = i * sreenHeight + 'px';
    }
}

function handleTouchStart(e){
    touchStartPoint.x = e.touches[0].clientX;
    touchStartPoint.y = e.touches[0].clientY;
    window.addEventListener("touchmove",handleTouchMove,false);
    window.addEventListener("touchend",handleTouchEnd,false);
}

function handleTouchMove(e){
    console.log(e.touches[0].clientY);
    if(e.touches[0].clientY - touchStartPoint.y >= 8){
        //top view
        console.log("top" + initialCount);
        if(initialCount > 0){
            for(var i = 0;i < imgLi.length;i++){
                imgLi[i].style.top = parseInt(imgLi[i].style.top) + sreenHeight + "px";
            }
            initialCount --;
        }
        handleTouchEnd();
    }else if(e.touches[0].clientY - touchStartPoint.y <= -8){
        //down view
        console.log("down" + initialCount);
        if(initialCount < imgLi.length - 1){
            for(var i = 0;i < imgLi.length;i++){
                imgLi[i].style.top = parseInt(imgLi[i].style.top) - sreenHeight + "px";
            }
            initialCount++;
        }
        handleTouchEnd();
    }else{

    }
}

function handleTouchEnd(){
    window.removeEventListener("touchmove",handleTouchMove,false);
    window.removeEventListener("touchend",handleTouchEnd,false);
}