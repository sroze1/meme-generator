const ourUrl = window.location.search;
let searchParams = new URLSearchParams(ourUrl);

const topText = searchParams.get("top-text");
const bottomText = searchParams.get("bottom-text");
const url = searchParams.get("url");

const topTextOnPage = document.getElementById("top-text");
const bottomTextOnPage = document.getElementById("bottom-text");
const imageUrl = document.querySelector("img");
const memeArea = document.getElementById("meme");

topTextOnPage.innerText = `${topText}`;
bottomTextOnPage.innerText = `${bottomText}`;

memeArea.style.backgroundImage = `url(${url})`;
// imageUrl.src = url;
