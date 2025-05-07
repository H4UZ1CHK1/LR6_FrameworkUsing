Вариант 17 : Философия
Серверный REST API, реализованный на собственном фреймворке без использования Express и других библиотек.
 Структура
- framework — собственный фреймворк (Application.js, Router.js)
- src — логика API:
  - controllers/ — логика обработки запросов
  - services/ — работа с JSON
  - routes/ — маршруты
  - db/ — JSON-файлы и db.js
  - middlewares/ — логгер

 Сущности
/philosophers
- GET /philosophers
- GET /philosophers/:id
- POST /philosophers
- PUT /philosophers/:id
- DELETE /philosophers/:id

/schools
- GET /schools
- GET /schools/:id
- POST /schools
- PUT /schools/:id
- DELETE /schools/:id

 Запуск
npm install
npm start
