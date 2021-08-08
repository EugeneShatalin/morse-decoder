const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = '';
  for(let i = 0; i < expr.length / 10; i++) {
    str = expr.slice((i * 10), (i * 10 + 10));

    if(str == '**********') {
      result += ' ';
      continue;
    }

    let charStr = '';
    let meaning = '';

    for(let k = 0; k < str.length / 2; k++) {
      meaning = str.slice((k * 2), (k * 2 + 2));

      if(meaning == '10') {
        charStr += '.';
      }
      if(meaning == '11') {
        charStr += '-';
      }
    }
    result += MORSE_TABLE[charStr];
  }
  return result;
}

module.exports = {
    decode
}