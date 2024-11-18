/**
 * @param {array<string>} array An array containing words and sentences
 * @return {array<string>} An array with all words isolated, and with empty strings removed
 */
export function splitAllStringsByWordAndFilterEmptyOnes(array) {
  // Write your code here

  let contents = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 1) {
      const words = array[i].split(/\s+/).filter(word => word !== '');
      contents.push(words)
    }
  }
  let conts = []
  for (let a = 0; a < contents.length; a++) {
    for (let b = 0; b < contents[a].length; b++) {
      const cont = contents[a][b].split(' ')
      conts.push(cont)
    }
  }
  return conts.flat()

}

/**
 * @param {*[]} array1
 * @param {*[]} array2
 * @return {*[]} return an array containing all elements from the two given arrays
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export function concatenateArrays(array1, array2) {
  // Write your code here
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i])
  }
  return array1
}

/**
 * @param {array} array an array of arbitrary elements
 * @param {number} index where you need to replace the element in the array
 * @param {...*} newElements
 * @return {array<*>} A new array, sorted, **the original array should not be modified**
 */
export function replaceElementsInArrayAtAGivenPlace(
  array,
  index,
  ...newElements
) {
  // Write your code here
  console.log(array)
  const number = array[index]
  const arrays = [array.slice(0, index), newElements, array.slice(index + newElements.length)]

  return (arrays.flat())
}