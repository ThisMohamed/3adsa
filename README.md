# 📸 عدسة - Photography Blog

<div align="center">

![Angular](https://img.shields.io/badge/Angular-18+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, RTL-optimized Arabic photography blog built with Angular 18+ standalone components**

[Live Demo](#) · 

</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Screenshots](#-screenshots)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development-commands)
- [Code Quality](#-code-quality)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, minimalist design with dark theme
- 🌐 **RTL Support** - Full right-to-left layout for Arabic content
- 📱 **Responsive Design** - Mobile-first approach using Bootstrap 5
- 🚀 **Standalone Components** - Built with Angular 18+ standalone architecture
- 🔍 **Smart Search** - Real-time article filtering and search
- 📂 **Category Filtering** - Browse articles by photography categories
- 🎯 **View Modes** - Toggle between grid and list article views
- ⚡ **Performance Optimized** - Lazy loading and optimized bundle sizes
- 🎭 **Smooth Animations** - Beautiful transitions and micro-interactions

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://angular.dev/assets/icons/favicon.ico" width="48" height="48" alt="Angular" />
      <br>Angular 20+
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap 5
    </td>
    <td align="center" width="96">
      <img src="https://fontawesome.com/images/logos/fa-brands.svg" width="48" height="48" alt="Font Awesome" />
      <br>Font Awesome
    </td>
  </tr>
</table>


## �📁 Project Structure

```
src/
├── app/
│   ├── blog/          # Blog listing with search & filters
│   ├── home/          # Landing page with featured content
│   ├── whous/         # About us page
│   ├── nav/           # Navigation with mobile menu
│   ├── footer/        # Footer component
│   ├── error/         # 404 error page
│   ├── privacy/       # Privacy policy page
│   ├── terms/         # Terms of service page
│   └── posts.ts       # Mock blog data
├── styles.css         # Global styles & utilities
└── index.html         # Main HTML file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 3adsa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📦 Build

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory, optimized for production deployment.

## 🎨 Available Pages

| Route | Description |
|-------|-------------|
| `/home` | Landing page with hero section and featured articles |
| `/blog` | Blog listing with search, filters, and pagination |
| `/whous` | About us page with team information |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/**` | 404 error page |

## 🔧 Development Commands

```bash
# Start development server
ng serve

# Generate new component
ng generate component component-name

# Run unit tests
ng test

# Build for production
ng build

# List all available schematics
ng generate --help
```

## 🎯 Key Components

### Blog Component
- Real-time search functionality
- Ca� Code Quality

### Clean Architecture
- **Standalone Components** - No NgModules, modern Angular approach
- **Component Scoped CSS** - Isolated styling for each component
- **Centralized Utilities** - Shared styles in global CSS
- **Type Safety** - Full TypeScript implementation
- **Angular Signals** - Modern reactive state management with computed values

### Best Practices
- ✅ Semantic HTML5
- ✅ BEM-inspired CSS naming
- ✅ Optimized bundle size (removed duplicate CSS)
- ✅ Accessibility considerations
- ✅ SEO-friendly structure

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
ng build --configuration production

# Output will be in dist/ directory
```

### Deploy to GitHub Pages

```bash
# Install angular-cli-ghpages
npm install -g angular-cli-ghpages

# Deploy
ng deploy --base-href=/3adsa/
```

### Deploy to Netlify/Vercel

1. Connect your repository
2. Set build command: `ng build --configuration production`
3. Set publish directory: `dist/3adsa/browser`

## 🌟 Highlights

- **50+ Articles** - Rich photography content across multiple categories
- **6 Categories** - Lighting, Portrait, Landscape, Techniques, Equipment
- **24 Team Members** - Showcased on About Us page
- **Fully Responsive** - Works seamlessly on all devices
- **Dark Theme** - Easy on the eyes with orange accent colors

## 📝 Available Scripts

```json
{
  "start": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test"
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- None at the moment

## 🔮 Future Enhancements

- [ ] Add authentication system
- [ ] Implement backend API integration
- [ ] Add comment system for articles
- [ ] Implement article rating
- [ ] Add social sharing
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Advanced search with filters
- [ ] Article bookmarking

## �tegory-based filtering
- Grid/List view toggle
- Pagination support

### Home Component
- Hero section with CTAs
- Featured articles showcase
- Category cards
- Newsletter subscription

### Navigation
- Responsive mobile menu
- Active route highlighting
- Smooth transitions

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ using Angular

---

<div align="center">

**[⬆ Back to Top](#-عدسة---photography-blog)**

</div>
