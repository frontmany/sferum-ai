// Куда стартовая страница ведёт пользователя.
// Сейчас: страница проверки микрофона, WebRTC и звука в MAX (задача #6).
// Когда появится сервер приложения, здесь будет его адрес, например
// "https://app.example.ru/teacher.html". Относительный путь — файл в этом репозитории.
// ВРЕМЕННО: туннель на локальный сервер (Cloudflare quick tunnel, scripts/tunnel.sh в lesson_assistant), пока нет своего сервера (#25).
// Адрес живёт, пока запущен cloudflared. Вернуть "check.html", когда туннель закрыт
window.APP_URL = "https://hypothetical-carb-cooper-fat.trycloudflare.com/";
