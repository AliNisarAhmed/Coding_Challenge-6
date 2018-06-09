// **Question 3**: Write a function that converts HEX to RGB. Then Make that function autodect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.

function convertColor(str) {

  function convertToDeci(hex) {
    let deci = 0;
    for(let i = 0; i < hex.length; i++) {
      deci += Math.pow(16, hex.length - 1 - i) * Number(hexTable[hex[i]]);
    }
    return deci;
  }

  function convertToHexa(str) {
    let deci = Number(str);
    let hex = '';
    let quotient = Math.floor(deci / 16);
    let remainder = deci % 16;
    
    if(deci < 16) {
      return 
    }

    return `${quotient}${remainder}`;
  }


  const hexTable = {
    '0' : 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14, 
    F: 15,
  }

  if(/^#/.test(str)) {
    console.log('Input Hex: ', str);
    let hexRegEx = /#(\w\w)(\w\w)(\w\w)/;
    
    let [sym, color1, color2, color3] = str.match(hexRegEx);
    
    return `rgb(${convertToDeci(color1)}, ${convertToDeci(color2)}, ${convertToDeci(color3)})`;

  } else if (/^rgb/) {
    console.log('Input ', str);

    let rgbRegex = /^rgb\((\w+), (\w+), (\w+)\)/;
    
    let [sym, color1, color2, color3] = str.match(rgbRegex);

    return `#${convertToHexa(color1)}${convertToHexa(color2)}${convertToHexa(color3)}`;
  }
}

// TEST Cases

console.log('Question 3: Test Cases');

console.log(convertColor("#0F2345"));  //return rgb(15, 35, 69)

console.log(convertColor("rgb(15, 35, 69)"));