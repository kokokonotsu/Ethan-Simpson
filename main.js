var flipPrompt = document.getElementById('flip-site-prompt');
var mediaMobile = window.matchMedia("(max-width: 600px)");
mediaMobile.addListener(sideNav);
function flipSite(){
    document.getElementById('flip-site-inner').style.transform = 'rotateX(180deg)';
    console.log('I am running');
}

function extendSearch(){
    var searchInput = document.getElementById('searchInput');
    searchInput.classList.toggle('searchHidden');
    searchInput.classList.toggle('searchExtend');
    console.log('I am running');
}
function sideNav(){
    const homeText = document.getElementById('homeText');
    const newsText = document.getElementById('newsText');
    const archiveText = document.getElementById('archiveText');
    const aboutText = document.getElementById('aboutText');
    const contactText = document.getElementById('contactText');
    const homeIcon = document.getElementById('homeIcon');
    const newsIcon = document.getElementById('newsIcon');
    const archiveIcon = document.getElementById('archiveIcon');
    const aboutIcon = document.getElementById('aboutIcon');
    const contactIcon = document.getElementById('contactIcon');
    if(mediaMobile.matches){
    homeText.classList.toggle('invisible');
    newsText.classList.toggle('invisible');
    archiveText.classList.toggle('invisible');
    aboutText.classList.toggle('invisible');
    contactText.classList.toggle('invisible');
    homeIcon.classList.toggle('invisible');
    newsIcon.classList.toggle('invisible');
    archiveIcon.classList.toggle('invisible');
    aboutIcon.classList.toggle('invisible');
    contactIcon.classList.toggle('invisible');
    console.log("I am running");
    } else {
    homeText.classList.toggle('invisible');
    newsText.classList.toggle('invisible');
    archiveText.classList.toggle('invisible');
    aboutText.classList.toggle('invisible');
    contactText.classList.toggle('invisible');
    homeIcon.classList.toggle('invisible');
    newsIcon.classList.toggle('invisible');
    archiveIcon.classList.toggle('invisible');
    aboutIcon.classList.toggle('invisible');
    contactIcon.classList.toggle('invisible');
    }
    
}
