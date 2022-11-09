import sjcl from 'sjcl';

function createEntropy() {
  var randomNumbers = new Uint8Array(16);
  // return new Uint8Array([
  //   100, 37, 248, 238, 132, 134, 46, 140, 30, 88, 109, 9, 211, 176, 91, 40, 10,
  // ]);

  return crypto.getRandomValues(randomNumbers);
}

function makeCorrect(val: any, val1: any) {
  var newNum = new Uint16Array(1);
  newNum[0] = val;

  newNum[0] = newNum[0] << 3;
  newNum[0] = newNum[0] | ((val1 & 224) >> 5);

  return newNum[0];
}

function getSHA256OfEntropy(entropy: Uint8Array) {
  const array = Array.from(entropy);
  const code = sjcl.hash.sha256.hash(array);

  const newEntropy = new Uint8Array(17);

  for (var i = 0; i < entropy.length; i++) {
    newEntropy[i] = entropy[i];
  }

  // newEntropy[16] = code[0] & 0x0000000f; //first 4 bits little endian

  const newCode = Uint32Array.from(code);
  // const negative = (newCode[0] & 0xffffffff) >> 28 < 0;
  const newVal = Uint8Array.from([newCode[0] >> 28]);

  //if newVal is negative remove the first 4 bits(1s) and push the bits left by 4

  const correctVal = Uint8Array.from([newVal[0] << 4]);

  newEntropy[16] = correctVal[0];

  // console.log(
  //   'New entopy\n',
  //   newEntropy,
  //   ' Code[0]: ',
  //   code[0].toString(2),
  //   ' NewEntropy[16]: ',
  //   newEntropy[16].toString(2),
  //   ' New Code[0]: ',
  //   newCode[0].toString(2),
  //   // ' New Value: ',
  //   // newVal[0].toString(2),
  //   ' Correct: ',
  //   correctVal[0].toString(2)
  // );

  return newEntropy;
}

function get11Words(entropy: Uint8Array) {
  var words = new Uint16Array();

  //push 11 bits to a Uint16Array and get the value

  //get 12 words
  for (var i = 0; i < 12; i++) {}

  console.log(
    'New Number: ',
    makeCorrect(entropy[0], entropy[1]).toString(2),
    '\nEntropy 0: ',
    entropy[0].toString(2),
    '\nEntropy 1: ',
    entropy[1].toString(2),
    '\n Entropy Size: ',
    entropy.length
  );

  /**
   *
   * (1111 1111) ([111]1 1111)
   * (f    f)    (0    ff~7)
   *
   * (111[1 1111]) ([1111 11]11)
   * (f    f!7)
   *
   */

  // return words;
}

export { createEntropy, getSHA256OfEntropy, get11Words };
