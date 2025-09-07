# Aman Singh - Portfolio Website

A modern, animated, and responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Dark Theme**: Sleek dark design with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion animations throughout the site
- **Interactive Navigation**: Smooth scrolling between sections
- **Contact Form**: EmailJS integration for contact form
- **Project Showcase**: Featured projects with live demos and GitHub links
- **Skills Visualization**: Animated progress bars and skill cards
- **Achievements Timeline**: Professional experience and achievements

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with smooth scrolling
│   ├── Hero.jsx            # Hero section with animated intro
│   ├── About.jsx           # About section with bio
│   ├── Skills.jsx          # Skills section with progress bars
│   ├── Experience.jsx      # Professional experience timeline
│   ├── Projects.jsx        # Featured projects showcase
│   ├── Achievements.jsx    # Achievements and recognition
│   ├── Contact.jsx         # Contact form and information
│   └── Footer.jsx          # Footer with social links
├── App.jsx                 # Main app component
├── App.css                 # Custom styles and animations
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## 🎨 Sections

### Hero Section
- Animated intro with name and title
- Call-to-action buttons (LinkedIn, GitHub, LeetCode, Resume)
- Floating particle animations
- Scroll indicator

### About Section
- Personal bio and profile picture
- Education and current role highlights
- Animated profile card

### Skills Section
- **Languages**: C, C++, Java, Python, JavaScript, TypeScript, HTML/CSS
- **Frameworks**: React.js, Node.js, Express.js, Spring Boot, Tailwind CSS, Bootstrap, Material UI, Chrome Extensions
- **Databases**: MongoDB, DynamoDB
- **Cloud/DevOps**: AWS (S3, Lambda, SES), Git, GitHub
- Animated progress bars and skill cards

### Experience Section
- **RedyHire (2025 – Present)**: Software Developer Intern
  - Dynamic Mail Template development
  - Referrer Tracking Form
  - Chrome Extension automation
- **IIIT Bhopal (2021-2025)**: B.Tech Information Technology
- Timeline format with key achievements

### Projects Section
- **AI Diet Planner**: React + Gemini API + OpenAI
  - Live Demo: https://dietly-aman.vercel.app/diet
- **Chatify**: MERN + Socket.io
  - Live Demo: https://chatify-ampo.onrender.com/login
- Interactive project cards with hover effects

### Achievements Section
- **Indian Air Force Selection (2021)**
- **All India Rank 103, IMO (2017)**
- **Cricket Captain at IIIT Bhopal**
  - Silver at IIM Indore
  - Bronze at IIIT Gwalior

### Contact Section
- Contact form with EmailJS integration
- Social media links
- Contact information
- Call-to-action buttons

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aman-singh/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📧 Contact Form Setup

The contact form is currently configured to use **Formspree**, which is more reliable than EmailJS. Here are the setup options:

### Option 1: Formspree (Current Setup)
1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Replace the form endpoint in `src/components/Contact.jsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### Option 2: Netlify Forms (If deploying on Netlify)
1. Add `data-netlify="true"` to your form
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Use the `ContactNetlify.jsx` component instead

### Option 3: EmailJS (Alternative)
If you prefer EmailJS:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/components/Contact.jsx`:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### Option 4: Simple HTML Form (Fallback)
For a basic solution, you can use a simple HTML form that opens the user's email client:
```html
<form action="mailto:amansingh947860@gmail.com" method="post" enctype="text/plain">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Email</button>
</form>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The project includes a `vercel.json` file for optimal deployment settings.

### Other Platforms

The project can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🎨 Customization

### Colors and Themes
- Modify color schemes in Tailwind CSS classes
- Update gradient colors in component files
- Customize animations in `App.css`

### Content
- Update personal information in component files
- Add/remove projects in `Projects.jsx`
- Modify skills in `Skills.jsx`
- Update contact information in `Contact.jsx`

### Animations
- Adjust animation timings in Framer Motion variants
- Add new animations using Framer Motion
- Customize hover effects and transitions

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Contact

- **Email**: aman.singh@example.com
- **LinkedIn**: [linkedin.com/in/aman-singh](https://linkedin.com/in/aman-singh)
- **GitHub**: [github.com/aman-singh](https://github.com/aman-singh)
- **LeetCode**: [leetcode.com/aman-singh](https://leetcode.com/aman-singh)

---

Made with ❤️ by Aman Singh