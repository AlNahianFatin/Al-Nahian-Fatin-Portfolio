// import { Fraunces, JetBrains_Mono } from "next/font/google";
// import { Nav } from "../components/Nav";
// import Providers from "../components/Providers";
// import { ViewTracker } from "../components/ViewTracker";
// import "./globals.css";
// import type { Metadata } from "next";
// import { getPortfolio } from "../services/getPortfolio";

// const fraunces = Fraunces({
//   subsets: ["latin"],
//   variable: "--font-fraunces",
//   display: "swap",
// });

// const jetbrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   variable: "--font-jetbrains-mono",
//   display: "swap",
// });

// const data = await getPortfolio();
// const profile = data.profile;

// export const metadata: Metadata = {
//   title: `${profile?.name || "User name"} | Full-Stack Developer`,
//   description: `Personal portfolio of ${profile?.name || "User name"}.`,
//   icons: {
//     icon: "/PortfolioLogo.svg",
//   },
// };

// const navData = {
//   profile: profile ? { name: profile.name, } : null,
//   education: data.education.length > 0,
//   skills: data.skills.length > 0,
//   projects: data.projects.length > 0,
//   experience: data.experience.length > 0,
//   publications: data.publications.length > 0,
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
//       <body>
//         <Nav data={navData} />
//         <ViewTracker />
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }


import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Nav } from "../components/Nav";
import Providers from "../components/Providers";
import { ViewTracker } from "../components/ViewTracker";
import "./globals.css";
import type { Metadata } from "next";
import { getPortfolio } from "../services/getPortfolio";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPortfolio();
  const profile = data.profile;

  return {
    title: `${profile?.name || "User name"} | Full-Stack Developer`,
    description: `Personal portfolio of ${profile?.name || "User name"}.`,
    icons: {
      icon: "/PortfolioLogo.svg",
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getPortfolio();
  const profile = data.profile;

  const navData = {
    profile: profile ? { name: profile.name, } : null,
    education: data.education.length > 0,
    skills: data.skills.length > 0,
    projects: data.projects.length > 0,
    experience: data.experience.length > 0,
    publications: data.publications.length > 0,
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Nav data={navData} />
        <ViewTracker />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
