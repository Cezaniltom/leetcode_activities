// Create a function that receives a string and returns it inverted.

function reverseString(str) {
    const reverse = str.split('').reverse().join('')

    console.log(reverse)
}

reverseString('Qualquer coisa')
