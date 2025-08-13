# Workflow Platform - Marketing Website

A modern, responsive marketing website built with React, TypeScript, and Decap CMS (formerly Netlify CMS) for easy content management.

## Features

- 🎨 **Modern Design**: Beautiful, responsive design with Tailwind CSS
- 📝 **Content Management**: Decap CMS integration for easy content updates
- ⚡ **Fast Performance**: Optimized with React and modern build tools
- 📱 **Mobile First**: Fully responsive across all devices
- 🎭 **Smooth Animations**: Framer Motion for engaging user interactions
- 🔧 **TypeScript**: Full type safety and better developer experience
- 🚀 **Netlify Ready**: Optimized for deployment on Netlify

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Netlify
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd marketing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Development

- **Start dev server**: `npm start`
- **Build for production**: `npm run build`
- **Run tests**: `npm test`
- **Eject from CRA**: `npm run eject`

## Content Management with Decap CMS

### Accessing the CMS

1. Navigate to `/admin` on your deployed site
2. Sign up/login with Netlify Identity
3. Start editing content

### CMS Structure

The CMS is configured with the following collections:

#### Pages Collection
- **Home Page**: Hero content, features, testimonials
- **About Page**: Company information, team members
- **How It Works**: Step-by-step process explanation
- **Contact Page**: Contact information and form
- **FAQs Page**: Frequently asked questions
- **Terms Page**: Terms of service
- **Privacy Page**: Privacy policy

#### Site Settings
- Site title and description
- Logo upload
- Social media links

### Adding New Content

1. Go to `/admin` on your site
2. Select the page you want to edit
3. Update the content using the intuitive interface
4. Click "Publish" to save changes

## Deployment

### Deploy to Netlify

1. **Connect your repository**
   - Push your code to GitHub/GitLab
   - Connect your repository to Netlify

2. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18`

3. **Enable Netlify Identity**
   - Go to Site Settings > Identity
   - Enable Identity service
   - Configure registration preferences

4. **Set up Git Gateway**
   - Go to Site Settings > Identity > Services
   - Enable Git Gateway

5. **Deploy**
   - Netlify will automatically deploy on every push to main branch

### Environment Variables

No environment variables are required for basic functionality. The CMS uses Netlify Identity for authentication.

## Project Structure

```
marketing-website/
├── public/
│   ├── admin/           # Decap CMS files
│   │   ├── index.html   # CMS entry point
│   │   └── config.yml   # CMS configuration
│   └── index.html       # Main HTML file
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── ...
│   ├── hooks/          # Custom hooks
│   │   └── useContent.ts
│   ├── content/        # CMS content files
│   │   ├── home.md
│   │   ├── about.md
│   │   └── ...
│   └── App.tsx         # Main app component
├── netlify.toml        # Netlify configuration
└── package.json
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Edit `tailwind.config.js` for brand colors
- **Components**: Modify component styles in individual files
- **Layout**: Update the layout structure in `App.tsx`

### Content

- **CMS Fields**: Modify `public/admin/config.yml` to add/remove fields
- **Default Content**: Update content in `src/content/` files
- **Page Structure**: Edit page components in `src/pages/`

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Add navigation links in `src/components/Header.tsx`
4. Create CMS configuration in `public/admin/config.yml`
5. Add content file in `src/content/`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@workflowplatform.com or create an issue in this repository.

---

Built with ❤️ using React, TypeScript, and Decap CMS
