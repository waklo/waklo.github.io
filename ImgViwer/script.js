// kép objektum definiálása
let data = [{
    photo: 'images/animal-4855514_1280.jpg',
    title: 'Ne nyeld le a békát!',
    description: 'Elsősorban azért ne, mert ezek a színes békák mérgezők!'
},
{
    photo: 'images/cafe-3537801_1280.jpg',
    title: 'Kávézók',
    description: 'Valahol, ahol nem én szoktam kávézni.'
},
{
    photo: './images/fantasy-2049567_1280.jpg',
    title: 'Lepkék',
    description: 'A boldogság kék lepkéi. Gombáznak... ezért boldogok.'
},
{
    photo: 'images/houses-3938335_1280.jpg',
    title: 'Házak',
    description: 'Szép színesek, és a vízparton állnak. Lehet az ablakból horgászni.'
},
{
    photo: 'images/polynesia-3021072_1280.jpg',
    title: 'Tropical',
    description: 'Ide nem megyek idén nyaralni.'
},
{
    photo: 'images/star-wars-2897280_1280.jpg',
    title: 'TIE fighter',
    description: 'Már nem benzinüzemű repülő szerkezet.'
},
{
    photo: 'images/turtle-863336_1280.jpg',
    title: 'Teknős',
    description: 'Egy ilyen, csak sokkal nagyobb hordja a hátán a földet.'
},
{
    photo: 'images/napraforgo.jpg',
    title: 'Szotyi',
    description: 'Még hosszú az út innen, hogy egy stadion padlójára köpjék.'
},
{
    photo: 'images/gronlandi-jeghegy.jpg',
    title: 'Jégkocka',
    description: 'Ehhez nincs mindenkinek elég nagy fagyasztója.'
},
{
    photo: 'images/huzsi-a-rogbi-kiraly.jpg',
    title: 'Légy mindig tiszta!',
    description: 'A tisztaság fél egészség. Ő tiszta sár.'
}
];


function loadPhoto(index) {
    $('.thumb.active').toggleClass('active')
    $('#photo').attr('src', data[index].photo)
    $('#title').text(data[index].title)
    $('#description').text(data[index].description)
    $(`[data-num=${index}]`).toggleClass('active')

}

let currentPhoto=0;

// A kicsi képeket tartalmazó div-ek generálása
// mindegyik div-be kerül egy span a megjelenő szövegnek
data.forEach((item, index) => {
    $('.browser').append(`<div class="thumb" data-num="${index}" style="background-image: url('${data[index].photo}');">
    <span class="tiptext">${data[index].title}</span>
    </div>`)
    
})

loadPhoto(currentPhoto);

$('#right').click(function (){
    if (currentPhoto+1 >= data.length) {
        currentPhoto=0;
    } else {
        currentPhoto++;
    }
   
    loadPhoto(currentPhoto)
})

$('#left').click(() => {
    if (currentPhoto-1 < 0) {
        currentPhoto=data.length-1
    } else {
        currentPhoto--
    }
    loadPhoto(currentPhoto)
})

$('.thumb').click((event) => {
    let thmbClicked = $(event.target).attr('data-num')
    currentPhoto = parseInt(thmbClicked)
    
    loadPhoto(currentPhoto)
})