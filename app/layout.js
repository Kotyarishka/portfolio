import "./globals.css";
import { Fira_Code } from "next/font/google";

import { Header } from "@/lib/blocks/Header";
import { Footer } from "@/lib/blocks/Footer";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "/ Kotyarishka | home 🍕",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
