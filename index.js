// Code your solution here







function findMatching(array, str) {
  let matches = array.filter(driver => driver.toLowerCase() === str.toLowerCase())
  return matches
}


function fuzzyMatch(array, str) {
  let length = str.length
  let matches = array.filter(driver => driver.slice(0, length).toLowerCase() === str.toLowerCase())
  return matches
}


function matchName(array, str) {
  let matches = array.filter(driver => driver['name'].toLowerCase() === str.toLowerCase())
  return matches
}