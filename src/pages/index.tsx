import Cards from "@/components/Cards";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
<main className="relative min-h-screen w-screen overflow-hidden">
  <Nav />
  <Hero />
  <Cards />
  <Featured />
</main>

  );
}


