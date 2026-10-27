# sferum-ai

Постоянный адрес мини-приложения «Ассистент Сферум AI» в MAX:
**https://frontmany.github.io/sferum-ai/**

Этот адрес привязан к боту [@ideya_fiks_161_bot](https://max.ru/ideya_fiks_161_bot). Привязку делают организаторы хакатона, поэтому сам адрес не меняем.

## Как устроено

- `index.html` — стартовая страница. Сразу перенаправляет туда, куда указывает `config.js`, и переносит параметры адреса, чтобы не потерять данные запуска MAX.
- `config.js` — куда вести. Сейчас это `check.html`, потом адрес сервера приложения.
- `check.html` — проверка микрофона, WebRTC и звука внутри MAX (задача #6 в [lesson_assistant](https://github.com/frontmany/lesson_assistant)).

Публикуется через GitHub Pages из ветки `main` при каждом пуше. Код самого приложения — в [frontmany/lesson_assistant](https://github.com/frontmany/lesson_assistant).
