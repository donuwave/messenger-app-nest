# 💬 Messenger — Frontend

Клиент социальной сети с мессенджером: лента постов, профили, друзья, уведомления и чаты в реальном времени.

![Статус](https://img.shields.io/badge/статус-в_разработке-orange?style=flat)

**Бэкенд:** [messenger-app-nest](https://github.com/donuwave/messenger-app-nest)

> [!NOTE]
> **В планах:** деплой и демо, раздел «Избранное», редактор фото перед публикацией, переключение светлой и тёмной темы.

## Возможности

**Лента и посты**
- Создание поста с текстом, фото и файлами, настройки отображения
- Редактирование, удаление и восстановление удалённого поста
- Лайки и комментарии, отключение комментариев
- Сетка фотографий, карусель и просмотр фото
- Бесконечная лента с подгрузкой при скролле

**Чаты**
- Личные и групповые диалоги, создание группы с выбором друзей
- Сообщения в реальном времени: отправка, редактирование, удаление
- Статус прочтения и онлайн-статус собеседника
- Закреплённые сообщения
- Информация о чате: участники, добавление новых, выход из чата, переименование
- Подгрузка истории сообщений при прокрутке вверх
- Поиск по диалогам

**Друзья и профиль**
- Поиск пользователей, заявки в друзья, приём и отмена в реальном времени
- Профиль пользователя с фото, друзьями и постами
- Уведомления с колокольчиком и счётчиком непрочитанных

**Прочее**
- Регистрация и вход, валидация форм через Formik + Yup
- Адаптивная вёрстка
- Скелетоны при загрузке

## Технические детали

- Архитектура по **Feature-Sliced Design**: `app` / `pages` / `widgets` / `features` / `entities` / `shared`
- **Redux Toolkit** с `createAsyncThunk` и `redux-persist`
- **Socket.IO**: отдельный провайдер для сокета, real-time обработчики сообщений и заявок в друзья
- Axios-интерцепторы для подстановки JWT и обработки ошибок
- Слой конвертации и валидации ответов API в каждой сущности
- Провайдеры через композицию: тема, store, persist, auth, socket, interceptors
- Ленивая загрузка страниц через `React.lazy`
- Алиасы путей через CRACO

## Стек

![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat&logo=redux&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant_Design-0170FE?style=flat&logo=antdesign&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white)

React 18, TypeScript, Redux Toolkit, redux-persist, React Router 6, Socket.IO Client, Axios, Ant Design, styled-components, Formik + Yup, dayjs

## Запуск

Сначала запусти [бэкенд](https://github.com/donuwave/messenger-app-nest), по умолчанию клиент ждёт его на `localhost:5000`.

```bash
git clone https://github.com/donuwave/messenger-app-react.git
cd messenger-app-react
yarn
yarn start
```
