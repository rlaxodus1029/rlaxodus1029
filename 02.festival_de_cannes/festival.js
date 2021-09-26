


const nav = document.querySelector('.nav');
const year = nav.querySelectorAll('li');
const movieName = document.querySelectorAll('.movie-name');

const main = document.querySelector('main');
const ul = main.querySelector('ul');
const movieList = ul.querySelectorAll('a');


year[0].addEventListener('click', function () {
    for (var i = 0; i < movieName.length; i++) {
        movieList[i].cloneNode(true);
        movieName[i].parentElement.parentElement.remove();
        ul.appendChild(movieList[i]);

    }
})

year[1].addEventListener('click', function () {

    for (var i = 0; i < movieName.length; i++) {
        movieList[i].cloneNode(true);
        movieName[i].parentElement.parentElement.remove();
        ul.appendChild(movieList[i]);
        if (movieName[i].innerText.indexOf('2019') == -1) {
            movieName[i].parentElement.parentElement.remove();
        }
    }

})

year[2].addEventListener('click', function () {
    for (var i = 0; i < movieName.length; i++) {
        movieList[i].cloneNode(true);
        movieName[i].parentElement.parentElement.remove();
        ul.appendChild(movieList[i]);
        if (movieName[i].innerText.indexOf('2018') == -1) {
            movieName[i].parentElement.parentElement.remove();
        }
    }

})

year[3].addEventListener('click', function () {
    for (var i = 0; i < movieName.length; i++) {
        movieList[i].cloneNode(true);
        movieName[i].parentElement.parentElement.remove();
        ul.appendChild(movieList[i]);
        if (movieName[i].innerText.indexOf('2017') == -1) {
            movieName[i].parentElement.parentElement.remove();
        }
    }

})

year[4].addEventListener('click', function () {
    for (var i = 0; i < movieName.length; i++) {
        movieList[i].cloneNode(true);
        movieName[i].parentElement.parentElement.remove();
        ul.appendChild(movieList[i]);
        if (movieName[i].innerText.indexOf('2016') == -1) {
            movieName[i].parentElement.parentElement.remove();
        }
    }

})
year[5].addEventListener('click', function () {
    for (var i = 0; i < movieName.length; i++) {
        movieList[i].cloneNode(true);
        movieName[i].parentElement.parentElement.remove();
        ul.appendChild(movieList[i]);
        if (movieName[i].innerText.indexOf('2015') == -1) {
            movieName[i].parentElement.parentElement.remove();
        }
    }

})

// 클릭시 연도별 영화 바뀜
const img = document.querySelectorAll('img');
