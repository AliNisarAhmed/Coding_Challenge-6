// **Question 3**: Write a function that converts HEX to RGB. Then Make that function autodect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.

function convertColor(str) {

  function convertToDeci(hex) {  // takes a 2 digit hexadecimal number and coverts to 2 digit decimal
    let deci = 0;
    for(let i = 0; i < hex.length; i++) {
      deci += Math.pow(16, hex.length - 1 - i) * hexTable[hex[i]];   //starts at index 0 and gives respective power of 16 to each char of input, using hexTable to fetch values 
    }
    return deci;
  }

  function convertToHexa(str) {
    let deci = Number(str);

    let quotient = Math.floor(deci / 16);  //the first digit of hexa
    quotient = Object.keys(hexTable).find(key => hexTable[key] === quotient )  //using hextable to find corresponding hexa number
    let remainder = deci % 16;  // the second digit of hexa
    remainder = Object.keys(hexTable).find(key => hexTable[key] === remainder);
    
    return `${quotient}${remainder}`
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

  // START HERE

  const hexRegex = /#(\w\w)(\w\w)(\w\w)/;

  const rgbRegex = /^rgb\((\w+), (\w+), (\w+)\)/;

  if(hexRegex.test(str)) {
    console.log('Input Color: ', str);

    let temp = str.toUpperCase();  //convert input string to UPPERCASE to match hexTable

    let [sym, color1, color2, color3] = temp.match(hexRegex);  // sym = symbol = #
    
    return `rgb(${convertToDeci(color1)}, ${convertToDeci(color2)}, ${convertToDeci(color3)})`;

  } else if (rgbRegex.test(str)) {
    console.log('Input Color: ', str);
    
    let [sym, color1, color2, color3] = str.match(rgbRegex); //sym = symbol = rgb

    return `#${convertToHexa(color1)}${convertToHexa(color2)}${convertToHexa(color3)}`;
  } else {
    console.error('Invalid color input');
  }
}

// TEST Cases

console.log('\nQuestion 3: Convert Colors');

console.log('Test Case # 1')

console.log('Answer: ', convertColor("#0f2345"));  //return rgb(15, 35, 69)

console.log('Test Case # 2') 

console.log('Answer: ', convertColor("rgb(15, 35, 69)"));
