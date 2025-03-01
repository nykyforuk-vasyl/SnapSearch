SnapSearch

SnapSearch is a web application for searching images by keywords. It sends HTTP requests to the Unsplash API and displays the results as image cards.

🚀 Technology Stack

# React – Library for building user interfaces.

# TypeScript – Programming language that extends JavaScript.

# CSS – Styling for components.

# REST API – Fetching images via Unsplash API.

# React Modal – For implementing the modal window.

# React Loader Spinner – For displaying the loading indicator.

📌 Features

🔎 Image Search

The user enters a keyword in the search field.

An HTTP request is sent to the Unsplash API.

The API response is processed, and a list of image cards is dynamically added to the DOM.

⏳ Loading Indicator (Loader)

While the request is in progress, a Loader component is displayed under the gallery.

Uses the react-loader-spinner library.

📥 "Load More" Button

The LoadMoreBtn component renders the "Load more" button.

Clicking the button loads the next batch of images and appends them to the list.

The button is displayed only when there are loaded images.

If the image array is empty, the button is not rendered.

🖼️ Modal Window (ImageModal)

# Clicking on an image opens the ImageModal component.

# The modal displays the image in a larger format with a dark background.

# Closes when clicking outside the modal or pressing the ESC key.

# Uses the React Modal library.

🔧 Project Setup

# Clone the repository:

git clone https://github.com/your-username/snapsearch.git
cd snapsearch

# Install dependencies:

npm install

# Start the development server:

npm run dev

---

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
