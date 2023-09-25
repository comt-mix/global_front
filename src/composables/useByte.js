export const useByte = () => {
  const getByteLength = (str) => {
    const encoder = new TextEncoder("utf-8");
    const bytes = encoder.encode(str);
    return bytes.length;
  };

  const getLimitedByteText = (inputText, maxByte) => {
    const characters = inputText.split("");
    let validText = "";
    let totalByte = 0;

    for (let i = 0; i < characters.length; i += 1) {
      const character = characters[i];

      const byte = getByteLength(character);

      if (totalByte + byte <= maxByte) {
        totalByte += byte;
        validText += character;
      } else {
        break;
      }
    }

    return validText;
  };

  return { getLimitedByteText, getByteLength };
};
