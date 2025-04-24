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
      <main>
    <Hero/>  
        {/* Zeige die Login/Logout Buttons und den Status an */}
        <section>
         <AuthButtons />
          </section>
  
        {/* Navigation*/}
        <Link href="../components/Login">Auf zur Login-Seite</Link>
        <br/>
        <Link href="/geschützt">Auf zur geschützten Seite</Link>
      </main>
    );
}