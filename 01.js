// Create a function that receives an array of numbers and returns the sum of all even numbers.

function sumPairs(numbers = [1, 2, 3, 4, 5, 6, 7, 8]){
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            sum += numbers[i]
        }
    }
    console.log(sum)
}

sumPairs()