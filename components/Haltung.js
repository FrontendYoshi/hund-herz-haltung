import Image from "next/image";
import Link from "next/link";

export default function Haltung() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-softWhite">
      {/* 1. Abschnitt: Einleitung */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-rust mb-6 font-accent">
          Unsere Haltung
        </h1>
        <p className="text-lg text-heartBlack mb-4">
          Wir sind eine queerfeministische Community aus Berlin. Wir stehen für
          eine klare antifaschistische, antirassistische und queerfeministische
          Haltung. Unsere Liebe zu Hunden ist politisch – mit Herz, Haltung und
          Hund verbinden wir Fürsorge, Verantwortung und Solidarität, nicht nur
          mit unseren Tieren, sondern auch miteinander.{" "}
        </p>
      </section>

      {/* 2. Abschnitt: Haltungskarten */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-[#f77f00] mb-2">
              Solidarität
            </h2>
            <p className="text-gray-700">
              Wir unterstützen uns gegenseitig, hören zu und handeln gemeinsam –
              auch über Hundethemen hinaus.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-[#f77f00] mb-2">
              Queerness feiern
            </h2>
            <p className="text-gray-700">
              Unsere Räume sind offen für alle Identitäten. Wir schaffen
              Sichtbarkeit und feiern queeres Leben – laut & bunt.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-[#f77f00] mb-2">
              Politisch sein
            </h2>
            <p className="text-gray-700">
              Wir verstehen Hundespaziergänge als politische Praxis – sichtbar
              im Stadtraum, achtsam im Umgang.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-[#f77f00] mb-2">
              Awareness & Schutz
            </h2>
            <p className="text-gray-700">
              Awareness bedeutet für uns, Grenzen zu achten, Räume sicher zu
              gestalten und Verantwortung zu übernehmen.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Abschnitt: Bild */}
      <section className="mb-12">
        <img
          src="/Images/Haltung.png"
          alt="Haltung mit Hund und Herz"
          width={400}
          height={300}
          className="rounded-xl shadow-lg mx-auto"
        />
      </section>

      {/* 4. Abschnitt: Linkliste */}
      <section>
        <h2 className="text-4xl font-bold text-rust mb-6 font-accent">
          Soli-Gruppen & Netzwerke
        </h2>
        <ul className="space-y-4 text-heartBlack">
          <li className="flex items-center">
            <Link
              href="https://example.com"
              className="text-mustard hover:text-rust transition-all duration-300"
            >
              Queere Dogs Berlin
            </Link>
            <p className="ml-4 text-sm text-gray-600">
              Austausch & Soliaktionen für queere Hundemenschen
            </p>
          </li>
          <li className="flex items-center">
            <Link
              href="https://anotherexample.com"
              className="text-mustard hover:text-rust transition-all duration-300"
            >
              Tierärzt*innen gegen Faschismus
            </Link>
            <p className="ml-4 text-sm text-gray-600">Vernetzung & Bildung</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
