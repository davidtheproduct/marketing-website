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

### Design & Styling

The project uses Tailwind CSS for styling. You can customize:

#### **Colors & Branding**
- **Primary Colors**: Edit `tailwind.config.js` to change your brand colors
- **Color Palette**: Update the `primary` and `secondary` color schemes
- **Custom Colors**: Add new color variables for specific use cases

#### **Component Styling**
- **Individual Components**: Modify styles in `src/components/` files
- **Page Layouts**: Update page-specific styles in `src/pages/` files
- **Responsive Design**: Adjust breakpoints and mobile layouts
- **Animations**: Customize Framer Motion animations for different effects

#### **Layout & Structure**
- **Header/Footer**: Edit `src/components/Header.tsx` and `src/components/Footer.tsx`
- **Navigation**: Modify menu structure and styling
- **Page Layouts**: Update the overall page structure in `src/App.tsx`
- **Grid Systems**: Adjust the responsive grid layouts

#### **Typography & Spacing**
- **Fonts**: Update font families in `tailwind.config.js`
- **Text Sizes**: Modify heading and body text sizes
- **Spacing**: Adjust padding, margins, and component spacing
- **Line Heights**: Customize text readability and spacing

### Content Management

#### **CMS Content (Recommended for Non-Technical Users)**
- **CMS Fields**: Modify `public/admin/config.yml` to add/remove content fields
- **Content Structure**: Update the CMS collections and field types
- **Media Uploads**: Configure image and file upload settings

#### **Direct File Editing (For Developers)**
- **Markdown Files**: Edit content directly in `src/content/` files
- **Default Content**: Update fallback content in `src/hooks/useContent.ts`
- **Content Types**: Modify TypeScript interfaces for content structure

### Adding New Features

#### **New Pages**
1. Create a new page component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Add navigation links in `src/components/Header.tsx`
4. Create CMS configuration in `public/admin/config.yml`
5. Add content file in `src/content/`

#### **New Components**
1. Create reusable components in `src/components/`
2. Import and use them in your pages
3. Add to the CMS if the component needs editable content

#### **New Animations**
1. Import additional Framer Motion components
2. Add animation variants and transitions
3. Apply to existing or new components

## Workflow Guide

### **When to Use Each Editing Method**

#### **Content Changes (Text, Images, Data)**
- **Use CMS Admin**: `/admin` interface for regular content updates
- **Use Code Editor**: For bulk content changes or initial setup
- **Avoid Conflicts**: Don't edit the same content in both places simultaneously

#### **Design Changes (Styling, Layout, Components)**
- **Use Code Editor**: Always edit design in Cursor/your preferred editor
- **Never Use CMS**: Design changes should never be made through the CMS
- **Test Locally**: Use `npm start` to preview design changes before deploying

#### **New Features (Pages, Components, Functionality)**
- **Use Code Editor**: All new features require code changes
- **Follow Structure**: Use the existing patterns and file organization
- **Update CMS**: Add new content fields to CMS if needed

### **Development Workflow**

1. **Make Changes**: Edit files in your code editor
2. **Test Locally**: Run `npm start` to preview changes
3. **Commit Changes**: `git add . && git commit -m "Description"`
4. **Push to GitHub**: `git push origin main`
5. **Deploy**: Netlify automatically deploys from GitHub

### **CMS Workflow**

1. **Access CMS**: Go to `your-site.netlify.app/admin`
2. **Edit Content**: Use the visual interface to update content
3. **Publish**: Click "Publish" to save changes
4. **Auto-Deploy**: Changes are automatically committed and deployed

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
