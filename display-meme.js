function printDocument() {
  console.log(document);
}

const ourUrl = window.location.search;
let searchParams = new URLSearchParams(ourUrl);

const topText = searchParams.get("top-text");
const bottomText = searchParams.get("bottom-text");
const url = searchParams.get("url");

const topTextOnPage = document.getElementsByID("top-text");
const bottomTextOnPage = document.getElementsByClassName("bottom-text");

function loadEverything() {
  console.log("loaded correctly?");
  topTextOnPage.innerHTML = `${topText}`;
  bottomTextOnPage.innerHTML = `${bottomText}`;
}
