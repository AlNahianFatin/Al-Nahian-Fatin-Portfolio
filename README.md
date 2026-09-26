# 🚀 Al Nahian Fatin Portfolio

<div align="center">

![Al Nahian Fatin Portfolio Logo](./public/Al-Nahian-Fatin-Portfolio-Logo.png)

[![GitHub stars](https://img.shields.io/github/stars/AlNahianFatin/Al-Nahian-Fatin-Portfolio?style=for-the-badge)](https://github.com/AlNahianFatin/Al-Nahian-Fatin-Portfolio/stargazers)

[![GitHub forks](https://img.shields.io/github/forks/AlNahianFatin/Al-Nahian-Fatin-Portfolio?style=for-the-badge)](https://github.com/AlNahianFatin/Al-Nahian-Fatin-Portfolio/network)

[![GitHub issues](https://img.shields.io/github/issues/AlNahianFatin/Al-Nahian-Fatin-Portfolio?style=for-the-badge)](https://github.com/AlNahianFatin/Al-Nahian-Fatin-Portfolio/issues)

<!-- [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE) -->

**A modern, dynamic, interactive, and database-driven Next.js portfolio showcasing my projects, skills, and professional journey. Portfolio content is managed from a separate dashboard project.**

[Live Demo](https://al-nahian-fatin-portfolio.vercel.app) 

[Dashboard Repository](https://github.com/AlNahianFatin/Al-Nahian-Fatin-Portfolio-Dashboard) 
</div>

## 📖 Overview

This repository hosts a meticulously crafted personal portfolio website designed to present my work, technical proficiencies, and professional experiences to potential employers and collaborators. Built with the latest web technologies, it offers a seamless and engaging user experience, featuring interactive elements, elegant animations, and a responsive design. The application integrates robust backend functionalities for data management and includes a contact form for direct communication which is delivered to me via Email. The application is integrated with an [admin dashboard](https://github.com/AlNahianFatin/Al-Nahian-Fatin-Portfolio-Dashboard), which allows me to view messages, analytics and manage my portfolio dynamically.

## ✨ Features

-   **Interactive Project Showcase**: Dynamic display of personal and professional projects with detailed descriptions.
-   **Comprehensive Skills Section**: Categorized overview of technical skills and expertise.
-   **Dynamic Content Management**: Backend-driven content for projects, experiences, and skills using Prisma ORM.
-   **Contact Form**: Integrated email service using Nodemailer for direct communication from visitors.
-   **MDX Support**: For rich, markdown-enhanced content creation (e.g., blog posts, detailed project write-ups).
-   **Smooth Animations & Transitions**: Powered by TailwindCSS for a polished and engaging UI.
-   **Responsive Design**: Optimized for a flawless experience across all devices and screen sizes.
-   **Type-Safe Development**: Entire codebase written in TypeScript for improved reliability and maintainability.
-   **Performance Optimized**: Leveraging Next.js for server-side rendering/static site generation and image optimization.

## 🖥️ Screenshots

![Al Nahian Fatin Portfolio Screenshot](./public/Al-Nahian-Fatin-Portfolio.png)

## 🛠️ Tech Stack

### **Frontend:**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### **Backend:**

![Next.js API Routes](https://img.shields.io/badge/Next.js_API-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9D58?style=for-the-badge&logo=nodemailer&logoColor=white)

### **Database:**

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

### **DevOps:**

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 🚀 Quick Start

Follow these steps to get a development environment up and running on your local machine.

### Prerequisites
-   Node.js (v18.x or later)
-   npm (v9.x or later)
-   A PostgreSQL database instance
-   Git

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/AlNahianFatin/Al-Nahian-Fatin-Portfolio.git
    cd Al-Nahian-Fatin-Portfolio
    ```

2.  **Paste your portfolio svg logo in `./public` folder and rename it to `PortfolioLogo.svg`**

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Environment setup**
    Create a `.env` file in the root directory by copying the example:
    ```bash
    cp .env.example .env
    ```
    Configure your environment variables in `.env`:

    | Variable | Description | Example Value | Required |
    | :------------------ | :------------------------------------------------ | :------------------------------------------ | :------- |
    | `NODE_ENV` | Environment of current project version. | `development` | No |
    | `DATABASE_URL` | Connection string for your PostgreSQL database. | `postgresql://user:pass@localhost:5432/db` | Yes |
    | `SMTP_USER` | SMTP user email. | `user@example.com` | Yes |
    | `EMAIL_SENDER` | Email sender email. | `user@example.com` | Yes |
    | `SMTP_PASSWORD` | SMTP app password. | `afge 45kf asd6 4n22` | Yes |
    | `DASHBOARD_URL` | Admin Dashboard URL. | `https://user_dashboard.com` | Yes |
    | `NEXT_PUBLIC_SITE_URL` | Portfolio URL. | `https://user_portfolio.com` | Yes |
    | `NEXT_PUBLIC_USER_NAME` | User name. | `user_name` | Yes |
    | `NEXT_PUBLIC_USER_EMAIL` | User email. | `user@example.com` | Yes |
    | `NEXT_PUBLIC_GITHUB_LINK` | User GitHub link. | `https://github.com/user` | Yes |
    | `NEXT_PUBLIC_LINKEDIN_LINK` | User LinkedIn link. | `https://www.linkedin.com/in/user` | Yes |
    | `NEXT_PUBLIC_FACEBOOK_LINK` | User Facebook link. | `https://www.facebook.com/share/sdgrghgtr53ds` | Yes |
    | `USER_EDUCATION_INSTITUTION` | User last education institute name. | `Area International University, Country` | Yes |
    | `USER_EDUCATION_INSTITUTION_START_DATE` | Starting date of user's joining the institute. | `2000-01-01` | Yes |
    | `USER_PROJECT1_TITLE` | User project 1 title. | `Project 1` | Yes |
    | `USER_PROJECT1_DESCRIPTION` | User project 1 description. | `Project 1 description` | Yes |
    | `USER_PROJECT1_GITHUB_URL` | User project 1 GitHub repository link. | `https://github.com/user/project1` | Yes |
    | `USER_PROJECT1_LIVE_URL` | User project 1 live link. | `https://project1.com` |  Yes   | 
    | `USER_PROJECT2_TITLE` | User project 2 title. | `Project 2` | Yes |
    | `USER_PROJECT2_DESCRIPTION` | User project 2 description. | `Project 2 description` | Yes |
    | `USER_PROJECT2_GITHUB_URL` | User project 2 GitHub repository link. | `https://github.com/user/project1` | Yes |
    | `USER_PROJECT2_LIVE_URL` | User project 2 live link. | `https://project2.com` |  Yes   | 
    | `PORTFOLIO_GITHUB_LINK` | API key for the Resend email service. | `https://github.com/user/portfolio` | Yes |
    | `REVALIDATE_SECRET` | Revalidate secret to sync with dashboard. | `vtrkl34k6k/'43k3knmiMH` (same as in dashboard) | Yes |

5.  **Database setup**
    Apply Prisma migrations and generate the client:
    ```bash
    npm run db:generate
    npm run db:migrate --name init
    ```
    *If you prefer to push your schema directly without migrations (e.g., for quick local setup on a new database):*
    ```bash
    npm run db:push
    ```
    Seed initial data to be able to login:
    ```bash
    npm run db:seed
    ```

6.  **Start development server**
    ```bash
    npm run dev
    ```

7.  **Open your browser**
    Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
Al-Nahian-Fatin-Portfolio/
├── app/                  # Next.js App Router for pages and API routes
│   ├── api/              # Next.js API routes (e.g., for contact form, auth callbacks)
│   ├── [route]/          # Top-level page routes (e.g., home, about, projects)
│   ├── globals.css       # Global styles for the application
│   └── layout.tsx        # Root layout for the application
├── components/           # Reusable React components
│   ├── ui/               # UI components built with Radix UI and styled with Tailwind
│   └── [feature-specific]/ # Components like Header, Footer, ProjectCard, etc.
├── lib/                  # Utility functions, helpers, database client, auth configuration
├── public/               # Static assets (images, fonts, favicons)
├── prisma/               # Prisma schema definitions and migration files
│   └── schema.prisma     # Database schema definition
├── services/             # Logic for interacting with external services or business logic
├── templates/            # EJS email templates for Nodemailer
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration, primarily for Tailwind CSS
├── tsconfig.json         # TypeScript configuration
└── .env.example          # Example environment variables
```

## ⚙️ Configuration

### Environment Variables
Environment variables are managed via the `.env` file. A full list and their descriptions can be found in the [Installation](#installation) section.

### Configuration Files
-   **`next.config.ts`**: Configures Next.js, including MDX support, image optimization (remote patterns), and experimental features like Server Actions.
-   **`postcss.config.mjs`**: Configures PostCSS with Tailwind CSS and Autoprefixer for CSS processing.
-   **`prisma/schema.prisma`**: Defines your database schema and Prisma models.

## 🔧 Development

### Available Scripts
In the project directory, you can run:

| Command | Description |

| :---------------- | :---------------------------------------------------------------------- |

| `npm run dev` | Runs the application in development mode with hot-reloading. |

| `npm run build` | Builds the application for production to the `.next` folder. |

| `npm start` | Starts the Next.js production server. |

| `npm run lint` | Runs ESLint to check for code style and potential errors. |

### Development Workflow
-   **Code Styling**: ESLint is configured to maintain consistent code style.
-   **Database Schema**: Use `npx prisma studio` to view and manage your database data locally.
-   **Type Safety**: TypeScript ensures type safety throughout the development process.

<!-- ## 🧪 Testing

This project currently does not have explicit testing commands configured in `package.json`. However, a robust Next.js application typically uses:
-   **Unit/Integration Tests**: Jest or Vitest with React Testing Library.
-   **End-to-End Tests**: Cypress or Playwright.

To add testing:
1.  Install your preferred testing framework (e.g., `npm install -D jest @testing-library/react @testing-library/jest-dom`).
2.  Configure your `jest.config.js` or `vitest.config.ts`.
3.  Add test scripts to `package.json` (e.g., `"test": "jest"`). -->

## 🚀 Deployment

### Production Build
To create a production-optimized build of the application:
```bash
npm run build
```
This command compiles the Next.js application into static assets and server-side code ready for deployment.

### Deployment Options
This Next.js application is highly suitable for deployment on serverless platforms:
-   **Vercel (Recommended)**: As a Next.js application, it integrates seamlessly with Vercel for continuous deployment, automatic scaling, and global CDN.
-   **Netlify**: Similar to Vercel, Netlify offers excellent support for Next.js applications, including automatic builds and deployments.
-   **Docker**: While not explicitly configured with a Dockerfile, you could containerize the application for deployment on platforms like AWS ECS, Kubernetes, or other container orchestration services.

## 📚 API Reference

This application uses Next.js API Routes for its backend functionalities.

## 🤝 Contributing

We welcome contributions to improve this project! Please follow these guidelines:

1.  **Fork the repository**.
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3.  **Make your changes**, adhering to the existing code style.
4.  **Write clear, concise commit messages**.
5.  **Push your branch** to your forked repository.
6.  **Open a Pull Request** to the `main` branch of this repository, describing your changes in detail.

### Development Setup for Contributors
Ensure you follow the [Quick Start](#quick-start) guide to set up your local development environment. When submitting changes, please ensure your code adheres to the project's coding standards and passes lint checks.

## 📄 License

This project is currently without an explicit license file. 

## 🙏 Acknowledgments

-   **Next.js**: For providing an incredible React framework.
-   **Tailwind CSS**: For simplifying UI development with utility-first CSS.
-   **Prisma**: For an excellent ORM experience.
-   **Nodemailer**: For sending notification via email upon receiving message.
-   **ejs**: For generating beautiful email formatting.
-   **Lucide React & React Icons**: For beautiful and easily customizable open-source icons.
-   **Zod**: For validating viewer message form.

## 📞 Support & Contact

-   🐛 Issues: If you find any bugs or have suggestions, please open an issue on [GitHub Issues](https://github.com/AlNahianFatin/Al-Nahian-Fatin-Portfolio-Dashboard/issues) or send me an [Email](mailto:fatinnahian@gmail.com).

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Al Nahian Fatin](https://github.com/AlNahianFatin)

</div>
