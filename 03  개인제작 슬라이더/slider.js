
const horizontalButton = document.querySelector('.horizontal-button');
const verticalButton = document.querySelector('.vertical-button');

const iconsHorizontal = document.querySelector('.icons-horizontal');
const iconsVertical = document.querySelector('.icons-vertical');

let count = 1;


//슬라이드함수
function slideRight() {
    if (count >= 7) {
        return;
    }
    imgList.style.transition = "transform 0.5s";
    count++;
    imgList.style.transform = "translateX(" + (-imgList.clientWidth * count) + "px)";

    for (var i = 0; i < horizontalList.length; i++) {
        horizontalList[i].classList.remove('choice-background');
    }

    if (horizontalList[count - 1] == null) {
        return;
    }
    horizontalList[count - 1].classList.add('choice-background');

}

function slideDown() {
    if (count >= 7) {
        return;
    }
    imgList.style.transition = "transform 0.5s";
    count++;
    imgList.style.transform = "translateY(" + (-imgList.clientHeight * count) + "px)";
    for (var i = 0; i < verticalList.length; i++) {
        verticalList[i].classList.remove('choice-background');
    }
    if (verticalList[count - 1] == null) {
        return;
    }
    verticalList[count - 1].classList.add('choice-background');

}
//수평 정하는 버튼



horizontalButton.addEventListener('click', function () {
    iconsHorizontal.classList.remove('hidden');
    iconsVertical.classList.add('hidden');
    imgList.classList.add('flex');

    //reset auto slide
    horizontalAutoPlay.style.display = "inline";
    horizontalAutoStop.style.display = "none";
    horizontalStop();
    verticalAutoPlay.style.display = "inline";
    verticalAutoStop.style.display = "none";
    verticalStop();

    //reset - horizontal width

    imgRelative.style.width = "1000px";
    imgList.style.width = "1000px";
    iconsHorizontal.style.width = "1000px";
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.width = "1000px";
    }

    imgList.style.transition = "none";
    imgList.style.transform = "translateX(-1000px)";
    //reset - horizontal width

    //reset - horizontal height
    imgRelative.style.height = "400px";
    imgList.style.height = "400px";
    iconsHorizontal.style.height = "400px";
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.height = "400px";
    }
    imgList.style.transform = "translateX(-1000px)";
    //reset - horizontal height

    count = 1;
    for (var i = 0; i < horizontalList.length; i++) {
        horizontalList[i].classList.remove('choice-background');
    }
    horizontalList[0].classList.add('choice-background');
})

//수직 정하는 버튼

verticalButton.addEventListener('click', function () {
    iconsVertical.classList.remove('hidden');
    iconsHorizontal.classList.add('hidden');
    imgList.classList.remove('flex');

    //reset - vertical width 
    horizontalAutoPlay.style.display = "inline";
    horizontalAutoStop.style.display = "none";
    horizontalStop();
    verticalAutoPlay.style.display = "inline";
    verticalAutoStop.style.display = "none";
    verticalStop();

    imgRelative.style.width = "1000px";
    imgList.style.width = "1000px";
    iconsVertical.style.width = "1000px";
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.width = "1000px";
    }

    imgList.style.transition = "none";
    imgList.style.transform = "translateY(-400px)";
    iconsVertical.style.width = "1000px";
    //reset - vertical width

    //reset - vertical height
    imgRelative.style.height = "400px";
    imgList.style.height = "400px";
    iconsVertical.style.height = "400px";
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.height = "400px";
    }
    imgList.style.transform = "translateY(-400px)";
    //reset - vertical height

    count = 1;

    for (var i = 0; i < verticalList.length; i++) {
        verticalList[i].classList.remove('choice-background');
    }
    verticalList[0].classList.add('choice-background');
})

const imgList = document.querySelector('.img-list');
const imgs = document.querySelectorAll('.img-list img')
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

const horizontalList = document.querySelectorAll('.choice-horizontal .fa-circle');
const verticalList = document.querySelectorAll('.choice-vertical .fa-circle');

//기본 디스플레이
imgList.style.transform = "translateX(-1000px)";

// 수평
rightButton.addEventListener('click', function () {

    //reset autoSlide
    horizontalAutoPlay.style.display = "inline";
    horizontalAutoStop.style.display = "none";
    horizontalStop();

    slideRight();

});

leftButton.addEventListener('click', function () {

    //reser autoSlide
    horizontalAutoPlay.style.display = "inline";
    horizontalAutoStop.style.display = "none";
    horizontalStop();


    if (count <= 0) {
        return;
    }
    imgList.style.transition = "transform 0.5s";
    count--;

    imgList.style.transform = "translateX(" + (-imgList.clientWidth * count) + "px)";

    for (var i = 0; i < horizontalList.length; i++) {
        horizontalList[i].classList.remove('choice-background');
    }
    if (horizontalList[count - 1] == null) {
        return;
    }
    horizontalList[count - 1].classList.add('choice-background');
})

// 수직
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')

downButton.addEventListener('click', function () {
    //auto 초기화
    verticalAutoPlay.style.display = "inline";
    verticalAutoStop.style.display = "none";
    verticalStop();

    slideDown();

})

upButton.addEventListener('click', function () {

    //auto 초기화
    verticalAutoPlay.style.display = "inline";
    verticalAutoStop.style.display = "none";
    verticalStop();

    if (count <= 0) {
        return;
    }
    imgList.style.transition = "transform 0.5s";
    count--;
    imgList.style.transform = "translateY(" + (-imgList.clientHeight * count) + "px)";

    for (var i = 0; i < verticalList.length; i++) {
        verticalList[i].classList.remove('choice-background');
    }

    if (verticalList[count - 1] == null) {
        return;
    }
    verticalList[count - 1].classList.add('choice-background');

})

//transition
imgList.addEventListener("transitionend", function () {
    if (imgList.classList.contains('flex')) {
        if (imgs[count] == imgs[7]) {
            imgList.style.transition = "none";
            count = 1;
            imgList.style.transform = "translateX(" + (-imgList.clientWidth * count) + "px)";
            horizontalList[0].classList.add('choice-background');
        }
        if (imgs[count] == imgs[0]) {
            imgList.style.transition = "none";
            count = 6;
            imgList.style.transform = "translateX(" + (-imgList.clientWidth * count) + "px)";
            horizontalList[5].classList.add('choice-background');
        }
    }
    if (imgList.classList.contains('flex') == false) {
        if (imgs[count] == imgs[7]) {
            imgList.style.transition = "none";
            count = 1;
            imgList.style.transform = "translateY(" + (-imgList.clientHeight * count) + "px)";
            verticalList[0].classList.add('choice-background');
        }
        if (imgs[count] == imgs[0]) {
            imgList.style.transition = "none";
            count = 6;
            imgList.style.transform = "translateY(" + (-imgList.clientHeight * count) + "px)";
            verticalList[5].classList.add('choice-background');
        }
    }
})



// 동그라미 클릭시 해당 사진으로 이동 -수평

for (var i = 0; i < horizontalList.length; i++) {
    horizontalList[i].addEventListener('click', function (e) {

        //reser auto slide
        horizontalAutoPlay.style.display = "inline";
        horizontalAutoStop.style.display = "none";
        horizontalStop();

        imgList.style.transition = "transform 0.5s";
        for (var i = 0; i < horizontalList.length; i++) {
            horizontalList[i].classList.remove('choice-background');
        }
        for (var i = 0; i < horizontalList.length; i++) {
            if (e.target == horizontalList[i]) {
                if (widthInput.value != null) {
                    imgList.style.transform = "translateX(" + (-widthInput.value * count) + "px)";
                }
                imgList.style.transform = "translateX(" + (-imgList.clientWidth * (i + 1)) + "px)";
                horizontalList[i].classList.add('choice-background');
                count = i + 1;
            }
        }
    })
}

// 동그라미 클릭시 해당 사진으로 이동 -수직
for (var i = 0; i < verticalList.length; i++) {
    verticalList[i].addEventListener('click', function (e) {

        //auto 초기화
        verticalAutoPlay.style.display = "inline";
        verticalAutoStop.style.display = "none";
        verticalStop();

        imgList.style.transition = "transform 0.5s";
        for (var i = 0; i < verticalList.length; i++) {
            verticalList[i].classList.remove('choice-background');
        }
        for (var i = 0; i < verticalList.length; i++) {
            if (e.target == verticalList[i]) {
                imgList.style.transform = "translateY(" + (-imgList.clientHeight * (i + 1)) + "px)";
                verticalList[i].classList.add('choice-background');
                count = i + 1;
            }
        }
    })
}

// 가로세로 길이 조정
const imgRelative = document.querySelector('.img-relative');
const widthInput = document.querySelector('.width-input')
const widthButton = document.querySelector('.width-button');
const heightInput = document.querySelector('.height-input')
const heightButton = document.querySelector('.height-button');

//가로길이
widthButton.addEventListener('click', function () {

    imgRelative.style.width = widthInput.value + "px";
    imgList.style.width = widthInput.value + "px";
    iconsHorizontal.style.width = widthInput.value + "px";
    iconsVertical.style.width = widthInput.value + "px";

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.width = widthInput.value + "px";
    }
    if (imgList.classList.contains('flex')) {
        imgList.style.transform = "translateX(" + (-imgList.clientWidth * count) + "px)";
    }
    widthInput.value = "";

})

//세로길이
heightButton.addEventListener('click', function () {
    imgRelative.style.height = heightInput.value + "px";
    imgList.style.height = heightInput.value + "px";
    iconsHorizontal.style.height = heightInput.value + "px";
    iconsVertical.style.height = heightInput.value + "px";

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.height = heightInput.value + "px";
    }
    if (imgList.classList.contains('flex') == false) {
        imgList.style.transform = "translateY(" + (-imgList.clientHeight * count) + "px)";
    }
    heightInput.value = "";
})


//자동재생 -가로

const horizontalAutoPlay = document.querySelector('.choice-horizontal .play-button');
const horizontalAutoStop = document.querySelector('.choice-horizontal .stop-button');
const verticalAutoPlay = document.querySelector('.choice-vertical .play-button');
const verticalAutoStop = document.querySelector('.choice-vertical .stop-button');



//자동재생함수 - 가로



function horizontalStart(speed) {

    autoSlide = setInterval(slideRight, speed);
}
function horizontalStop() {
    clearInterval(autoSlide);
}
horizontalStart();
horizontalStop();

horizontalAutoPlay.addEventListener('click', function () {
    horizontalAutoPlay.style.display = "none";
    horizontalAutoStop.style.display = "inline";

    horizontalStart(2000);

    return;
})
horizontalAutoStop.addEventListener('click', function () {
    horizontalAutoPlay.style.display = "inline";
    horizontalAutoStop.style.display = "none";
    horizontalStop();
})


//자동재생함수 - 세로



function verticalStart(speed) {

    autoSlide = setInterval(slideDown, speed);
}
function verticalStop() {
    clearInterval(autoSlide);
}
verticalStart();
verticalStop();

verticalAutoPlay.addEventListener('click', function () {
    verticalAutoPlay.style.display = "none";
    verticalAutoStop.style.display = "inline";
    verticalStart(2000);

    return;
})
verticalAutoStop.addEventListener('click', function () {
    verticalAutoPlay.style.display = "inline";
    verticalAutoStop.style.display = "none";
    verticalStop();
})


//자동 재생 속도 조정 

const speedInput = document.querySelector('.speed-input');
const speedButton = document.querySelector('.speed-button');

speedButton.addEventListener('click', function () {
    if (imgList.classList.contains('flex')) {

        horizontalAutoPlay.style.display = "none";
        horizontalAutoStop.style.display = "inline";
        horizontalStop();

        let horizontalSpeed = speedInput.value * 1000;
        horizontalStart(horizontalSpeed);
        if (horizontalSpeed == "") {
            horizontalAutoPlay.style.display = "inline";
            horizontalAutoStop.style.display = "none";
            horizontalStop();
        }

    }
    if (imgList.classList.contains('flex') == false) {
        verticalAutoPlay.style.display = "none";
        verticalAutoStop.style.display = "inline";
        verticalStop();

        let verticalSpeed = speedInput.value * 1000;
        verticalStart(verticalSpeed);
        if (verticalSpeed == "") {
            verticalAutoPlay.style.display = "inline";
            verticalAutoStop.style.display = "none";
            verticalStop();
        }
    }
    speedInput.value = "";
})
