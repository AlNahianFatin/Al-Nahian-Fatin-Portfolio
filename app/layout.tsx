import { Nav } from "../components/Nav";
import Providers from "../components/Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${process.env.USER_NAME || "User name"} | Full-Stack Developer`,
  description: `Personal portfolio of ${process.env.USER_NAME || "User name"}.`,
  icons: {
    icon: "/PortfolioLogo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
