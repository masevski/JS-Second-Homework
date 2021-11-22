// 3.Da se napise funkcija koja sto kako parametar prima recenica. 
// Funkcijata treba da go najde i da go vrati najdolgiot zbor vo recenicata

function longestWord (word) {
    let niza = word.split(' ')
    let max = 0
    for (let i = 0; i < niza.length; i++) {
        if (niza[i].length > max) {
            max = niza[i].length
            theWord = niza[i]
        }
    }
    return theWord
}

let result = longestWord('Please email us with details if you can help.')
console.log(`Najdolgiot zbor vo ovaa recenica e ${theWord}`)
