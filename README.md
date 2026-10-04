# 💬 Messenger — Backend

Серверная часть социальной сети с мессенджером: авторизация, лента постов с комментариями, друзья, уведомления и чаты в реальном времени на WebSocket.

![Статус](https://img.shields.io/badge/статус-в_разработке-orange?style=flat)

**Клиент:** [messenger-app-react](https://github.com/donuwave/messenger-app-react)

> [!NOTE]
> **В планах:** деплой с демо и публичной документацией Swagger, `docker-compose` для запуска одной командой, авторизация WebSocket-соединений по JWT, лента постов только от друзей.

## Возможности

**Авторизация и пользователи**
- Регистрация и вход по JWT, пароли хешируются через bcrypt
- Роли и ограничение доступа через guards и декоратор `@Roles`
- Бан пользователей
- Профиль, поиск пользователей, онлайн-статус

**Друзья**
- Заявки в друзья, принятие, отмена, удаление из друзей
- Уведомления о заявках в реальном времени

**Посты**
- Создание, редактирование, удаление и восстановление удалённого поста
- Лайки, комментарии, отключение комментариев у поста
- Загрузка изображений и файлов к постам

**Чаты** (Socket.IO)
- Личные и групповые диалоги
- Отправка, редактирование и удаление сообщений в реальном времени
- Статус прочтения сообщений
- Закреплённые сообщения
- Добавление участников в групповой чат, выход из чата, переименование
- Подгрузка истории сообщений

**Уведомления**
- Список уведомлений, счётчик непрочитанных, удаление по одному и всех сразу

## Технические детали

- Модульная архитектура NestJS: `auth`, `users`, `roles`, `posts`, `comments`, `dialogs`, `messages`, `notifications`, `files`
- REST API с глобальным префиксом `/api` и документацией в **Swagger** (`/api/docs`)
- Два WebSocket-шлюза: сообщения и заявки в друзья
- DTO с валидацией через `class-validator` и собственный `ValidationPipe`
- PostgreSQL + Sequelize (`sequelize-typescript`), связи многие-ко-многим для ролей, участников диалогов и статусов прочтения
- Раздача загруженных файлов через `@nestjs/serve-static`

## Стек

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=sequelize&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black)

NestJS 10, TypeScript, PostgreSQL, Sequelize, Socket.IO, JWT, bcryptjs, class-validator, Multer, Swagger

## Запуск

Нужен запущенный PostgreSQL.

```bash
git clone https://github.com/donuwave/messenger-app-nest.git
cd messenger-app-nest
npm install
```

Создай `.dev.env`:

```
PORT=5000
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
POSTGRES_DB=messenger
PRIVATE_KEY=your_jwt_secret
```

```bash
npm run start:dev
```

Документация API: [localhost:5000/api/docs](http://localhost:5000/api/docs)
