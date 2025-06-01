# Łatynkatar

[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://github.com/measles/latynkatar.js/blob/main/LICENSE)

Маленькая і простая бібліятэка для канвертацыі кірыліцы ў сучасную, "чэшскую" лацінку (з ž, č, š і v).

## Усталёўка

Пакет апублікаваны ў NPM. Інсталяцыя трывіяльная:

```
npm install latynkatar
```

## Ужыванне

Усё досыць просталінейна:

```js
import convertCyrToLat from "../src/latynkatar";

a = convertCyrToLat("Але лёс склаўся так, што хрусць - і папалам!");
("Ale los skłaŭsia tak, što chruść - i papałam!");
```

Асноўныя параметры працы бібліятэкі:

- Ніякага выпраўлення памылак.
- Са зменаў правапісу толькі яўна пазначаецца транзітыўная мяккасць зычных, астатняе пры канвертацыі захоўваецца роўна з тымі ж асаблівасцямі правапісу і памылкамі, якія былі да канвертацыі.
- Кірылічныя сімвалы, якім адпавядае некалькі лацінскіх сімвалаў пры трансляцыі вялікіх літар маюць вялікай толькі першую літару ў пары (Chleb, Jan), што можа быць праблемай у выпадках, калі гэта не слова з вялікай літары ці абрэвіятура, а проста нешта напісанае КАПСАМ. Бо атрымаецца ChLEB, JaN.

## Анлайн канвертар

У якасці анлайн канвертара створанага на аснове [версіі бібліяткі на Python](https://github.com/latynkatar/latynkatar) магу прапанаваць паглядзець на сайт [latynkatar.org](https://latynkatar.org). Зыходнікі сайта даступныя [тут](https://github.com/measles/latynkatar_site).

## Ліцэнзія

Copyright [Łatynkatar group](https://github.com/latynkatar), 2025

[![LGPL v3.0](https://www.gnu.org/graphics/lgplv3-with-text-154x68.png)](https://github.com/measles/latynkatar/blob/main/LICENSE) ад [GNU](https://www.gnu.org/licenses/lgpl-3.0.html)
