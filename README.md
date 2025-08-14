# ZN AUTO — сайт-визитка

## Локальный запуск
```bash
npm i
npm run dev
```
Откройте адрес из терминала (обычно http://localhost:5173).

## Сборка
```bash
npm run build
npm run preview
```

## Деплой на Vercel (рекомендуется)
1. Зайдите на https://vercel.com и создайте аккаунт.
2. Нажмите *New Project* → *Import* → *Import Git Repository*.
3. Залейте этот проект на GitHub/или выберите *Deploy from CLI/Import*.
4. **Framework Preset:** Vite. Остальное по умолчанию.
5. Нажмите *Deploy*. Через минуту получите URL. Привяжите домен в *Settings → Domains*.

## Деплой на Netlify
1. https://app.netlify.com → *Add new site* → *Import an existing project*.
2. Build command: `npm run build`, Publish directory: `dist/`.
3. Deploy.

## GitHub Pages (статично)
1. В `package.json` добавьте `"homepage": "https://<ваш-логин>.github.io/zn-auto-site"`.
2. Установите `npm i gh-pages -D`.
3. Скрипты:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
4. `npm run deploy`.
