/**
 * decompose array with sorted alphabetical subarrays
 * @param [] array to sort
 * @return alphabet array
 */
const getAlphabetArray = arrayItems => {
  const lettersString = '#abcdefghijklmnopqrstuvwxyz'

  // conversion to array
  const lettersArray = [...lettersString]

  let alphabetArray = {
    '#': [{}],
    A: [{}],
    B: [{}],
    C: [{}],
    D: [{}],
    E: [{}],
    F: [{}],
    G: [{}],
    H: [{}],
    I: [{}],
    J: [{}],
    K: [{}],
    L: [{}],
    M: [{}],
    N: [{}],
    O: [{}],
    P: [{}],
    Q: [{}],
    R: [{}],
    S: [{}],
    T: [{}],
    U: [{}],
    V: [{}],
    W: [{}],
    X: [{}],
    Y: [{}],
    Z: [{}],
  }

  // for each letters add elements on object of concerned => string should begin by upper or lower case
  lettersArray.forEach(letter => {
    //check if first letter is integer and add it to '#' letter
    if (letter === '#') {
      const arrayFilteredOnLetter = arrayItems.filter(contact =>
        Number.isInteger(parseInt(contact.first_name.charAt(0))),
      )

      // only add element if filtered letter contains elements
      if (arrayFilteredOnLetter.length > 0) {
        alphabetArray['#'] = arrayFilteredOnLetter
      }
    } else {
      const arrayFilteredOnLetter = arrayItems.filter(
        contact =>
          contact.first_name.charAt(0) === letter.toUpperCase() ||
          contact.first_name.charAt(0) === letter.toLowerCase(),
      )

      // only add element if filtered letter contains elements
      if (arrayFilteredOnLetter.length > 0) {
        alphabetArray[letter.toUpperCase()] = arrayFilteredOnLetter
      }
    }
  })

  return alphabetArray
}

export default getAlphabetArray
