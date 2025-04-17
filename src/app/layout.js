import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parth Hotel",
  description:
    "Welcome to Parth Hotel, your destination for a comfortable and luxurious stay. Book your stay now and experience top-notch service, elegant rooms, and a range of amenities designed to make your visit memorable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#fefcf9] text-gray-800 min-h-screen flex flex-col`}>
        <Navbar className="flex-shrink-0" />
        <main className="flex-grow">
          {children}
        </main>
        <Footer className="flex-shrink-0" />
      </body>
    </html>
  );
}
