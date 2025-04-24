import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3c2f2f] text-[#fefae0] py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <Image
            src="/images/hund-herz-haltung.png"
            alt="Logo Hund, Herz, Haltung"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="ml-3 text-2xl font-bold tracking-wide">Hund, Herz, Haltung</span>
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
              <li><a href="https://instagram.com/hundherzhaltung" target="_blank" className="hover:text-[#fab1a0]">Instagram</a></li>
              <li><a href="https://twitter.com/hundherzhaltung" target="_blank" className="hover:text-[#fab1a0]">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#ffd166] mb-3">Newsletter</h3>
            <p className="mb-2">Updates zu Spaziergängen & Aktionen</p>
            <form action="#" method="POST" className="space-y-2">
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                className="w-full px-3 py-2 rounded-md bg-[#fffaf0] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e07a5f]"
              />
              <button
                type="submit"
                className="w-full bg-[#e07a5f] hover:bg-[#d94c3d] text-white py-2 px-4 rounded-md font-semibold transition"
              >
                Abonnieren
              </button>
            </form>
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
