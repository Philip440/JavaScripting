const myButton = document.getElementById('myButton');
const colors = ['#FF69B4', '#00CED1', '#98FB98', '#FFA07A', '#BA55D3']; // Some fun colors!
let clickCount = 0;

myButton.addEventListener('click', function() {
    const newText = `Clicked ${++clickCount} times!`;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    myButton.textContent = newText;
    myButton.style.backgroundColor = randomColor;
    myButton.style.color = 'white'; // Make the text white for better visibility
});
