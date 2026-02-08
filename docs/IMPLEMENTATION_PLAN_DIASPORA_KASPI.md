
# План реализации (Roadmap) и “путь операции” (end-to-end)

## 1) Рекомендуемая структура репозитория
```
/docs
  TECH_SPEC.md
  IMPLEMENTATION_PLAN.md
  API_CONTRACT.md
/app
  (код проекта)
/infra
  docker-compose.yml
  .env.example
README.md
```

---

## 2) Стек (рекомендуемый старт)
Чтобы быстро сделать кабинет/админку:
### Вариант A: Laravel + PostgreSQL + Docker
### Вариант B: Next.js (fullstack) + PostgreSQL + Prisma

---

## 3) Этапность для Codex (чтобы не падало на больших задачах)
**Правила:**
- 1 этап = 1 логический блок
- 1 коммит на этап
- после этапа: краткий отчёт + команды запуска
- не «делать всё сразу»

### Этап 0 — Init
- создать проект
- добавить Docker Compose (app + db)
- `.env.example`
- README

Коммит: `chore: init project + docker`

### Этап 1 — DB schema
- users, payments, audit_logs (минимум)
- seed admin user

Коммит: `feat: db schema (users, payments, audit)`

### Этап 2 — Auth
- register/login/me
- роли admin/member

Коммит: `feat: auth`

### Этап 3 — Member cabinet
- статус оплаты за текущий месяц
- создать платеж (pending)
- история платежей

Коммит: `feat: member cabinet (status + payments)`

### Этап 4 — Admin
- участники + статусы
- платежи + confirm/reject
- аудит действий

Коммит: `feat: admin panel (members + payments confirm)`

### Этап 5 — Reports
- CSV экспорт за месяц

Коммит: `feat: reports export csv`

### Этап 6 — Kaspi readiness (заглушки)
- интерфейс PaymentProvider
- endpoint webhook (пока тестовый)

Коммит: `chore: payment provider interface + webhook stub`

---

## 4) “Путь операции” (как это работает целиком)
### 4.1 Создание оплаты (участник)
1) Логин.
2) Нажать “Оплатить 2000₸”.
3) Backend создаёт `payments.status=pending`, `period=YYYY-MM`.
4) UI показывает инструкцию оплаты Kaspi + (опционально) загрузку чека.

### 4.2 Подтверждение (админ, MVP)
1) Админ открывает pending платежи.
2) Проверяет.
3) Нажимает Confirm.
4) Backend ставит `confirmed`, пишет audit log, обновляет статус участника.

### 4.3 Автоподтверждение (после интеграции)
1) Webhook от провайдера.
2) Идемпотентно подтверждаем платеж.

---

## 5) Промпт для Codex (копировать 1:1)
**Задача:**  
В репозитории есть документы в `/docs` (TECH_SPEC.md, IMPLEMENTATION_PLAN.md, API_CONTRACT.md). Изучи их и реализуй MVP строго по этапам и маленькими коммитами.

**Правила:**
1) Сначала выдай план этапов и список коммитов, затем выполняй по одному этапу.
2) После каждого этапа: коммит + проверки + обновить README.
3) Если неопределенность — не угадывай, поставь TODO и предложи варианты.
4) Секреты не коммить. Только `.env.example`.

**MVP:**
- Регистрация/вход
- Кабинет: статус + история платежей + создать оплату (pending)
- Админка: участники + платежи + confirm/reject
- CSV экспорт по месяцу
- Docker Compose для локального запуска
