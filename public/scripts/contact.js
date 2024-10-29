console.log("Yes you are under constact js");
const characterCount = document.getElementById("character-count");

const msgCountTextArea = document.getElementById("message");
msgCountTextArea.addEventListener("input", function () {
    var currentLength = (this.value.length) + 1;
    // characterCount.innerHTML = `${currentLength}/250`

  // Preventing more than 250 characters
  if (currentLength > 250) {
    this.value = this.value.substring(0, 250); // Limit input to 250 characters
    characterCount.innerHTML = `250/250 (You have reached the character limit)`; // Display limit message
} else {
    characterCount.innerHTML = `${currentLength}/250`; // Update the display if under limit
}
});


console.log(msgCountTextArea);