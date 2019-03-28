export function validator(input, inputType) {
    switch (inputType) {
      case 'textOnly' :
        const regTxt = new RegExp(/[a-zəıüöğçşA-ZƏIİÜÖĞÇŞ \s]$/gm);
        return regTxt.test(input);
      case 'digitOnly' :
        const regDig = new RegExp(/\d$/gm);
        return regDig.test(input);
      case 'digitAndText' :
        const regDigAndTxt = new RegExp(/[a-zəıüöğçşA-ZƏIİÜÖĞÇŞ0-9-., \s]$/gm);
        return regDigAndTxt.test(input);
      case 'floor' :
        const regFloor = new RegExp(/[0-9-]$/gm);
        return regFloor.test(input);
      case 'block' :
        const regBlock = new RegExp(/[0-9a-hA-H]$/gm);
        return regBlock.test(input);
      default :
        return null;
    }
  }