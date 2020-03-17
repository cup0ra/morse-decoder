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
   
    let result = []
    
    for (let i = 0; i < expr.length; i += 10) {
        result.push(expr.slice((i), i + 10))
    }
    let b = result.map(s => s.replace(/^0+/, '').replace(/11/g, "-").replace(/10/g, "."));
    let c =b.map(function(el){
        if(el === '**********'){
            return ' ';
        }else {
           return el.replace(el, MORSE_TABLE[el]);
        }
        
    });
    
    return c.join('');
    
}

module.exports = {
    decode
}
