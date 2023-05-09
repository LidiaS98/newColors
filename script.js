const btn = document.querySelector('#button1');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function() {
    const newColor = makeRandomColor()

    document.body.style.background = newColor;

    h1.innerText = newColor;
})

function makeRandomColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    if (r < 150 && g < 150 && b < 150 ){
        h1.style.color = "white";
       }
    return `rgb(${r}, ${g}, ${b})`;
};