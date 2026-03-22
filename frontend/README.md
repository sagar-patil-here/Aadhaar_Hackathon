# Aadhaar DRISHTI

**Digital Risk Identification System for High-Threat Infiltration** — React dashboard (UI only).

The previous Python/FastAPI backend, datasets, and PDF generation have been **removed** from this repository. The app runs as a static React UI; Tri-Shield analysis and report download are disabled unless you add your own API.

---

## Tech stack

- React 18, Tailwind CSS  
- Recharts, React Dropzone, SVG map (India)

---

## Prerequisites

- **Node.js** (v16+) and npm

---

## Run locally

```bash
cd frontend
npm install
npm start
```

Open **http://localhost:3000**.

---

## Project layout

```
frontend/
├── src/
│   ├── App.js
│   ├── Dashboard.js    # Main dashboard (upload UI; analysis stubbed)
│   ├── index.js
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```

---

## Behaviour

- **CSV upload** still works for staging files in the UI.  
- **Analyze** shows a message that the server API is not present.  
- **PDF export** is disabled without a backend.

To restore full behaviour, reintroduce a backend that implements the previous analysis and report endpoints, or point `Dashboard.js` at your own service.

---

## Tri-Shield logic (reference)

These rules were implemented in the removed backend:

| Shield | Rule (summary) |
|--------|----------------|
| Migration Radar | High adult ratio + volume thresholds on enrolment data |
| Laundering Detector | Demographic vs biometric volume ratio |
| Ghost Child Scanner | Large child volume with zero adults |

---

## Production build

```bash
npm run build
npx serve -s build -l 3000
```

---

## License

Educational / hackathon use.
