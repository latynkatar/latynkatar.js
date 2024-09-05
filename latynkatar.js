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

class CurrentLetter {
  constructor(current) {
    this.letter = current;
    this.lower = this.letter;
    this.lower.toLowerCase();
    this.isUpper = true;

    if (this.lower == this.letter) {
      this.isUpper = false
    }
  }
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}


function convertCyrToLat(inputText, classic=true) {
  if (typeof inputText != "string"){
    throw new TypeError(`Struing expected, but instead got ${toString(inputText)} with type ${typeof inputText}`);
  }

  if (typeof classic != "boolean") {
    throw new TypeError("Classic should be set to some boolean value, instead was", typeof classic)
  }

  let converted_text = "";

  for (let i = 0; i < inputText.length; i++){
    let converted_letter;
    const current_letter = new CurrentLetter(inputText[i]);

    let previous_letter;
    if (i > 0){
      previous_letter = inputText[i +1]
    }

    let next_letter, next_next_letter;
    if (i < inputText.length - 1){
      next_letter = inputText[i + 1]
    }

    if (i < inputText.length - 2){
      next_next_letter = inputText[i + 2]
    }

    switch(true){
      case (current_letter.lower in pravilyKanvertacyi):
        converted_letter = pravilyKanvertacyi[current_letter.lower]
        break;
      default:
        converted_letter = current_letter.letter;

    }
    if (current_letter.isUpper) {
      converted_letter = capitalize(converted_letter);
    }
    converted_text = converted_text + converted_letter;
  }
  return converted_text;
};

export default convertCyrToLat;
