var flipPrompt = document.getElementById('flip-site-prompt');
var searchInput = document.getElementById('searchInput');

function flipSite(){
    document.getElementById('flip-site-inner').style.transform = 'rotateX(180deg)';
    console.log('I am running');
}

function extendSearch(){
    searchInput.style.width = '2in';
    console.log('I am running');
}