// 1.Da se napisat dve funkcii koi sto ke konvertiraat temperatura od Farenhajtovi vo Celziusovi stepeni i obratno. 
// Originalnata temperatura se prima kako parametar i od funkcijata se vrakja konvertiranata temperatura. 
// Bonus: istoto da se napravi samo so edna funkcija

let celsius = 15
let fahrenheit = 100

function ctof (celsius) {
    let result = ( (celsius * 1.8) + 32 )
    return result
}

let res = ctof(celsius)
console.log(`${celsius}°C converted into Fahrenheit is ${res}°F`)

function ftoc (fahrenheit) {
    let result = ( (fahrenheit - 32) / 1.8 )
    return result
}

let rezultat = ftoc(fahrenheit)
console.log(`${fahrenheit}°F converted into Celsius is ${rezultat}°C`)

// da li ima entities ili moze i vaka da gi pisuvam znacite samo gi kopirav

function zaedno(celsius, fahrenheit) {
    let convertedCelsius = ( (celsius * 1.8) + 32 )
    let convertedFahrenheit = ( (fahrenheit - 32) / 1.8 )
    return `${celsius}°C converted into Fahrenheit is ${convertedCelsius}°F and ${fahrenheit}°F converted into Celsius is ${convertedFahrenheit}°C`
}

let together = zaedno(celsius, fahrenheit)
console.log(together)