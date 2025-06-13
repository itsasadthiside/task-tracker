
# 📝 Task Tracker – Next.js + Supabase

This is a fully functional **Task Tracker** web application built using **Next.js** for the frontend and **Supabase** for the backend (database and API). It allows users to **create**, **read**, **update**, and **delete** (CRUD) tasks in real-time.

> ✅ Ideal for showcasing your frontend + backend integration skills using modern full-stack technologies.

---

## 🔗 Live Demo

👉 [Click here to visit the live app](https://your-vercel-link.vercel.app)

---

## 🛠 Tech Stack

- **Frontend:** Next.js (React Framework), TypeScript, Tailwind CSS
- **Backend-as-a-Service:** [Supabase](https://supabase.com/)
- **Hosting:** Vercel
- **Database:** PostgreSQL (via Supabase)

---

## 🚀 Features

- Add new tasks with title and optional description
- Edit existing tasks
- Delete tasks
- View tasks with timestamps
- Clean, responsive UI with Tailwind CSS
- Fast and modern frontend with Next.js and Supabase real-time API

---

## 📁 Folder Structure

task-tracker/
│
├── app/ # Next.js pages
│ ├── page.tsx # Home Page with Add Task
│ └── all-tasks.tsx # View All Tasks
│
├── lib/ # Supabase client setup
│ └── supabase.ts
│
├── public/ # Static assets
├── styles/ # Global CSS (optional)
├── .env.local # Environment variables
├── README.md
└── ...

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-tracker.git
cd task-tracker
2. Install dependencies
bash
Copy
Edit
npm install
3. Setup Supabase
Go to supabase.com and create a project.

Create a new table named tasks with the following schema:

Column	Type	Notes
id	UUID	Primary Key
title	Text	Required
description	Text	Optional
created_at	Timestamp	Default: now()

Enable Row Level Security (RLS) and add appropriate policies to allow read/write for anonymous users (or via service role token).

Go to Project Settings → API and copy your anon public key and URL.

4. Configure Environment Variables
Create a .env.local file in the root and add:

env
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
5. Start the development server
bash
Copy
Edit
npm run dev
App will be running at: http://localhost:3000

📸 Screenshots
Home Page

All Tasks Page

📦 Deployment
This app is deployed on Vercel. You can also deploy it yourself in seconds:

Push the code to GitHub.

Go to vercel.com, import your GitHub repo.

Add the environment variables in Vercel settings.

Click Deploy 🎉

📄 License
This project is open source and available under the MIT License.

🙋‍♂️ Author
Made with ❤️ by Asadullah Khan
LinkedIn | GitHub

yaml
Copy
Edit

---

### ✅ Next Steps

- Replace all placeholder links (GitHub repo, Vercel link, Supabase URL) with your actual ones.
- Add screenshot images (optional) in a `screenshots/` folder and push them to GitHub.
- Include a `LICENSE` file if needed (MIT recommended for open-source).

Let me know if you want the `LICENSE` file or help setting it up!
