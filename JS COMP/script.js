function changeColor(squareId){
    const square = document.getElementById(squareId);

    const randomColor = getRandomColor();

    square.style.backgroundColor = randomColor;
}

function getRandomColor(){
    var letters ='0123456789ABCDEF';
    var color= '#';
    for(var i =0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}
function flashColors() {
    const flashes = document.querySelectorAll(".flash"); 

    flashes.forEach(function(element) {
        const randomColorValue = getRandomColor(); 
        element.style.backgroundColor = randomColorValue; 
    });
}
setInterval(flashColors,100);