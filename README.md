# Приложение messenger

![icons8-nestjs](https://github.com/Doonu/messenger_app/assets/123429108/6bb51f10-87b4-43d7-9436-497ae7481156)

Проект представляет собой серверное приложение, разработанное на основе фреймворка NestJS и клиентское веб-приложение, разработанное с использованием современных технологий React, Ant Design и styled-components. 
Основное назначение этого сервиса заключается в предоставлении функциональности для авторизации пользователей, а также в управлении CRUD-операциями для постов и сообщений в реальном времени - мессенджер. 
Все данные храняться в postgres + ORM Sequelize. Приложение полностью написано на TypeScript

Основные функции проекта:
1) Авторизация пользователей:

- Поддержка регистрации и аутентификации пользователей с использованием JWT (JSON Web Tokens).
- Шифрование паролей с использованием библиотеки bcryptjs, что обеспечивает безопасность хранения паролей.
- Возможность настройки различных уровней доступа и ролей для пользователей.
- Валидация форм с использованием библиотеки Formik и схем Yup.
- Сохранение пользовательских данных и токенов в локальном хранилище с использованием localstorage.

2) Посты

Основные фукции:
- Создание
- Удаление
- Восстановление
- Прочтение
- Изменение

- Интерфейс для создания, чтения, обновления и удаления постов и сообщений.

3) Добавление в друзья с уведомлениями в real-time

4) Реализация чата
- Поддержка WebSocket для обмена сообщениями в реальном времени между пользователями.
- Интеграция с платформой Socket.io для обеспечения надежного и масштабируемого соединения.
- Обработка и хранение сообщений, включая возможность получения истории сообщений и их статус (прочитано/непрочитано).
- Использование WebSocket через socket.io-client для обновления интерфейса в реальном времени.
- Отображение текущего статуса сообщений (например, прочитано/непрочитано) и обновлений без перезагрузки страницы.
