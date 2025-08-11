# Slack Clone

A lightweight Slack-style chat app built with **React**, **Redux Toolkit**, **Styled Components**, and **Firebase (Auth + Firestore + Hooks)**. Real-time messaging across channels, Google sign-in, and a neat, responsive UI.

**Live Demo:** https://slack-clone-e5155.web.app/

---

## 📸 Screenshots

![ Screenshot 1](https://github.com/abhishekDeshmukh74/slack-clone/blob/master/public/screenshot1.png)

![ Screenshot 2](https://github.com/abhishekDeshmukh74/slack-clone/blob/master/public/screenshot2.png)


---


## ✨ Features

- **Google Authentication** with Firebase Auth (secure login/logout).
- **Real-time messaging** powered by Firestore listeners (no refresh needed).
- **Channel management** – create and browse channels to organize conversations.
- **Redux Toolkit state** for predictable, testable UI state.
- **Styled Components** for scoped, themeable styles.
- **Responsive layout** that works nicely on desktop and mobile.

---

## 🧱 Tech Stack

- **Frontend:** React (CRA), Redux Toolkit, React Router (if present), Styled Components
- **Backend-as-a-Service:** Firebase (Auth, Firestore, Hosting)
- **Utilities:** Firebase Hooks (react-firebase-hooks), ESLint/Prettier (if configured)

---

## 📂 Project Structure

```
slack-clone/
├─ public/
├─ src/
│  ├─ components/          # Reusable UI blocks (Sidebar, Chat, Header, etc.)
│  ├─ features/            # Redux slices (e.g., app/user/channel slices)
│  ├─ hooks/               # Custom hooks & firebase hooks usage
│  ├─ pages/               # Route-level views (if routing used)
│  ├─ services/            # Firebase config, API helpers
│  ├─ styles/              # Global styles / theme
│  └─ index.js             # App entry
├─ .firebaserc
├─ firebase.json
├─ package.json
└─ README.md
```

---

## 🚀 Getting Started

### 1) Prerequisites

- **Node.js** v16+ and **npm** or **yarn**
- **Firebase project** (https://console.firebase.google.com)

### 2) Clone & Install

```bash
git clone https://github.com/abhishekDeshmukh74/slack-clone.git
cd slack-clone
npm install
# or
yarn
```

### 3) Configure Firebase

Create **Firestore** and **Authentication** (enable **Google** provider) in your Firebase project.

Create a `.env` file at the project root with your Firebase config:

```bash
# .env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id

### 4) Run Locally

```bash
npm start
# or
yarn start
```

---

## 🔐 Authentication Notes

- Google sign-in via Firebase Auth.
- Store the signed-in user in Redux state for easy access across components.
- Protect routes or components by checking auth state.

---

## 💬 Messaging & Channels (Firestore)

- **Collections**:
  - `channels` → channel documents
  - `channels/{channelId}/messages` → message documents
- **Real-time updates**: use Firestore `onSnapshot` or Firebase Hooks.
- **Ordering**: query messages by `timestamp` ascending.

---


## 📦 Production Build & Deployment

### Build

```bash
npm run build
```

### Deploy to Firebase Hosting

1. Install CLI: `npm i -g firebase-tools`
2. Login: `firebase login`
3. Init Hosting: `firebase init hosting`
4. Deploy: `firebase deploy`

---

## 🗺️ Roadmap

- Threaded replies
- Reactions / emoji picker
- File uploads
- Search
- Message edit & delete
- Typing indicators
