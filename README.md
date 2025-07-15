# 🌟 GemForge — Google-Powered AI UI Code Generator

**Transform your ideas into production-ready UI code with the power of Google's Gemini AI**

GemForge is a cutting-edge web-based developer tool that leverages Google's advanced AI ecosystem to convert natural language prompts into clean, semantic, and responsive UI code. Whether you're prototyping, learning, or building production applications, GemForge bridges the gap between imagination and implementation.

> 🚀 **Built for the Google Developer Groups (GDG) community** to showcase the transformative power of Google's AI-first development tools.

---

## ✨ Key Features

🤖 **AI-Powered Code Generation** — Generate HTML, React (JSX), and vanilla JavaScript from natural language prompts  
🎤 **Voice-to-Code** — Speak your ideas and watch them transform into code using Chrome's Web Speech API  
📱 **Responsive by Default** — All generated code follows modern responsive design principles  
💾 **Smart History** — Firebase Firestore automatically saves your prompts and generated code  
⚡ **Real-time Preview** — See your generated UI components come to life instantly  
🎨 **Tailwind-First** — Built with Tailwind CSS for consistent, utility-first styling  

---

## 🧠 Powered by Google Technologies

GemForge showcases the seamless integration of multiple Google technologies:

| Component | Google Technology | Purpose |
|-----------|-------------------|---------|
| **AI Engine** | Gemini 2.0 Flash | Natural language to code transformation |
| **AI Framework** | Firebase Genkit | Prompt engineering and AI workflow management |
| **Voice Input** | Web Speech API | Speech-to-text for voice prompts |
| **Data Storage** | Firebase Firestore | Persistent storage for prompts and history |
| **Authentication** | Firebase Auth | User management and session handling |
| **Hosting** | Firebase Hosting | Scalable web deployment |

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS + ShadCN/UI components
- **State Management**: React hooks and Context API

### Backend & AI
- **AI Model**: Google Gemini 2.0 Flash
- **AI Framework**: Firebase Genkit
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth

### Development
- **Package Manager**: npm/yarn
- **Build Tool**: Next.js built-in bundler
- **Deployment**: Vercel + Firebase Hosting ready

---

## 📂 Project Structure

```
studio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── api/               # API routes
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # Base UI components
│   │   ├── forms/             # Form components
│   │   └── layout/            # Layout components
│   ├── ai/
│   │   ├── flows/             # Genkit AI flows
│   │   └── prompts/           # Prompt templates
│   ├── lib/                   # Utility functions
│   │   ├── firebase.ts        # Firebase configuration
│   │   └── utils.ts           # Helper functions
│   └── types/                 # TypeScript definitions
├── public/                    # Static assets
├── .env.local.example         # Environment variables template
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json              # Project dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Firebase project with Firestore enabled
- Google AI API key for Gemini access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anukraticodes/GemForge.git
   cd GemForge/studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in your Firebase and Google AI credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   GOOGLE_AI_API_KEY=your_gemini_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see GemForge in action!

---

## 💡 Usage Examples

### Basic Prompts
```
"Create a hero section with a gradient background, centered heading, and call-to-action button"
"Build a responsive navbar with logo, navigation links, and mobile hamburger menu"
"Design a card component with image, title, description, and action buttons"
```

### Advanced Prompts
```
"Create a dashboard sidebar with collapsible navigation, user profile section, and dark mode toggle"
"Build a pricing table with three tiers, feature comparison, and animated hover effects"
"Design a contact form with validation, success states, and integrated Google Maps"
```

### Voice Commands
Simply click the microphone icon and speak naturally:
- "Create a footer with social media icons"
- "Build a product showcase grid"
- "Design a login form with Google OAuth"

---

## 🎯 Supported Output Formats

| Format | Use Case | Features |
|--------|----------|----------|
| **HTML** | Static websites, prototypes | Semantic HTML5, CSS classes, accessibility |
| **React (JSX)** | Modern web apps | Functional components, hooks, props |
| **JavaScript** | Interactive elements | Vanilla JS, DOM manipulation, events |

---

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Firestore Database
3. Enable Authentication (optional)
4. Add your web app configuration to `.env.local`

### Gemini AI Setup
1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add the key to your environment variables
3. Configure rate limits and safety settings as needed

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

---

## 📈 Roadmap

- [ ] **Component Library Integration** — Support for popular UI libraries
- [ ] **Theme Customization** — Custom color schemes and design tokens
- [ ] **Code Export** — Download generated code as files
- [ ] **Collaboration Features** — Share and collaborate on prompts
- [ ] **API Integration** — RESTful API for external integrations
- [ ] **Mobile App** — React Native companion app

---

## 🏆 Built for GDG

This project was created as part of a **Google Developer Groups (GDG)** showcase to demonstrate:
- Real-world applications of Google's AI technologies
- Best practices for integrating Gemini AI in web applications
- The power of Firebase for rapid prototyping and deployment
- Modern web development with Google's developer tools

---

## 📚 Resources

- [Firebase Genkit Documentation](https://firebase.google.com/genkit)
- [Gemini AI Documentation](https://ai.google.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN/UI Components](https://ui.shadcn.com/)

---

## 👨‍💻 Author

**Anukrati Chaturvedi**  
 🐦 [Twitter](https://twitter.com/anukratiw) | 💼 [LinkedIn](https://linkedin.com/in/anukratichaturvedi)

---

## 🙏 Acknowledgments

- Google Developer Groups for inspiration and community support
- The Firebase and Gemini AI teams for creating amazing developer tools
- The open-source community for continuous innovation

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ for the developer community

</div>