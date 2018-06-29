# Система сборки React-Redux приложения с применением npm-скриптов

## С чего начать?

* Склонировать `git clone https://github.com/ivbesp/React-redux_starter-kit.git` или [скачать](https://github.com/ivbesp/React-redux_starter-kit/archive/master.zip) этот репозиторий.
* Установить зависимости: `npm install`
* Запустить проект: `npm start`
* Удалить папку «.git» командой `npm run clean:git` (данная команда удалит «.git» каталог, привязанный к репозиторию https://github.com/ivbesp/React-redux_starter-kit.git) и следовать [инструкции](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) для инициализации нового репозитория.

## npm scripts

* `npm start` – сборка приложения в папку public, запуск сервера с автообновлением, запуск слежения за изменением js и css файлов.
* `npm run production` – запуск проверки кода (js, css), сборка приложения в папку «public», оптимизация файлов.
* `npm run deploy` – создает новую git ветку «gh-pages» для публикации содержимого папки «public» на Github pages.
* `npm run clear:git` – удаляет директорию «.git».
* `npm run prettier` – оптимизирует вид js файлов в папке «public».
* `npm run autoprefixer` – добавляет префиксы в файлы css в папке «public/css».
* `npm run lint:js` – проверка js кода в папке «public/js».
* `npm run lint:css` – проверяет css файл «public/css/style.css».



