import sjcl from 'sjcl';

function createEntropy() {
  var randomNumbers = new Uint8Array(16);
  // return new Uint8Array([
  //   100, 37, 248, 238, 132, 134, 46, 140, 30, 88, 109, 9, 211, 176, 91, 40, 10,
  // ]);

  return crypto.getRandomValues(randomNumbers);
}

function getSHA256OfEntropy(entropy: Uint8Array) {
  const array = Array.from(entropy);
  const code = sjcl.hash.sha256.hash(array);

  const newEntropy = new Uint8Array(17);

  for (var i = 0; i < entropy.length; i++) {
    newEntropy[i] = entropy[i];
  }

  const newCode = Uint32Array.from(code);
  const newVal = Uint8Array.from([newCode[0] >> 28]);

  const correctVal = Uint8Array.from([newVal[0] << 4]);

  newEntropy[16] = correctVal[0];

  return newEntropy;
}

function get11Words(entropy: Uint8Array) {
  var words = [];

  //push 11 bits to a Uint16Array and get the value
  for (var i = 0; i < 12; i++) {
    let offset = i * 11;
    let byteOffset = Math.floor(offset / 8);
    let bitOffset = (offset - byteOffset * 8) % 8;
    let toLeft = 3 + bitOffset;
    // console.log('Bit offset: ', bitOffset, ' toLeft: ', toLeft);

    let writtenVal = new Uint16Array([0x00]);
    let toWriteVal = new Uint16Array([0x00]);
    let mask = new Uint16Array([0x00]);

    mask[0] = 0xff >> bitOffset;
    toWriteVal[0] = entropy[byteOffset] & mask[0];
    toWriteVal[0] <<= toLeft;

    writtenVal[0] |= toWriteVal[0];
    // console.log(
    //   'WrittenVal: ',
    //   writtenVal[0].toString(2),
    //   ' toWriteVal: ',
    //   toWriteVal[0].toString(2)
    // );

    while (toLeft >= 8) {
      byteOffset++;
      toLeft -= 8;
      toWriteVal[0] = entropy[byteOffset];
      writtenVal[0] |= toWriteVal[0];
    }

    if (toLeft < 8) {
      byteOffset++;
      mask[0] = 0xff << (8 - toLeft);
      toWriteVal[0] = entropy[byteOffset] & mask[0];
      toWriteVal[0] >>= 8 - toLeft;
      writtenVal[0] |= toWriteVal[0];
    }

    words.push(writtenVal[0]);
    // console.log('Final word: ', writtenVal[0].toString(2));
  }

  return words;
}

export { createEntropy, getSHA256OfEntropy, get11Words };
