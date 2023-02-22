/* eslint-disable no-return-assign */
export const useFirstLetterToCapital = str =>
  typeof str === 'string' ? `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}` : str

export const useAllLetterToCapital = srt => {
  const newSrt = srt.split(' ').map(txt => useFirstLetterToCapital(txt))
  let txtReturn = ''
  newSrt.forEach(txt => (txtReturn += `${txt} `))
  return txtReturn.trim()
}
