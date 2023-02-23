/* eslint-disable no-return-assign */
export const useFirstLetterToCapital = (str: string): string =>
  firstLetterToCapital(str);

export const useAllLetterToCapital = (srt: string): string => {
  const newSrt = srt.split(' ').map(txt => firstLetterToCapital(txt));
  let txtReturn = '';
  newSrt.forEach(txt => (txtReturn += `${txt} `));
  return txtReturn.trim();
};

const firstLetterToCapital = (str: string): string =>
  typeof str === 'string'
    ? `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
    : str;
