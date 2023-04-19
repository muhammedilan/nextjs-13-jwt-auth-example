import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "@/components/Header";

export const metadata = {
  title: "JSON Web Token",
  description: "Authenticate using JSON Web Token",
};

const inter = Poppins({ weight: "600", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body className="container text-[min(4vw,1.25rem)] font-semibold">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}