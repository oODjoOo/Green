
## 🎯 Aperçu

**Green** C’est un template minimaliste et moderne conçu pour les développeurs et créatifs numériques. Son esthétique sombre, agrémentée d’accents vert menthe, offre une expérience visuelle épurée, élégante et fonctionnelle, idéale pour les portfolios, tableaux de bord ou pages d’accueil orientées technologie.

## 📁 Project Structure

```bash
└── 📁Green
    └── 📁public
        ├── icônes et images globales
        └── 📁images
            ├── 📁projects # Images des projets
        └── site.webmanifest # Configuration PWA
    └── 📁src
        ├── 📁components   # Composants réutilisables
        │   ├── 📁layout   # Composants de structure
        │   ├── 📁portfolio # Composants portfolio
        │   └── 📁ui       # Composants UI
        ├── 📁icons        # Icônes (.svg)
        ├── 📁layouts      # Layouts du site
        ├── 📁pages        # Pages principales
        │   ├── about-me.md # Page "À propos"
        │   ├── index.astro # Page d’accueil
        │   ├── 📁portfolio
        │   │   └── 📁projects # Projets du portfolio
        │   ├── robots.txt.ts
        │   └── rss.xml.js
        ├── 📁scripts
        │   └── menu.js    # Script du menu
        ├── 📁styles
        │   └── global.css # Styles globaux
        └── 📁utils
            └── languages.ts # Configurations des technologies
    ├── .gitignore
    ├── astro.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

## 🛠️ Stack Technique

- **Framework**: Astro v5.6.1
- **UI Library**: Preact v10.26.2
- **Styling**: TailwindCSS v4.0.8
- **Icons**: astro-icon v1.1.5
- **Syntax Highlighting**: PrismJS v1.30.0
- **Animations**: tailwindcss-animated v2.0.0
- **Analytics**: @vercel/speed-insights v1.2.0

## 🚀 Lancer le projet

1. **📦 Installation**

   ### 🚀**Astro Installation**
   ```bash
   npm create astro@latest -- --template oODjoOo/Green
   ```
   or
   ### 🔧**Manual Installation**
   
   #### Clone Repository
   ```bash
   git clone https://github.com/oODjoOo/Green.git
   ```
   #### Install Dependencies
   ```bash
   npm install
   ```

  

3. **⚡ Development**
   ```bash
   npm run dev
   ```

4. **🏗️ Build**
   ```bash
   npm run build
   ```

5. **👀 Preview**
   ```bash
   npm run preview
   ```

## ⚙️ Configuration

The project is configured through several key files:

- `astro.config.mjs`: Main Astro configuration
- `tailwind.config.js`: TailwindCSS configuration
- `tsconfig.json`: TypeScript configuration

## 🎨 Customization

### 📄 Adding New Pages

Create new `.astro` files in the `src/pages` directory. The file name will determine the route.

### 🔧 Adding New Languages or Technologies

To incorporate a new programming language or technological tool into the site's capsules, follow these steps:

1. **🖼️ Add the SVG icon**: Place the SVG file of the language or tool in the `src/icons` folder.

        > **💡 Recommendation**: For SVG icons, I recommend using [SVGL](https://svgl.app/), an excellent library of high-quality vectors that offers optimized icons for most popular languages and technologies.

2. **📝 Register the language**: Open the `utils/languages.ts` file and add a new entry to the languages object following this format:

   ```typescript
   html: {
       name: "HTML 5",
       iconName: "html",
   },
   ```

   Where:
   - `html`: Is the unique identifier for the language
   - `name`: Is the name that will be displayed visibly in the interface
   - `iconName`: Is the name of the SVG file without the extension (must match exactly with the file name in `src/icons`)

Once these steps are completed, the new language or technology will be available for use in the site's capsules. You can select it when creating or editing projects or posts, and the corresponding icon will be displayed correctly in the interface.

If you encounter any issues during this process, try restarting the development server. In some cases, changes to configuration files or static resources require a restart to be detected correctly.

To verify that the new language has been added correctly, check the list of available technologies in the user interface after restarting the server.

---

### 🧷 Favicon Setup

To customize your site's favicon and web app icons, you can generate all the necessary variants using [favicon.io](https://favicon.io/favicon-converter/). Upload your logo or icon, and the tool will create a full set of optimized files for various devices and platforms.

Place the generated files in the `📂 public` directory as follows:

```bash
📂 public
├── 📄 android-chrome-192x192.png
├── 📄 android-chrome-512x512.png
├── 📄 apple-touch-icon.png
├── 📄 favicon-16x16.png
├── 📄 favicon-32x32.png
├── 📄 favicon.ico
└── 📄 site.webmanifest
```

> 💡 Don’t forget to update the contents of `site.webmanifest` to match your app’s name, description, and theme color for a complete PWA experience.

---

### 🎨 Styling

- Use TailwindCSS classes for styling
- Add custom styles in `src/styles/global.css`

### 🧩 Components

- Create reusable components in `src/components`
- Import icons using `astro-icon`

## 🚀 Deployment

The site is configured for deployment on Vercel, but can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

