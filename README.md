# TapLink - Видеопродакшн

Минималистичный taplink для видеопродакшена, созданный на Next.js и развернутый на Vercel.

## 🚀 Быстрый старт

### 1. Локальная установка

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000)

### 2. Развертывание на Vercel

#### Вариант А: Через GitHub (Рекомендуется)

1. Загрузи проект на GitHub
2. Открой https://vercel.com
3. Нажми "New Project"
4. Выбери свой GitHub репо
5. Нажми "Deploy"

#### Вариант Б: Через Vercel CLI

```bash
npm install -g vercel
vercel
```

## 🎨 Как настроить

### Изменить название студии

Открой `src/app/page.tsx` и найди:
```
STUDIO NAME
```

### Добавить свои ссылки

В файле `src/app/page.tsx` найди массив `links`:
```typescript
const links = [
  {
    id: 'portfolio',
    title: 'Твое название',
    description: 'Описание',
    url: 'https://ссылка.com',
    icon: '🎬',
  },
]
```

### Добавить свои кадры из видео

Найди массив `frames` и замени ссылки картинок:
```typescript
const frames = [
  {
    id: 1,
    image: 'https://твоя-картинка.jpg',
    title: 'Название проекта',
    duration: '2:35',
  },
]
```

## 📝 Структура проекта

```
.
├── src/
│   └── app/
│       ├── page.tsx          # Главная страница
│       ├── layout.tsx        # Layout
│       └── globals.css       # Глобальные стили
├── public/                   # Статические файлы
├── package.json             # Зависимости
├── next.config.js           # Конфиг Next.js
├── tailwind.config.js       # Конфиг Tailwind
└── README.md               # Этот файл
```

## 🛠️ Технологии

- **Next.js 14** - React фреймворк
- **Tailwind CSS** - Стили
- **Vercel** - Хостинг

## 📱 Особенности

✅ Полностью адаптивный дизайн
✅ Темная тема с минимализмом
✅ Интерактивные эффекты
✅ Быстрая загрузка
✅ SEO оптимизация
✅ Легко настраивается

## 📞 Поддержка

Если что-то не работает:
1. Проверь что установлены все зависимости: `npm install`
2. Удали `.next` папку и попробуй снова: `npm run dev`
3. Проверь Node.js версию: `node --version` (нужна v18+)

## 📄 Лицензия

MIT
