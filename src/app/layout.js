import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Green Gust Energy",
  description: "Sustainable energy solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-w-[350px]`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
