# 🎬 Bashir Garguom - Filmmaker Portfolio

A professional portfolio website for **Bashir Garguom**, showcasing expertise in visual storytelling, documentary filmmaking, and commercial video production.

## 🌟 Live Demo

**[View Live Portfolio](https://same7-redaa.github.io/Bashir-/)**

## 📸 Screenshots

![Hero Section](./public/Generated%20Image%20October.png)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🎬 Interactive Portfolio**: Dynamic image gallery with category filtering
- **⚡ Smooth Animations**: Scroll-triggered animations using Intersection Observer
- **🖼️ Image Modal**: Full-screen image viewing with detailed information
- **📊 Project Statistics**: Visual representation of work categories
- **📧 Contact Integration**: Professional contact form and social links
- **🚀 Performance Optimized**: Fast loading with modern web technologies

## 🛠️ Built With

- **[React 19](https://react.dev/)** - UI Framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Vite](https://vitejs.dev/)** - Build Tool
- **Custom Hooks** - Scroll animations and UI interactions

## 📁 Project Structure

```
bashir-garguom/
├── components/           # React components
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # About me section  
│   ├── Portfolio.tsx    # Portfolio gallery
│   ├── PortfolioPage.tsx # Full portfolio page
│   ├── Services.tsx     # Services offered
│   ├── Skills.tsx       # Skills showcase
│   ├── Contact.tsx      # Contact form
│   ├── Header.tsx       # Navigation
│   └── Footer.tsx       # Footer section
├── hooks/               # Custom React hooks
│   ├── useInView.ts     # Intersection observer
│   └── useScrollAnimation.ts # Scroll animations
├── public/              # Static assets
├── constants.tsx        # App constants and data
├── types.ts            # TypeScript definitions
└── App.tsx             # Main application
```

## 🎯 Portfolio Sections

### 📖 About Me
- Educational background (Higher Diploma in IT)
- Professional experience timeline
- Current role at Baseline Agency

### 🎬 Services
- **Visual Content Production** - Commercial content and event coverage
- **Documentary Filmmaking** - Impactful storytelling for organizations
- **Creative Collaboration** - Working with diverse clients

### 💼 Portfolio Categories
- **Documentary** - WHO, WFP projects
- **Commercial** - Brand campaigns and promotions  
- **Creative** - Personal artistic projects
- **Corporate** - Training and educational content

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/same7-redaa/Bashir-.git
   cd Bashir-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🎨 Customization

### Adding New Portfolio Items

Edit `constants.tsx` to add new portfolio projects:

```typescript
export const PORTFOLIO: PortfolioItem[] = [
  {
    image: 'path/to/image.jpg',
    title: 'Project Title',
    category: 'Documentary', // or 'Commercial', 'Creative', 'Corporate'
    description: 'Project description...'
  }
];
```

### Updating Personal Information

Update contact details and social links in `constants.tsx`:

```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', icon: InstagramIcon, url: 'your-instagram-url' },
  // Add more social links...
];
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Perfect layout for tablets
- **Desktop Enhanced**: Rich desktop experience
- **Touch Interactions**: Mobile-friendly touch gestures

## ⚡ Performance Features

- **Code Splitting**: Automatic bundle optimization
- **Image Optimization**: Efficient image loading
- **Lazy Loading**: Content loads as needed
- **Minimal Bundle**: Optimized for fast loading

## 🎬 Animation Features

- **Scroll Animations**: Elements animate as they enter viewport
- **Smooth Transitions**: Fluid state changes
- **Interactive Hover Effects**: Engaging user interactions
- **Auto-playing Gallery**: Dynamic portfolio showcase

## 📞 Contact Information

- **Email**: alibesho800@gmail.com
- **Phone**: +218 92 123 4567
- **Location**: Libya

## 🔗 Social Links

- **Instagram**: [@bashir_garguom](https://instagram.com/bashir_garguom)
- **YouTube**: [@bashirgarguom](https://youtube.com/@bashirgarguom)
- **Vimeo**: [bashirgarguom](https://vimeo.com/bashirgarguom)
- **LinkedIn**: [bashir-garguom](https://linkedin.com/in/bashir-garguom)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/same7-redaa/Bashir-/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ by [Bashir Garguom](https://github.com/same7-redaa)**