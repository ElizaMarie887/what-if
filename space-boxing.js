const prompt = require('prompt-sync')({sigint: true});

let w = Number(prompt("Enter your Earth weight: "))
console.log("Enter Planet number. 1. Venus, 2. Mars, 3. Jupiter, 4. Saturn, 5. Uranus, 6. Neptune: ")
let p = Number(prompt("> "))

if(p === 1){
    console.log("You picked Venus. Your weight needs to be:")
    console.log(w * 0.78)
}else if(p === 2){
    console.log("You picked Mars. Your weight needs to be:")
    console.log(w * 0.39)
}else if(p === 3){
    console.log("You picked Jupiter. Your weight needs to be:")
    console.log(w * 2.65)
}else if(p === 4){
    console.log("You picked Saturn. Your weight needs to be:")
    console.log(w * 1.17)
}else if(p === 5){
    console.log("You picked Uranus. Your weight needs to be:")
    console.log(w * 1.05)
}else if(p === 6){
    console.log("You picked Neptune. Your weight needs to be: ")
    console.log(w * 1.23)
}