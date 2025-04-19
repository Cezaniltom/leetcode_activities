// Create a function that counts the number of vowels in a string.

function countVowels(text = ['a', 'e', 'i', 'o', 'u']) {
    const phrase = 'I love javascript'
    const standard = phrase.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const vowels = standard
    .toLocaleLowerCase()
    .split('')
    .filter(letter => text.includes(letter))

    console.log(vowels.length)
}

countVowels()