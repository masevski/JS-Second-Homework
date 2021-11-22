// 2. Da se napravi funkcja koja sto kako parametar prima zbor. Funkcijata treba da proveri dali zborot e palindrom 
// (odnapred i odnazad se cita isto)

function palindrome (word) {
    let reverse = word.split("").reverse().join('')
    if (word === reverse) {
        console.log(`Zborot ${word} e palindrom`)
    } else {
        console.log(`Zborot ${word} ne e palindrom`)
    }
}

// probav so return mesto console.log ali nesto ne mi vrakjase ne razbrav zasto, 
// return `Zborot ${word} e palindrom` i dole return `Zborot ${word} ne palindrom`

let result = palindrome('madam')
let result2 = palindrome('test')