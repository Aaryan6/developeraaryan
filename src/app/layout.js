import Navbar from "@/components/Navbar";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Developer Aaryan",
  description: "Generated by create next app",
  icons: {
    icon: "/da-logo.png",
    appleIcon: "/da-logo.png",
    appleStartupIcon: "/da-logo.png",
    msTileImage: "/da-logo.png",
    favicon: "/da-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
