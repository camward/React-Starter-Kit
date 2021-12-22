# Название проекта

Для работы с проектом необходим [Node.js версии LTS][1]

### Запуск проекта

- установите зависимости: `npm i` или `yarn`;
- запустите проект командой `npm start` или `yarn start`;
- в браузере автоматически откроется страница с адресом `http://127.0.0.1:3001/`;

### Сборка проекта

- для сборки приложения выполните команду 
`cross-env REACT_APP_PUBLIC_URL=/ REACT_APP_API_URL=/api/v1 npm run build`
- для запуска собранного приложения можно использовать [Static Server][2]
    - установка: `npm install -g serve`
    - запуск: `serve -s build`
- для анализа приложения можно запустить команду `npm run build:analyser`

[1]: https://nodejs.org/ru/
[2]: https://create-react-app.dev/docs/deployment/
