# TX Plan Pro - Frontend sheme

```
nedoctor/
├── .npm/
│   ├── fonts.js          # конвертацияя шрифтов в woff2
│   ├── svg.js            # создание спрайтов svg
│   └── webp.js           # конвертация из png в webp
│
├── .vscode             
│   ├── ecomsys.code-snippets      # игрок
│   ├── extension.json             # tailwind надстройки для vscode
│   └── settings.json              # tailwind надстройки для vscode
│
├── node_modules           # зависимости npm
│     └── ...
│
├── public/
│   ├── fonts           # шрифты
│   ├── icons           # иконки
│   ├── images          # изображения
│   ├── .htaccess       # настройки для apache
│   └── favicon.ico     # фавикон
│
├── src/              
│   ├── app              # App.tsx, i18n.ts
│   ├── components       # layouts, sections
│   ├── locales          # en, ru
│   ├── pages            # Home.tsx
│   ├── router           # router.tsx
│   ├── styles           # app.css, fonts.css, index.css
│   ├── types            # swiper.d.ts, types.ts
│   ├── ui               # мелкие компоненты
│   └── main.tsx         # точка входа
│
├── .env                 # переменные проекта (e-mail подписка inputHaven.com и др.)
├── .gitignore           # игнор для git
├── index.html           # главный файл 
├── tailwind.config.js   # настройки tailwind
├── package.json         # зависимости
├── convert.php          # конвертер rem/px всех файлов проекта
├── convert2.php         # конвертер rem/px только стилей в папке src/styles
├── vite.config.ts       # конфиг для vite  
└── ...
```


# Языки определеться сами по локации браузера но можно посмотреть добаваи префикс lang=en
---
// http://localhost:5173/?lang=en
---

---
// http://localhost:5173/?lang=ru
---


# Использование справйтов svg

```html
 <svg className="w-[18px] h-[18px] text-white">
    <use href="/icons/sprite/sprite.svg#close" />
</svg>
```


# Конвертируем REM в PX и обратно для автомасштабирования !

в файле convert.php установи напрвление конвертации ($mode = 'toRem' или $mode = 'toPx') и запусти скрипт

```powershell
 php convert.php
```

скрипт пропарсит все папки внутри папки src и заменит значения на равценные.


# Отключить автомасштабирование просто закомментируй как здесь
```js
// src/app/App.tsx
import { useEffect } from "react";
import React from "react";
import { AppRouter } from "../router/router";
// import autoREM from "@/utils/autoRem";

export const App: React.FC = () => {

//   useEffect(() => {
//     const cleanup = autoREM(1920, 16);

//     return cleanup;
//   }, []);

  return (
    <AppRouter />
  );
};

```
