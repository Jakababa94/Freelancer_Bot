# Freelancers Bot

## 🚀 Live Demo

[https://freelancer-bot.vercel.app](https://freelancer-bot.vercel.app)

## 📊 Pitch Deck

[View the Pitch Deck](https://gamma.app/docs/Freelancer-Bot-Your-AI-Powered-Project-Partner-2o4heba20nipbbb)

A modern web platform that connects clients and freelancers worldwide using AI-powered matching, secure payments, and a beautiful, responsive UI.

## Features

- **Authentication**: Secure sign up, login, and session management with Supabase.
- **Dashboard**: Personalized dashboard for freelancers and clients.
- **AI-Powered Matching**: Smart algorithm matches clients with the best freelancers for their projects.
- **Project Management**: Post projects, manage milestones, and communicate efficiently.
- **Secure Payments**: Escrow-based payment system for safe transactions.
- **Responsive Design**: Fully responsive, modern UI built with React and Tailwind CSS.
- **Feature Sections**: Features, Pricing, and Testimonials sections accessible from the navbar.
- **Contact Us**: Interactive contact form in the footer, with submissions saved to Supabase.
- **Social Links**: Integrated social media links in the footer.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend/DB**: Supabase (PostgreSQL, Auth, Realtime)
- **State Management**: React Context API
- **Icons**: Lucide React

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Jakababa94/Freelancer_Bot.git
cd Freelancers\ Bot
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root with your Supabase credentials:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Start the development server

```bash
pnpm dev
# or
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Supabase Integration

- The app uses Supabase for authentication, database, and real-time features.
- The `Contact Us` form in the footer saves submissions to a `contacts` table in your Supabase database.
- To enable this, create a table in Supabase:

```sql
create table contacts (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text,
  message text,
  created_at timestamp with time zone default now()
);
```

- Update your `.env` with your Supabase project URL and anon key.

---

## Project Structure

```
src/
  components/
    AuthForm.jsx
    Dashboard.jsx
    Features.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Pricing.jsx
    Testimonials.jsx
    ContactForm.jsx
  contexts/
    AuthContext.jsx
    FeaturesContext.jsx
  lib/
    supabase.js
  App.jsx
  main.jsx
  index.css
```

---

## Customization

- **Branding**: Update the logo, colors, and social links in `Footer.jsx`.
- **Contact Info**: Edit the contact email, phone, and address in the footer.
- **Feature Sections**: Update content in `Features.jsx`, `Pricing.jsx`, and `Testimonials.jsx`.
- **Supabase Tables**: Add more tables or functions as needed for your workflow.

---

## License

MIT

---

## Credits

- [Supabase](https://supabase.com/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) (for hero images)

---
