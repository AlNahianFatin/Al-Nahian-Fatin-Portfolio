# Al nahian Fatin Portfolio

A modern, database-driven Next.js portfolio. Portfolio content is managed from the separate dashboard project.

## Stack
Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Nodemailer.

## Setup
1. Copy `.env.example` to `.env`.
2. Put your PostgreSQL `DATABASE_URL` in `.env`.
3. For Gmail SMTP, use a Gmail App Password, not your normal Gmail password.
4. Install dependencies: `npm install`
5. Generate Prisma client: `npm run db:generate`
6. Push schema: `npm run db:push`
7. Seed sample content: `npm run db:seed`
8. Start: `npm run dev`

Default portfolio URL: http://localhost:3000

The dashboard project uses the same database. Update portfolio records there after its setup.

## CV
Create a `public/cv.pdf` if you want a local PDF, or set the active Resume record's `fileUrl` from the dashboard to a hosted PDF.
