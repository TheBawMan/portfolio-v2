import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const josefinSans = Josefin_Sans({ subsets: ["latin"], weight:["100","200","300","400","500","600","700",], variable: '--font-josefinSans', });

export const metadata = {
  title: "TheBawMan",
  description: "TheBawMan",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefinSans.variable}>
        <Header/>
        <PageTransition>
        {children}
        </PageTransition>
        </body>
    </html>
  );
}
