
# API Contract (черновик MVP)

## Auth
- `POST /api/auth/register` { full_name, phone, password }
- `POST /api/auth/login` { phone, password }
- `GET /api/me`

## Member cabinet
- `GET /api/cabinet/status` -> { current_period, is_paid, status }
- `POST /api/payments` { period? } -> создаёт pending платеж
- `GET /api/payments` -> история платежей пользователя

## Admin
- `GET /api/admin/members?status=&q=`
- `PATCH /api/admin/members/:id` { status, notes? }
- `GET /api/admin/payments?period=&status=`
- `POST /api/admin/payments/:id/confirm`
- `POST /api/admin/payments/:id/reject`

## Reports
- `GET /api/admin/reports/payments.csv?period=YYYY-MM`
