import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import AuthButtons from "@/components/AuthButton";
import Button from "@/components/Button";
import MiniForum from "@/components/MiniForum";
import Login from "@/components/Login";

export default function Home() {
  return (
    <main className="bg-amber-200 text-black py-16 px-4 sm:px-8">
      <Hero />
           {/* Footer */}
      <Footer/>
       {/* Navigation*/}
      <div className="mt-10 flex justify-center gap-6 text-sm text-gray-700 underline">
        <Link href="../components/Login">Auf zur Login-Seite</Link>
        <br />
        <Link href="/geschützt">Auf zur geschützten Seite</Link>
      </div>
    </main>
  );
}
