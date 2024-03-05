// javascript
const input = document.getElementById('input');
const button = document.getElementById('button');
const result = document.getElementById('result');

const randomImageReplies = [
    "images/boy_coding.jpg",
    "images/man_coding.jpg",
    "images/woman_learning_to_code.jpg",
    "images/old_man_coding.jpg"
];

button.addEventListener('click', () => {
   //result.src = randomImageReplies[2];
   result.src = randomImageReplies[Math.floor(Math.random() * randomImageReplies.length)];

});