import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // holt das aktuelle Jahr damit ich es automatisch im Copyright anzeigen kann

  return (
    <footer className="bg-[#3c2f2f] text-[#fefae0] py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/Images/Logo.png"
            alt="Logo: Hund mit Halstuch Antifa"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-3xl font-bold text-gray-900">
            Hund, Herz, Haltung
          </span>
        </div>

        {/* Grid-Bereich */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8 text-sm">
          <div>
            <h3 className="font-semibold text-[#ffd166] mb-3">Über uns</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#fab1a0]">Startseite</Link></li>
              <li><Link href="/haltung" className="hover:text-[#fab1a0]">Unsere Haltung</Link></li>
              <li><Link href="/kontakt" className="hover:text-[#fab1a0]">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#ffd166] mb-3">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link href="/datenschutz" className="hover:text-[#fab1a0]">Datenschutz</Link></li>
              <li><Link href="/impressum" className="hover:text-[#fab1a0]">Impressum</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#ffd166] mb-3">Folge uns</h3>
            <ul className="space-y-2">
              <li><Link href="https://instagram.com/hundherzhaltung" target="_blank" className="hover:text-[#fab1a0]">Instagram</Link></li>
              <li><Link href="https://twitter.com/hundherzhaltung" target="_blank" className="hover:text-[#fab1a0]">Twitter</Link></li>
            </ul>
          </div>

           </div>

        {/* Footer-Zeile */}
        <div className="text-center text-sm text-[#fefae0]/70">
          <p>© {currentYear} Hund, Herz, Haltung. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
