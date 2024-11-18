/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  // Write your code here
  if (typeof newWord !== 'string' || typeof needle !== 'string') {
    throw new Error("...")
  }

  return haystack.replaceAll(new RegExp(needle, 'gi'), (match) => {
    let result = ''
    let transformed = newWord.slice(0, match.length)


    for (let i = 0; i < match.length; i++) {
      const orig = match[i]
      const transform = transformed[i] || ''
      if (orig === orig.toUpperCase()) {
        result += transform.toUpperCase()
      } else {
        result += transform.toLowerCase()
      }
    }

    return result
  })
}