# ArthaPath – AI-powered Retirement Planner (MERN)

ArthaPath is an end-to-end retirement planning experience crafted for Indian investors. The application combines a modern MERN stack with Google Gemini-powered intelligence to deliver actionable retirement guidance, tax planning ideas, and investment suggestions tuned for domestic financial realities.

## Features

### Landing & marketing experience
- Hero landing page describing the product narrative and benefits.
- Highlight sections covering AI-guided investing, tax optimisation, and integrated dashboards.
- Testimonials and clear call-to-action for account creation.

### Authentication & profile
- Secure sign-up and login with encrypted passwords and JWT-based sessions.
- Profile dashboard to maintain key financial attributes (age, income, risk profile, dependents, etc.).
- Persistent storage in MongoDB with change history for generated plans.

### Retirement planner dashboard
- Input widgets for monthly SIP, current savings, target retirement age, and inflation expectations.
- Corpus projection engine that estimates future and inflation-adjusted corpus.
- AI-driven guidance (via Gemini) covering asset allocation, tax benefits, and prioritised next actions.
- Investment idea generator for lump sum deployment and horizon-based strategies.

## Tech stack

- **Frontend:** React 18 + Vite, React Router, Axios, Context API for auth state.
- **Backend:** Node.js, Express, MongoDB/Mongoose, JWT auth, bcrypt password hashing.
- **AI integration:** Google Gemini API for contextual, Indian market-aware recommendations.

## Local development

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB Atlas cluster or local MongoDB instance
- Google Gemini API key (Generative Language API)

### Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Fill the `.env` file with the following variables:

```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secure-jwt-secret
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your-google-gemini-api-key
GEMINI_MODEL=gemini-1.5-flash
```

Start the API server:

```bash
npm run dev
```

### Frontend setup

```bash
cd frontend
npm install
npm run dev
```

The Vite dev server runs on [http://localhost:5173](http://localhost:5173). The frontend automatically proxies API requests to the backend URL configured via `VITE_API_URL` (defaults to `http://localhost:5000/api`).

### Environment configuration (frontend)

Optionally, create a `frontend/.env` file to override the API base URL:

```env
VITE_API_URL=http://localhost:5000/api
```

## Project structure

```text
backend/
  config/
  controllers/
  middleware/
  models/
  routes/
  services/
  server.js
frontend/
  src/
    assets/
    components/
    context/
    pages/
    services/
    App.jsx
    main.jsx
  vite.config.js
```

## Notes

- Gemini calls gracefully degrade to curated default insights when an API key is absent.
- Plan history retains the 10 most recent AI-assisted projections per user.
- Sensitive credentials must never be committed—use the provided `.env.example` as a template.

Enjoy planning your retirement journey with ArthaPath! 🇮🇳
