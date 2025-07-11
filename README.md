# Daniel Iofin - Personal Website

A modern, responsive personal website built with Next.js and Tailwind CSS, featuring smooth animations and a clean design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and structured data
- **Contact Form**: Interactive contact form for easy communication
- **Social Links**: Integration with GitHub, LinkedIn, and other social platforms

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/danieliofin/danieliofin.com.git
cd danieliofin.com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
danieliofin.com/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience section
│   ├── Projects.tsx      # Projects section
│   └── Contact.tsx       # Contact section
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  background: '#0a0a0a',
  foreground: '#ffffff',
  primary: '#3b82f6',
  secondary: '#64748b',
}
```

### Content
- Update personal information in each component
- Modify project details in `components/Projects.tsx`
- Update experience in `components/Experience.tsx`
- Change social links in `components/Contact.tsx`

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes
- Custom CSS classes are defined in the `@layer components` section

## 📱 Sections

1. **Hero**: Introduction with animated text and social links
2. **About**: Personal information and skills
3. **Experience**: Work history and timeline
4. **Projects**: Featured projects with descriptions
5. **Contact**: Contact form and social links

## 🚀 Deployment

### GitHub Pages (Current Setup)
This project is configured to deploy automatically to GitHub Pages:

1. **Automatic Deployment**: The site deploys automatically when you push to the `main` branch
2. **Manual Deployment**: Run `npm run deploy` to build and deploy manually
3. **Build**: Run `npm run build:static` to build for static hosting

### Vercel (Alternative)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project for production:
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: daniel@danieliofin.com
- **GitHub**: [@danieliofin](https://github.com/danieliofin)
- **LinkedIn**: [Daniel Iofin](https://linkedin.com/in/daniel-iofin)

---

Built with ❤️ using Next.js and Tailwind CSS
