import { prisma } from "../lib/prisma";

export async function getPortfolio() {
    const [profile, education, skills, projects, publications, socials, resume, settings] = await Promise.all([
        prisma.profile.findFirst(),

        prisma.education.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: "asc" }
        }),

        prisma.skill.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: "asc" }
        }),

        prisma.project.findMany({
            where: { isActive: true },
            orderBy: [
                { featured: "desc" },
                { sortOrder: "asc" }]
        }),

        prisma.publication.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: "asc" }
        }),

        prisma.socialLink.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: "asc" }
        }),

        prisma.resume.findFirst({
            where: { isActive: true },
            orderBy: { uploadedAt: "desc" }
        }),

        prisma.portfolioSetting.findMany()
    ]);

    return {
        profile, education, skills, projects, publications, socials, resume, settings: Object.fromEntries(
            settings.map(s => [s.key, s.value])
        )
    };
}