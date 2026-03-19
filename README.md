# Devjit Sikdar | Professional Portfolio 🚀

A modern, highly interactive personal portfolio website built specifically for an AI/ML Engineer and Full-Stack Web Developer. 

## ✨ Features

- **Dynamic Theme System:** Three completely distinct visual themes (Tokyo Night, Deep Ocean, and Vintage Mahogany) powered natively by React Context.
- **Glassmorphism Aesthetic:** Heavy usage of backdrop blurs, rich CSS gradients, and perfectly balanced translucent UI cards.
- **Animated Ambient Background:** Immersive, theme-reactive floating neon orbs seamlessly powered by `framer-motion`.
- **Fully Responsive & Scalable:** Perfectly optimized layout for mobile phones, tablets, and desktop navigation.
- **Fully Working Contact Form:** A functional backend API route using Nodemailer to send emails directly to the owner.
- **Interactive Micro-UI:** Custom SVG tracking cursor, fluid sidebar sliding navigation, and elegant tab transitions.

## 🛠️ Tech Stack 

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Vanilla CSS Variables
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form & Zod Validation
- **Email Delivery:** Nodemailer
- **Iconography:** Lucide React

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and `npm` installed on your machine.

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DevjitSikdar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Local Environment Variables:**
   Create a `.env.local` file in the root directory (where `package.json` is located) and securely add your SMTP Google App Password to enable the contact form connection:
   ```env
   # Your Gmail address
   SMTP_USER=devjitsikdar0@gmail.com
   # 16-letter App password from Google Account Security
   SMTP_PASS=your_16_letter_app_password
   # The email inbox to receive contact messages
   CONTACT_EMAIL=devjitsikdar0@gmail.com
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **View the live build:** Open [http://localhost:3000](http://localhost:3000) in your selected browser.

---

## 🎨 Customizing Content Data

All static data (Experience, Projects, Skills, Basic Contact Info, and color palette definitions) is structurally typed and located in `src/lib/constants.ts`. 

To edit or expand the content of the website, simply alter the values inside `constants.ts` and the UI will automatically update everywhere without touching a single React component!

## 📄 License

This open-source software is licensed under the MIT License.
