const text = document.querySelector('.typing-text p');
const textContent = text.innerHTML;
text.innerHTML = '';

let index = 0;
const typeTimer = setInterval(() => {
  if (index < textContent.length) {
    text.innerHTML += textContent.charAt(index);
    index++;
  } else {
    clearInterval(typeTimer);
  }
}, 50);