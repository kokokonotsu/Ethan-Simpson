var flipPrompt = document.getElementById('flip-site-prompt');

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