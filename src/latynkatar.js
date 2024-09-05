const pravilyKanvertacyi = {
  "а": "a",
  "э": "e",
  "ы": "y",
  "у": "u",
  "ў": "ŭ",
  "б": "b",
  "в": "v",
  "г": "h",
  "ґ": "g",
  "д": "d",
  "ж": "ž",
  "й": "j",
  "к": "k",
  "м": "m",
  "о": "o",
  "п": "p",
  "р": "r",
  "т": "t",
  "ф": "f",
  "ч": "č",
  "ш": "š",
}

const jotavanyjaLitary = {
  "е": "e",
  "ё": "o",
  "і": "",
  "ю": "u",
  "я": "a",
}

const zycznyjaZTranzitam = [
  "б",
  "в",
  "д",
  "ж",
  "з",
  "й",
  "л",
  "м",
  "н",
  "п",
  "р",
  "с",
  "т",
  "ў",
  "ф",
  "ц",
  "ч",
  "ш",
]

class CurrentLetter {
  constructor(current) {
    this.letter = current;
    this.lower = this.letter.toLowerCase();
    this.isUpper = true;

    if (this.lower == this.letter) {
      this.isUpper = false
    }
  }
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function convert_l(nextLetter, nextNextLetter) {
  nextLetter = nextLetter ? nextLetter.toLowerCase() : undefined;
  nextNextLetter = nextNextLetter ? nextNextLetter.toLowerCase() : undefined;

  let convertedLetter = "";
  switch (true){
    // Калі наступнай ідзе ётаваная літара ці мяккі знак
    case (nextLetter && (nextLetter in jotavanyjaLitary ||  nextLetter == "ь")):
      convertedLetter = "l";
      break;
    // Калі наступная зычная літара мяккая і не г, к, х
    case ((nextLetter && zycznyjaZTranzitam.find((litara) => litara == nextLetter)) &&
     (nextNextLetter && (nextNextLetter in jotavanyjaLitary || nextNextLetter == "ь"))):
      convertedLetter = "l";
      break;
    // Ва ўсіх астатніх выпадках
    default:
      console.log((nextLetter && nextLetter in zycznyjaZTranzitam))
      console.log((nextNextLetter && (nextNextLetter in jotavanyjaLitary || nextNextLetter == "ь")))
      console.log("!", (nextLetter && (nextLetter in jotavanyjaLitary ||  nextLetter == "ь")), (nextLetter && nextLetter in zycznyjaZTranzitam) && (nextNextLetter && (nextNextLetter in jotavanyjaLitary || nextNextLetter == "ь")))
      convertedLetter = "ł";
  }
  return convertedLetter
}


function convertCyrToLat(inputText, classic=true) {
  console.log("л" in zycznyjaZTranzitam)
  console.log("с" in zycznyjaZTranzitam)
  if (typeof inputText != "string"){
    throw new TypeError(`Struing expected, but instead got ${toString(inputText)} with type ${typeof inputText}`);
  }

  if (typeof classic != "boolean") {
    throw new TypeError("Classic should be set to some boolean value, instead was", typeof classic)
  }

  let convertedText = "";

  for (let i = 0; i < inputText.length; i++){
    let convertedLetter;
    const currentLetter = new CurrentLetter(inputText[i]);

    let previousLetter;
    if (i > 0){
      previousLetter = inputText[i - 1]
    }

    let nextLetter, nextNextLetter;
    if (i < inputText.length - 1){
      nextLetter = inputText[i + 1]
    }

    if (i < inputText.length - 2){
      nextNextLetter = inputText[i + 2]
    }

    switch(true){
      case (currentLetter.lower in pravilyKanvertacyi):
        convertedLetter = pravilyKanvertacyi[currentLetter.lower]
        break;
      case (currentLetter.lower == "л"):
        console.log("position", i, previousLetter, currentLetter.letter, nextLetter)
        convertedLetter = convert_l(nextLetter, nextNextLetter);
        break;
      default:
        convertedLetter = currentLetter.letter;
    }

    if (currentLetter.isUpper) {
      convertedLetter = capitalize(convertedLetter);
    }
    convertedText = convertedText + convertedLetter;
  }
  return convertedText;
};

export default convertCyrToLat;
