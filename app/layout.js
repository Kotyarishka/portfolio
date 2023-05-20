import "./globals.css";
import { Fira_Code } from "next/font/google";

import { Header } from "@/lib/components/Header";

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
      </body>
    </html>
  );
}
