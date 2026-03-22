# Quick setup — Aadhaar DRISHTI (frontend only)

This repository contains the **React dashboard** only. Server-side analysis and PDF generation were removed.

## Run the app

```bash
cd frontend
npm install
npm start
```

Open **http://localhost:3000**.

### Optional: helper script

```bash
chmod +x start_frontend.sh
./start_frontend.sh
```

## Port already in use (3000)

```bash
lsof -ti:3000 | xargs kill -9
```

## Node issues

```bash
rm -rf node_modules package-lock.json
npm install
```

See `README.md` for project details.
