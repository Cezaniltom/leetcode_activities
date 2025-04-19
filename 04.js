// Check if a word is a palindrome (reads the same backwards and forwards).

function ehPalindromo(palavra) {
    const verificar = palavra.toLowerCase().split('').reverse().join('')

    if(verificar === palavra) {
        console.log(`A palavra ${palavra} é palindromo`)
    } else {
        console.log(`A palavra ${palavra} não é palindromo`)
    }
}

ehPalindromo('juarez')