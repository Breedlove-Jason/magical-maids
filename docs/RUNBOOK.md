## Magical Maids Runbook

### First time only
1. sudo systemctl enable --now mongodb
2. cd server && npm i
3. cd client && npm i
4. cd server && npm run seed

### Start dev
1. Terminal A: cd server && npm run dev
2. Terminal B: cd client && npm run dev

### URLs
- Client: http://localhost:5173
- API: http://localhost:5000/api
- Health: http://localhost:5000/health