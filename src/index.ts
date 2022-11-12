/**
 * The program is the classic
 * Recurrsion rearange program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-11-08
 */

import promptSync from 'prompt-sync'

/**
 *
 * This is the recurrsion function.
 *
 * @param {string} userWord the user input.
 * @returns {string} the string thats reversed.
 */
function recurrsionString(userWord: string): string {
  if (userWord === '') {
    return userWord
  } else {
    return recurrsionString(userWord.slice(1)) + userWord.slice(0, 1)
  }
}

const prompt = promptSync()

// Asks for the users input
console.log('This program reverses a String!')
const userWord = prompt('Enter your word: ')

// Shows the original word
console.log(`This is the Original Word: ${userWord}`)

// Shows the reversed string word.
console.log(`The reversed word is: ${recurrsionString(userWord)}`)

console.log('\nDone.')
