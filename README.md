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
├── .gitignore           # игнор для git
├── index.html           # главный файл 
├── tailwind.config.js   # настройки tailwind
├── package.json         # зависимости
├── vite.config.ts       # конфиг для vite
└── ...
```


# Использование справйтов svg

```html
 <svg className="w-[18px] h-[18px] text-white">
    <use href="/icons/sprite/sprite.svg#close" />
</svg>
```
