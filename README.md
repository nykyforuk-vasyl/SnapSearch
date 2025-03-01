SnapSearch

**SnapSearch** — це веб-додаток для пошуку зображень за ключовими словами. Він надсилає HTTP-запити до API Unsplash і відображає результати у вигляді карток із зображеннями.

🚀 Технології

# React — бібліотека для створення інтерфейсу користувача.

# TypeScript — мова програмування, що розширює можливості JavaScript.

# CSS — стилізація компонентів.

# REST API — отримання зображень через Unsplash API.

# React Modal — для реалізації модального вікна.

# React Loader Spinner — для відображення індикатора завантаження.

📌 Функціональність

🔎 Пошук зображень

# Користувач вводить ключове слово в поле пошуку.

# Виконується HTTP-запит до API Unsplash.

# Відповідь API обробляється та формується список карток із зображеннями, які додаються в DOM.

⏳ Завантаження (Loader)

Під час виконання запиту відображається компонент Loader під галереєю.

Використовується бібліотека react-loader-spinner.

📥 Кнопка "Load more"

Компонент LoadMoreBtn рендерить кнопку "Load more".

При натисканні на кнопку завантажується наступна порція зображень і додається до списку.

Кнопка відображається лише тоді, коли є завантажені зображення.

Якщо масив зображень порожній, кнопка не рендериться.

🖼️ Модальне вікно (ImageModal)

# При натисканні на зображення відкривається модальне вікно ImageModal.

# Вікно відображає зображення у великому форматі з темним фоном.

# Закривається при кліку за межами модального вікна або натисканні клавіші ESC.

# Використовується бібліотека React Modal.

🔧 Запуск проєкту

# Клонуйте репозиторій:

git clone https://github.com/your-username/snapsearch.git
cd snapsearch

# Встановіть залежності:

npm install

# Запустіть локальний сервер:

npm run dev

📜 Ліцензія

# Цей проєкт розповсюджується за ліцензією MIT.
