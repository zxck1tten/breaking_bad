import elements from "../elements"

 export const breakify = (str: string): string[] => {

  const length = str.length
  let result: string[] = []

  for (let i = 0; i < length; i++) {
    const firstLetter = str[i].toUpperCase()
    const twoLetters = `${firstLetter}${str[i+1]}`
  
    
    if (elements.includes(twoLetters)) {
      result = [str.slice(0, i), twoLetters, str.slice(i+2, length)]
      break
    }
    
    if (elements.includes(firstLetter)) {
      result = [str.slice(0, i), firstLetter, str.slice(i+1, length)]
      break
    }

  }

  if(!result.length){
    result = [str, '', '']
  }
  console.log(result)
  return result
}
