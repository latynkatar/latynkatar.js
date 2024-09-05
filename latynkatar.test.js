//const convertCyrToLat = require("./latynkatar");

import convertCyrToLat from "./latynkatar";

// Узор узяты з часопіса PAMYŁKA:
// https://github.com/PAMYLKA-ZIN/pamylka-number-3/tree/main/PAMYLKA_ZIN_3_FOR_SHARING
const prykladPamylka = `Вітаем цябе, чытачу!
Гэта трэці нумар PAMYŁKA ZIN!
Мы вельмі цешымся, што да каманды стваральнікаў працягваюць далучацца
новыя навукоўцы і мастакі! І мы будзем радыя кожнаму новаму ўдзельніку!
Сябры, мы рэдакцыяй надумалі запачаткаваць прэмію – «Бізон Гіґс». Таму гэты
нумар мы прысвячаем усім беларускім навукоўцам і хочам анансаваць прэмію,
якая будзе ўвасабляць сабой Беларусь і навуку разам! Гэта ўзнагарода для
беларускіх навукоўцаў і даследнікаў дакладных і прыродазнаўчых навук ад
навукова-папулярнага часопісу Pamyłka Zin.
Больш дэталяў апавядае першы артыкул нумару.
`;
const uzorPamylka = `Vitajem ciabie, čytaču!
Heta treci numar PAMYŁKA ZIN!
My vielmi ciešymsia, što da kamandy stvaralnikaŭ praciahvajuć dałučacca
novyja navukoŭcy i mastaki! I my budziem radyja kožnamu novamu ŭdzielniku!
Siabry, my redakcyjaj nadumali zapačatkavać premiju – «Bizon Higs». Tamu hety
numar my pryśviačajem usim biełaruskim navukoŭcam i chočam anansavać premiju,
jakaja budzie ŭvasablać saboj Biełaruś i navuku razam! Heta ŭznaharoda dla
biełaruskich navukoŭcaŭ i daślednikaŭ dakładnych i pryrodaznaŭčych navuk ad
navukova-papularnaha časopisu Pamyłka Zin.
Bolš detalaŭ apaviadaje pieršy artykuł numaru.
`;
const prykladBachdanovicz = `Маладыя гады,
Маладыя жаданні!
Ні жуды, ні нуды,
Толькі шчасьце каханьня!
 
Помніш толькі красу,
Мілы тварык дзявочы,
Залатую касу,
Сіняватыя вочы!

Цёмны сад-вінаград,
Цьвет бяленькі вішнёвы, —
І агністы пагляд,
І гарачыя словы!
 
Будзь жа, век малады,
Поўны сьветлымі днямі!
Пралятайце, гады,
Залатымі агнямі!
`;
const uzorBahdanowicz = `Maładyja hady,
Maładyja žadańni!
Ni žudy, ni nudy,
Tolki ščaście kachańnia!
 
Pomniš tolki krasu,
Miły tvaryk dziavočy,
Załatuju kasu,
Siniavatyja vočy!

Ciomny sad-vinahrad,
Ćviet bialeńki višniovy, —
I ahnisty pahlad,
I haračyja słovy!
 
Budź ža, viek małady,
Poŭny śvietłymi dniami!
Pralatajcie, hady,
Załatymi ahniami!
`;

describe("Тэсты на галосныя", () => {
  test("Ю", () => {
    expect(convertCyrToLat("ЮрліВец лЮбіЦь лІю п'ю")).toBe("JurliViec lUbiĆ lIju pju")
  });

  test("Я", () => {
    expect(convertCyrToLat("Яз'яваЗЯпазЬяВА")).toBe("JazjavaZIapaźjaVA")
  });
});

describe("Тэсты на зычныя", () => {
  test("Л", () => {
    expect(convertCyrToLat("ЛаЭлЯЛуЛіЛюЛЁлЕлЬ лЛя")).toBe("ŁaElAŁuLiLuLOlEl lLa")
  });

  test("Х", () => {
    expect(convertCyrToLat("ХаХу ХЫВАХххххх Хіх")).toBe("ChaChu ChYVAChchchchchch Chich")
  });

  test("Ш", () => {
    expect(convertCyrToLat("ШашуШышшшшшшш")).toBe("ŠašuŠyššššššš")
  });

  test("Ч", () => {
    expect(convertCyrToLat("чАЧыЧУ")).toBe("čAČyČU")
  });

  test("Ж", () => {
    expect(convertCyrToLat("жУрАвІнЫЖэЖЫ")).toBe("žUrAvInYŽeŽY")
  });

  test("В", () => {
    expect(convertCyrToLat("войт і Ваявода")).toBe("vojt i Vajavoda")
  });

  test("мяккасць", () => {
    expect(convertCyrToLat("снег смех поспех святы")).toBe("śnieh śmiech pośpiech śviaty")
  });
});

describe("Тест на тэксты", () => {
  test("Памылка", () => {
    expect(convertCyrToLat(prykladPamylka)).toBe(uzorPamylka);
  });

  test("Багдановіч", () => {
    expect(convertCyrToLat(prykladBachdanovicz)).toBe(uzorBahdanowicz);
  });
});
