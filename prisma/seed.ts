import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.upsert({
    where: { id: "profile-main" },
    update: {},
    create: {
      id: "profile-main",
      name: process.env.USER_NAME || "User name",
      title: "Full-Stack Developer",
      shortBio: "I build modern, reliable and user-friendly web applications.",
      aboutTitle: "Building useful software with clean engineering",
      aboutDescription: "I am a Computer Science student and developer focused on modern web development, backend engineering and database-driven applications.",
      location: "Bangladesh",
      availability: "Open to interesting projects",
      email: process.env.USER_EMAIL || "admin@example.com"
    }
  });

  const socials = [
    ["GitHub", "GitHub", process.env.GITHUB_LINK || "https://www.github.com", "github"],
    ["LinkedIn", "LinkedIn", process.env.LINKEDIN_LINK || "https://www.linkedin.com", "linkedin"],
    ["Facebook", "Facebook", process.env.FACEBOOK_LINK || "https://www.facebook.com", "facebook"],
    ["Gmail", "Gmail", `mailto:${process.env.USER_EMAIL || "admin@example.com"}`, "mail"],
  ];
  for (let i = 0; i < socials.length; i++) {
    const [platform, label, url, icon] = socials[i];
    await prisma.socialLink.upsert({
      where: { id: `social-${i + 1}` },
      update: { platform, label, url, icon },
      create: { id: `social-${i + 1}`, platform, label, url, icon, sortOrder: i }
    });
  }

  await prisma.education.upsert({
    where: { id: "edu-1" },
    update: {},
    create: {
      id: "edu-1",
      institution: process.env.USER_EDUCATION_INSTITUTION || "Educational Institution Example",
      degree: "BSc",
      field: "Computer Science and Engineering",
      startDate: new Date(process.env.USER_EDUCATION_INSTITUTION_START_DATE || "2000-01-01"),
      description: "Studying computer science, software engineering, databases and web development.",
      location: "Dhaka, Bangladesh",
      sortOrder: 0
    }
  });

  const skills: [string, string, number][] = [
    ["C#", "Programming", 85],
    ["JavaScript", "Programming", 90],
    ["TypeScript", "Programming", 85],
    ["React", "Frontend", 90],
    ["Next.js", "Frontend", 85],
    ["Node.js", "Backend", 88],
    ["Express.js", "Backend", 88],
    ["NestJS", "Backend", 80],
    ["Prisma", "Database", 85],
    ["PostgreSQL", "Database", 88],
    ["MySQL", "Database", 82],
  ];

  for (let i = 0; i < skills.length; i++) {
    const [name, category, level] = skills[i];

    await prisma.skill.upsert({
      where: {
        id: `skill-${i + 1}`,
      },
      update: {
        name,
        category,
        level,
      },
      create: {
        id: `skill-${i + 1}`,
        name,
        category,
        level,
        sortOrder: i,
      },
    });
  }

  await prisma.project.upsert({
    where: { id: "project-1" },
    update: {},
    create: {
      id: "project-1",
      title: process.env.USER_PROJECT1_TITLE || "Project 1",
      description: process.env.USER_PROJECT1_DESCRIPTION || "Example description 1",
      githubUrl: process.env.USER_PROJECT1_GITHUB_URL || "https://www.github.com",
      liveUrl: process.env.USER_PROJECT1_LIVE_URL || "Live link 1",
      technologies: ["Next.js", "Express.js", "PrismaORM", "PostgreSQL"],
      featured: true,
      sortOrder: 0
    }
  });

  await prisma.project.upsert({
    where: { id: "project-2" },
    update: {},
    create: {
      id: "project-2",
      title: process.env.USER_PROJECT2_TITLE || "Project 2",
      description: process.env.USER_PROJECT2_DESCRIPTION || "Example description 2",
      githubUrl: process.env.USER_PROJECT2_GITHUB_URL || "https://www.github.com",
      liveUrl: process.env.USER_PROJECT2_LIVE_URL || "Live link 2",
      technologies: ["React", "Vite", "Tailwind CSS", "TVMaze"],
      featured: true,
      sortOrder: 1
    }
  });

  await prisma.portfolioSetting.upsert({
    where: { key: "heroBadge" },
    update: { value: "Available for selected opportunities" },
    create: { key: "heroBadge", value: "Available for selected opportunities" }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "heroCta" },
    update: { value: "Explore my work" },
    create: { key: "heroCta", value: "Explore my work" }
  });

  console.log("Portfolio seed complete.");
}

main().finally(() => prisma.$disconnect());
