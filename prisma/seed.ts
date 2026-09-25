import { PrismaClient, TechnicalSkillCategory } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.upsert({
    where: { id: "profile-main" },
    update: {},
    create: {
      id: "profile-main",
      name: process.env.NEXT_PUBLIC_USER_NAME || "User name",
      title: "Full-Stack Developer",
      shortBio: "I build modern, reliable and user-friendly web applications.",
      aboutTitle: "Building useful software with clean engineering",
      aboutDescription: "I am a Computer Science student and developer focused on modern web development, backend engineering and database-driven applications.",
      location: "Bangladesh",
      availability: "Open to interesting projects",
      email: process.env.NEXT_PUBLIC_USER_EMAIL || "admin@example.com"
    }
  });

  const socials = [
    ["GitHub", "GitHub", process.env.GITHUB_LINK || "https://www.github.com", "github"],
    ["LinkedIn", "LinkedIn", process.env.LINKEDIN_LINK || "https://www.linkedin.com", "linkedin"],
    ["Facebook", "Facebook", process.env.FACEBOOK_LINK || "https://www.facebook.com", "facebook"],
    ["Gmail", "Gmail", `mailto:${process.env.NEXT_PUBLIC_USER_EMAIL || "admin@example.com"}`, "mail"],
  ];
  for (let i = 0; i < socials.length; i++) {
    const [platform, label, url, icon] = socials[i];
    await prisma.socialLink.upsert({
      where: { id: `social-${i + 1}` },
      update: { platform, label, url, icon },
      create: { id: `social-${i + 1}`, platform, label, url, icon, sortOrder: i + 1 }
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
      sortOrder: 1
    }
  });

  const skills: [string, TechnicalSkillCategory, number][] = [
    ["C#", TechnicalSkillCategory.LANGUAGE, 85],
    ["JavaScript", TechnicalSkillCategory.LANGUAGE, 90],
    ["TypeScript", TechnicalSkillCategory.LANGUAGE, 85],
    ["React", TechnicalSkillCategory.WEB, 90],
    ["Next.js", TechnicalSkillCategory.WEB, 85],
    ["Node.js", TechnicalSkillCategory.WEB, 88],
    ["Express.js", TechnicalSkillCategory.WEB, 88],
    ["NestJS", TechnicalSkillCategory.WEB, 80],
    ["Prisma", TechnicalSkillCategory.DATABASE, 85],
    ["PostgreSQL", TechnicalSkillCategory.DATABASE, 88],
    ["MySQL", TechnicalSkillCategory.DATABASE, 82],
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
        sortOrder: i + 1,
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
      sortOrder: 1
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
      sortOrder: 2
    }
  });

  await prisma.portfolioSetting.upsert({
    where: { key: "heroViewProjectsText" },
    update: { value: "Explore my works" },
    create: { key: "heroViewProjectsText", value: "Explore my works" }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "educationHeadingText" },
    update: { value: "Academic timeline" },
    create: { key: "educationHeadingText", value: "Academic timeline" }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "educationDescriptionText" },
    update: { value: "From one academic milestone to the next." },
    create: { key: "educationDescriptionText", value: "From one academic milestone to the next." }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "skillHeadingText" },
    update: { value: "My toolkits" },
    create: { key: "skillHeadingText", value: "My toolkits" }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "projectHeadingText" },
    update: { value: "Things I've built" },
    create: { key: "projectHeadingText", value: "Things I've built" }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "projectDescriptionText" },
    update: { value: "A visual archive of my selected works." },
    create: { key: "projectDescriptionText", value: "A visual archive of my selected works." }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "experienceHeadingText" },
    update: { value: "Where I've contributed" },
    create: { key: "experienceHeadingText", value: "Where I've contributed" }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "publicationHeadingText" },
    update: { value: "Research & publications" },
    create: { key: "publicationHeadingText", value: "Research & publications" }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "contactHeadingText" },
    update: { value: "Let's build something." },
    create: { key: "contactHeadingText", value: "Let's build something." }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "contactDescriptionText" },
    update: { value: "Have a project, opportunity, or question? Send a message and I'll get back to you." },
    create: { key: "contactDescriptionText", value: "Have a project, opportunity, or question? Send a message and I'll get back to you." }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "portfolioMetadataTitle" },
    update: { value: `${process.env.NEXT_PUBLIC_USER_NAME} | Full-Stack Developer` },
    create: { key: "portfolioMetadataTitle", value: `${process.env.NEXT_PUBLIC_USER_NAME} | Full-Stack Developer` }
  });
  await prisma.portfolioSetting.upsert({
    where: { key: "portfolioMetadataDescription" },
    update: { value: `Personal portfolio of ${process.env.NEXT_PUBLIC_USER_NAME}.` },
    create: { key: "portfolioMetadataDescription", value: `Personal portfolio of ${process.env.NEXT_PUBLIC_USER_NAME}.` }
  });

  console.log("Portfolio seed complete.");
}

main().finally(() => prisma.$disconnect());
