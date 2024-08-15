const box2 = document.querySelector('.box2 img');

const updateDetails = (url) => {
    box2.setAttribute("src", url);
};

const loadMeme = () => {
    fetch("https://meme-api.com/gimme/memes")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url);
    });
};

document.addEventListener('DOMContentLoaded', loadMeme);

box2.addEventListener('click', loadMeme);
