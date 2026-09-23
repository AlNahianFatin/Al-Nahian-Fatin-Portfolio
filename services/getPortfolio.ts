// import { prisma } from "../lib/prisma";
// import { unstable_noStore as noStore } from "next/cache";

// export async function getPortfolio() {
//     noStore();
//     const [profile, education, skills, projects, publications, socials, resume, settings, experience] = await Promise.all([
//         prisma.profile.findFirst(),

//         prisma.education.findMany({
//             where: { isActive: true },
//             orderBy: { sortOrder: "asc" }
//         }),

//         prisma.skill.findMany({
//             where: { isActive: true },
//             orderBy: { sortOrder: "asc" }
//         }),

//         prisma.project.findMany({
//             where: { isActive: true },
//             orderBy: [
//                 { featured: "desc" },
//                 { sortOrder: "asc" }]
//         }),

//         prisma.publication.findMany({
//             where: { isActive: true },
//             orderBy: { sortOrder: "asc" }
//         }),

//         prisma.socialLink.findMany({
//             where: { isActive: true },
//             orderBy: { sortOrder: "asc" }
//         }),

//         prisma.resume.findMany({
//             where: { isActive: true },
//             orderBy: { updatedAt: "desc" }
//         }),

//         prisma.portfolioSetting.findMany(),

//         prisma.experience.findMany({
//             where: { isActive: true },
//             orderBy: { startDate: "desc" }
//         })
//     ]);

//     return {
//         profile, education, skills, projects, experience, publications, socials, resume, settings: Object.fromEntries(
//             settings.map(s => [s.key, s.value])
//         )
//     };
// }

import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "../lib/prisma";

export async function getPortfolio() {
    // Opt this out of any static/data caching so every request hits the DB
    // directly, the same way /api/setting already does for the contact form.
    noStore();

    const [
        profile,
        education,
        skills,
        projects,
        publications,
        socials,
        resume,
        settings,
        experience,
    ] = await Promise.all([
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

        prisma.resume.findMany({
            where: { isActive: true },
            orderBy: { updatedAt: "desc" }
        }),

        prisma.portfolioSetting.findMany(),

        prisma.experience.findMany({
            where: { isActive: true },
            orderBy: { startDate: "desc" }
        })
    ]);

    return {
        profile, education, skills, projects, experience, publications, socials, resume, settings: Object.fromEntries(
            settings.map(s => [s.key, s.value])
        )
    };
}