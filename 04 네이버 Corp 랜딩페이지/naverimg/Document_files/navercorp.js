
const imgContainer = document.querySelector('.main__img-container');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const imgs = document.querySelectorAll('.main__img-container img');
const explainContainer = document.querySelector('.main__explain-container');
const imgsExplain = document.querySelectorAll('.main__img-explain');

const currentNumber = document.querySelector('.main__current-number');
const currentLine = document.querySelector('.main__current-line');

let count = 1;

for(var i = 0; i<imgsExplain.length; i++){
imgsExplain[i].style.opacity = "1";
}
imgContainer.style.transform = "translateX(" + (-100) + "vw)";
explainContainer.style.transform = "translateX(" + (-100 * count) + "vw)";


function slideRight() {

    for(var i = 0; i<imgsExplain.length; i++){
        imgsExplain[i].style.opacity = "0";
        imgsExplain[i].style.transition = "none";
        }
        
        if (count >= 6) {
            return;
        }
    
        count++;
        
        currentNumber.innerText = count;
        currentLine.style.width = count * 20 +"%";
        currentLine.style.transition = "width 1s";
    
        if(currentNumber.innerText == "6"){
            currentNumber.innerText = 1;
            currentLine.style.width = "20%";
        }
    
        explainContainer.style.transition = "transform 1s";
        explainContainer.style.transform = "translateX(" + (-100 * count) + "vw)";
    
        imgContainer.style.transition = "transform 1s";
        imgContainer.style.transform = "translateX(" + (-100 * count) + "vw)";
    
}

setInterval(slideRight, 2500);


   
rightButton.addEventListener('click', function(){
    slideRight();
})

leftButton.addEventListener('click', function(){

    
for(var i = 0; i<imgsExplain.length; i++){
    imgsExplain[i].style.opacity = "0";
    imgsExplain[i].style.transition = "none";
    }

    if (count <= 0) {
        return;
    }
    count--;

    currentNumber.innerText = count;
    currentLine.style.width = count * 20 +"%";
    currentLine.style.transition = "width 1s";
    if(currentNumber.innerText == "0"){
        currentNumber.innerText = 5;
        currentLine.style.width = "100%";
    }
    
    explainContainer.style.transition = "transform 1s";
    explainContainer.style.transform = "translateX(" + (-100 * count) + "vw)";

    imgContainer.style.transition = "transform 1s";
    imgContainer.style.transform = "translateX(" + (-100 * count) + "vw)";
    
})

imgContainer.addEventListener("transitionend", function () {
    
for(var i = 0; i<imgsExplain.length; i++){
    imgsExplain[i].style.opacity = "1";
    imgsExplain[i].style.transition = "1s";
    }

    if (imgs[count] == imgs[6]) {
        imgContainer.style.transition = "none";
        explainContainer.style.transition = "none";
        
            count = 1;
        
        imgContainer.style.transform = "translateX(" + (-100 * count) + "vw)";
        explainContainer.style.transform = "translateX(" + (-100 * count) + "vw)";
        
    }
    if (imgs[count] == imgs[0]) {
        imgContainer.style.transition = "none";
        explainContainer.style.transition = "none";

            count = 5;
            
        imgContainer.style.transform = "translateX(" + (-100 * count) + "vw)";
        explainContainer.style.transform = "translateX(" + (-100 * count) + "vw)";
    }
})

//slide 끝 

// const photoLists = document.querySelectorAll('.photo__list li');
// const photos = document.querySelectorAll('.photo__photo');
// const photoExplains = document.querySelectorAll('.photo__explain');

// photoLists[0].addEventListener('mouseover', function(){
//     photos[0].style.cursor = "pointer";
//     photos[0].style.opacity = "0.4";
//     photoExplains[0].
// })

// photoLists[0].addEventListener('mouseout', function(){
//     photos[0].style.opacity = "1";
// })