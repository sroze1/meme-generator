const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const errorMessage = document.getElementById("error-message");
const form = document.getElementById("meme-form");
const url = document.getElementById("url");
// console.log(topText.value);
// console.log(topText);
form.addEventListener("submit", (event) => {
  if (topText.value.length > 50 || bottomText.value.length > 50) {
    errorMessage.innerText = "please enter text of less than 50 characters";
    event.preventDefault();
  }
  if (
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      url.value
    ) === false
  ) {
    errorMessage.innerText = "please enter a valid URL";
    event.preventDefault();
  }
});
