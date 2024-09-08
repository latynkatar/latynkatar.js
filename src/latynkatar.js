const pravilyKanvertacyi = {
  а: "a",
  э: "e",
  ы: "y",
  у: "u",
  ў: "ŭ",
  б: "b",
  в: "v",
  г: "h",
  ґ: "g",
  д: "d",
  ж: "ž",
  й: "j",
  к: "k",
  м: "m",
  о: "o",
  п: "p",
  р: "r",
  т: "t",
  ф: "f",
  ч: "č",
  ш: "š",
  х: "ch",
};

const jotavanyjaLitary = {
  е: "e",
  ё: "o",
  і: "",
  ю: "u",
  я: "a",
};

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
];

const halosnyja = ["а", "е", "ё", "і", "у", "ы", "э", "ю", "я"];

class CurrentLetter {
  constructor(current) {
    this.letter = current;
    this.lower = this.letter.toLowerCase();
    this.isUpper = true;

    if (this.lower == this.letter) {
      this.isUpper = false;
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
  switch (true) {
    // Калі наступнай ідзе ётаваная літара ці мяккі знак
    case nextLetter && (nextLetter in jotavanyjaLitary || nextLetter == "ь"):
      convertedLetter = "l";
      break;
    // Калі наступная зычная літара мяккая і не г, к, х
    case nextLetter &&
      zycznyjaZTranzitam.find((litara) => litara == nextLetter) &&
      nextNextLetter &&
      (nextNextLetter in jotavanyjaLitary || nextNextLetter == "ь"):
      convertedLetter = "l";
      break;
    // Ва ўсіх астатніх выпадках
    default:
      convertedLetter = "ł";
  }
  return convertedLetter;
}

function convertJotavanyja(currentLetter, previousLetter) {
  previousLetter = previousLetter
    ? previousLetter.toLowerCase()
    : previousLetter;
  let baseLetter = "";
  let secondLetter = "";

  if (
    (!previousLetter ||
      halosnyja.find((letter) => letter == previousLetter) ||
      !previousLetter.match(/[а-я]/i) ||
      previousLetter == "'" ||
      previousLetter == "ь") &&
    currentLetter != "і"
  ) {
    baseLetter = "j";
  } else {
    baseLetter = "i";
  }

  secondLetter = jotavanyjaLitary[currentLetter];

  if (previousLetter && previousLetter == "л" && currentLetter != "і") {
    baseLetter = "";
  }

  return baseLetter + secondLetter;
}

function convertCyrToLat(inputText, classic = true) {
  if (typeof inputText != "string") {
    throw new TypeError(
      `Struing expected, but instead got ${toString(inputText)} with type ${typeof inputText}`,
    );
  }

  if (typeof classic != "boolean") {
    throw new TypeError(
      "Classic should be set to some boolean value, instead was",
      typeof classic,
    );
  }

  let convertedText = "";

  for (let i = 0; i < inputText.length; i++) {
    let convertedLetter;
    const currentLetter = new CurrentLetter(inputText[i]);

    let previousLetter;
    if (i > 0) {
      previousLetter = inputText[i - 1];
    }

    let nextLetter, nextNextLetter;
    if (i < inputText.length - 1) {
      nextLetter = inputText[i + 1];
    }

    if (i < inputText.length - 2) {
      nextNextLetter = inputText[i + 2];
    }

    switch (true) {
      case currentLetter.lower in pravilyKanvertacyi:
        convertedLetter = pravilyKanvertacyi[currentLetter.lower];
        break;
      case currentLetter.lower == "л":
        convertedLetter = convert_l(nextLetter, nextNextLetter);
        break;
      // Не маюць літар-адпаведнікаў у лацінцы
      case currentLetter.lower == "ь" || currentLetter.letter == "'":
        convertedLetter = "";
        break;
      case currentLetter.lower in jotavanyjaLitary:
        convertedLetter = convertJotavanyja(
          currentLetter.lower,
          previousLetter,
        );
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
}

export default convertCyrToLat;
