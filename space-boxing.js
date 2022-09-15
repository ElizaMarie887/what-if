const prompt = require('prompt-sync')({sigint: true});

let w = Number(prompt("Enter your Earth weight: "))

let p = Number(prompt("Enter Planet number. 1. Venus, 2. Mars, 3. Jupiter, 4. Saturn, 5. Uranus, 6. Neptune: "))

if(p === 1){
    console.log(w * 0.78)
}else if(p === 2){
    console.log(w * 0.39)
}else if(p === 3){
    console.log(w * 2.65)
}else if(p === 4){
    console.log(w * 1.17)
}else if(p === 5){
    console.log(w * 1.05)
}else if(p === 6){
    console.log(w * 1.23)
}