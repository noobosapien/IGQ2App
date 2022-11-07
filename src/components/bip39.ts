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

  newEntropy[16] = code[0] & 0x0000000f;

  console.log('New entopy\n', newEntropy);

  return newEntropy;
}

function get11Words(entropy: Uint8Array) {
  var words = [];

  console.log(
    'New Number: ',
    makeCorrect(entropy[0], entropy[1]).toString(2),
    '\nEntropy 0: ',
    entropy[0].toString(2),
    '\nEntropy 1: ',
    entropy[1].toString(2)
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
