var anime = [
    {
        name : "Доктор Стоун",
        viws : "166 321",
        comments : "164",
        liks : "354",
        age : "12+",
        image : "img/doktorstoun.jpg"
    },

    {
        name : "Моя геройская академия 4 сезон",
        viws : "42 459",
        comments : "23",
        liks : "24",
        age : "14+",
        image : "img/heroacademy.jpg"
    },

    {
        name : "Югио! Дуэльные монстры! Новое",
        viws : "17 321",
        comments : "19",
        liks : "38",
        age : "13+",
        image : "img/ugio.jpg"
    },

    {
        name : "Дорога зверя",
        viws : "12 998",
        comments : "10",
        liks : "21",
        age : "14+",
        image : "img/roadbeast.jpg"
    },

    {
        name : "Несносные пришельцы",
        viws : "76 274",
        comments : "59",
        liks : "284",
        age : "14+",
        image : "img/nesnosnyeprisheltsy.png"
    },

    {
        name : "Фантазия Гранблю 2 сезон",
        viws : "8 949",
        comments : "1",
        liks : "1",
        age : "14+",
        image : "img/granbluefantasy2_1.jpg"
    },

    {
        name : "Психопаспорт 3 сезон",
        viws : "3 618",
        comments : "3",
        liks : "5",
        age : "16+",
        image : "img/psychopass3_1.jpg"
    },

    {
        name : "Шерлок из Кабуки-тё",
        viws : "11 936",
        comments : "3",
        liks : "10",
        age : "14+",
        image : "img/sherlok.jpg"
    }
]

const animeList = document.querySelector('.anime__list');
const animeCarousel = document.querySelector('.all-anime__carousel');
var count = 0;
function createList(a) {
    let list = document.createElement('li');
    let img = document.createElement('img');
    let div = document.createElement('div');
    let divImg = document.createElement('div');
    let name = document.createElement('p');
    let comment = document.createElement('i');
    let likes = document.createElement('i');
    let viws = document.createElement('h4');
     
    let buffer = 0;
    list.classList.add("anime__list__item", "item");

    if (count <= 0) {
        animeList.appendChild(list);
    } else {
        animeCarousel.appendChild(list);
    }
    
    img.classList.add("anime__img");
    img.src = anime[a].image;
    divImg.appendChild(img);
    divImg.classList.add("anime__wrapper");
    list.appendChild(divImg);
    
    viws.textContent = anime[a].viws + " просмотров";
    viws.classList.add("anime__viws");
    div.appendChild(viws);

    comment.textContent = anime[a].comments;
    comment.classList.add("anime__comment", "fas", "fa-comment-dots");
    div.appendChild(comment);

    likes.textContent = anime[a].liks;
    likes.classList.add("anime__like", "fas", "fa-heart");
    div.appendChild(likes);

    div.classList.add("anime__hidden")
    divImg.appendChild(div);
    
    name.classList.add("anime__name");
    name.textContent = anime[a].name;
    list.appendChild(name);
}

for (var key in anime) {
   createList(key); 
}

count++;

for (var key in anime) {
   createList(key); 
}

var donate = [
    {name : "Aybat Duyshokov", money : 10},
    {name : "jonik", money : 10},
    {name : "Данил Теремецкий", money : 7},
    {name : "waifu.keeper", money : 1},
    {name : "Evgeniy Kazakov", money : 2},
    {name : "Ktyria", money : 10},
    {name : "Nyan4tor", money : 1},
    {name : "BlackJack ", money : 3},
    {name : "DranBalt ", money : 2},
    {name : "Aļģirts Janulis", money : 11},
    {name : "Mr.Zoro", money : 2},
    {name : "Kostromitin", money : 1},
    {name : "Dorfun", money : 9},
    {name : "Kegla", money : 4}
]

const listDonate = document.querySelector('.support__patrons__list');
const sorted = donate.sort((a, b) => a.money < b.money ? 1 : -1);

function outDonate(a) {
    let list = document.createElement('li');

    list.classList.add("donaters");
    list.textContent = donate[a].name + " (" + donate[a].money + "$)";
    listDonate.appendChild(list);
}

let counter = 0;

for (var key in sorted) {
    outDonate(key);
    counter++;
    if (counter >= 11) {break;}
}

var videoYoutube = {
    "Nokinal" : {
        url : "img/video.jpg",
        name : "Darwin's Game / аниме Игра Дарвина - КОРОЛЕВСКАЯ БИТВА",
        author: "Nokinal"
    },

    "Мнение Гулливера" : {
        url : "img/video1.jpg",
        name : "Босс школы / Boss in school - крутая корейская манхва",
        author : "Мнение Гулливера"
    },

    "Noks" : {
        url : "img/video2.jpg",
        name : "АНИМЕ ЗИМА 2020 / ANIME WINTER 2020",
        author : "Noks"
    },

    "NC" : {
        url : "img/video3.jpg",
        name : "Plunderer / аниме Грабитель - ФЭНТЕЗИ С ЧИСЛАМИ",
        author : "NC"
    },

    "Dr.Noki" : {
        url : "img/video4.jpg",
        name : "ТОП 5 лучших АНИМЕ в жанре ФАНТАСТИКА в 2019 году",
        author : "Dr.Noki"
    },

    "Noki" : {
        url : "img/video5.jpg",
        name : "Ложные выводы / Kyokou Suiri - СВЕРХЪЕСТЕСТВЕННЫЙ",
        author : "Noki"
    }
}

const youtubeNews = document.querySelector('.youtube__news');

function createVideo (a) {
    let div = document.createElement('div');
    let wrapper = document.createElement('img');
    let title = document.createElement('p');
    let name = document.createElement('p');
    let play = document.createElement('p');
    let list = document.createElement('li');
    
    list.classList.add("col-lg-6", "youtube__news__item");
    youtubeNews.appendChild(list);

    play.classList.add("video__play");
    play.style.background = "url(img/play.svg) no-repeat center center / cover";
    div.appendChild(play);

    name.classList.add("name__video");
    name.textContent = videoYoutube[a].author;
    div.appendChild(name);

    wrapper.src = videoYoutube[a].url;
    wrapper.classList.add("video__wrapper");
    div.appendChild(wrapper);

    div.classList.add("youtube__news__list");
    
    list.appendChild(div);

    title.textContent = videoYoutube[a].name;
    title.classList.add("video__title");
    list.appendChild(title);
}

for (var key in videoYoutube) {
   createVideo(key); 
}

var comment = {
    "comment1" : {
        image : "img/news1.jpg",
        thema : "Восстановление работы сайта и смена домена!",
        time : "21.08.19"
    },

    "comment2" : {
        image : "img/news2.jpg",
        thema : "НАБОР в команду AniMaunt",
        time : "11.08.19"
    },

    "comment3" : {
        image : "img/news3.jpg",
        thema : "AniMaunt Team рвется в бой!",
        time : "04.07.19"
    },

    "comment4" : {
        image : "img/news4.jpg",
        thema : "Стань киберспортсменом!",
        time : "20.05.19"
    },

    "comment5" : {
        image : "img/news5.jpg",
        thema : "Смена плеера на сайте",
        time : "30.04.19"
    },

    "comment6" : {
        image : "img/news6.jpg",
        thema : "Общие правила сайта АниМаунт.Тв",
        time : "07.04.19"
    },

    "comment7" : {
        image : "img/news7.png",
        thema : "Важные аниме новости недели #1",
        time : "17.02.19"
    },

    "comment8" : {
        image : "img/news8.jpg",
        thema : "Премия Crunchyroll's Anime Awards 2018",
        time : "17.02.19"
    }
}

const commentNews = document.querySelector('.comment__news');

function createComment (a) {
    let list = document.createElement('li');
    let div = document.createElement('div');
    let image = document.createElement('img');
    let title = document.createElement('h4');
    let descript = document.createElement('p');
   
    list.classList.add("col-lg-5", "d-flex", "comment__list");
    commentNews.appendChild(list);

    image.src = comment[a].image;
    image.classList.add("comment__icon");
    list.appendChild(image);

    title.textContent = comment[a].thema;
    title.classList.add("comment__title");
    div.appendChild(title);

    descript.textContent = "Статьи и Новости. " + comment[a].time;
    descript.classList.add("comment__description");
    div.appendChild(descript);

    div.classList.add("comment__text");
    list.appendChild(div);
}

for (var key in comment) {
    createComment(key);
}

const topImg = document.querySelector('.top__img');
const listTop = document.querySelector('.top__list');
const sortedTop = anime.sort((a, b) => { a.liks-b.liks});
let counts = 0;

function createTop (a) {
    let list = document.createElement('li');
    let number = document.createElement('span');
    let title = document.createElement('p');
    let image = document.createElement('img');
    let div = document.createElement('div');
    let i = document.createElement('i');
    counts++;

    if (counts == 1){
        image.src = sortedTop[0].image;
        topImg.appendChild(image);

        i.classList.add("top__img__like", "far", "fa-thumbs-up");
        topImg.appendChild(i);

        number.style.background = "#f09a09";
        number.style.color = "#000";
    }
    list.classList.add("top__list__item", "d-flex");
    listTop.appendChild(list);

    number.classList.add("top__list__number");
    number.textContent = counts;
    div.appendChild(number);

    div.classList.add("top__list__number-wrapper");
    list.appendChild(div);

    title.classList.add("top__list__title");
    title.textContent = sortedTop[a].name;
    list.appendChild(title);
}


for (var key in sortedTop) {
    createTop(key);
    if (counts >= 5) {break;}
}