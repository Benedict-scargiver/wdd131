const windchill = document.querySelector('#windchill');

function calculatewindChill(temp, speed) {
    return (
        13.12 + 
        0.6215 * temp - 
        11.37 * Math.pow(speed, 0.16) + 
        0.3965 * tempC * Math.pow(speed, 0.16)
    ); 
}

let tempC = 27;
let speed = 16;
if (tempC <= 10 && speed > 4.8) {
    windchill.textContent = calculatewindChill(tempC, speed).toFixed(1);
} else {
    windchill.textContent = "N/A";
}
