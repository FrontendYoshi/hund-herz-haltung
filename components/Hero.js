"use client";
import Image from "next/image";
import Link from "next/link";
import AuthButtons from "./AuthButton";
import Button from "./Button";
import Login from "./Login";
import { useState } from "react";

export default function Hero() {
  const handleClick = () => {
    alert("Abonniere unseren Newsletter und verpasse nie mehr etwas!!");
  };

  const [showLogin, setShowLogin] = useState(false); //tate, der speichert, ob das Login-Modal angezeigt wird (true) oder nicht (false).


  return (
    <div className="bg-amber-200 text-black py-16 px-4 sm:px-8">
      {/* Navigation */}
      <nav className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-4">
          <img
            src="/Images/Logo.png "
            alt="Logo: Hund mit Halstuch Antifa"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-3xl font-bold text-gray-900">Hund, Herz, Haltung</span>
        </div>
        <ul className="flex space-x-6">
          <li className="text-lg text-gray-800 hover:text-gray-500 transition duration-200">
            <Link href="/community" className="flex items-center">
              <span dangerouslySetInnerHTML={{ __html: "<box-icon type='solid' name='heart'></box-icon>" }} />
              Community
            </Link>
          </li>
          <li className="text-lg text-gray-800 hover:text-gray-500 transition duration-200">
            <Link href="/haltung" className="flex items-center">
              <span dangerouslySetInnerHTML={{ __html: "<box-icon name='hot' type='solid'></box-icon>" }} />
              Haltung
            </Link>
          </li>
          <li className="text-lg text-gray-800 hover:text-gray-500 transition duration-200">
            <Link href="/kontakt" className="flex items-center">
              <span dangerouslySetInnerHTML={{ __html: "<box-icon type='solid' name='megaphone'></box-icon>" }} />
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8">
          <img
            src="/Images/HundAntifa.png"
            alt="Hund mit Halstuch und Antifa-Stern"
            width={400}
            height={400}
            className="mx-auto rounded-2xl shadow-xl"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Hund, Herz, Haltung – Queere, linke Hundemenschen aus Berlin vernetzen sich
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-700">
          Ob Spaziergänge, Austausch oder Soli-Aktionen – wir verbinden Politik
          mit Pfotenliebe.
        </p>

        {/* Buttons nebeneinander */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleClick}
            className="bg-amber-600  hover:bg-gray-100 text-white font-semibold py-2 px-6 rounded-xl border border-[#b83c3c]"
          >
            <span dangerouslySetInnerHTML={{ __html: "<box-icon type='solid' name='user-plus'></box-icon>" }} />
            Be Part of it
          </button>

          <button
            onClick={() => setShowLogin(true)} // ändert den showLogiin State auf true, damit LogIn angezeigt wird
            className="bg-amber-600  hover:bg-gray-100 text-white font-semibold py-2 px-6 rounded-xl border border-[#b83c3c]"
          >
            Einloggen
          </button>
        </div>

        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </div>

      {/* Über die Seite */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Worum geht's?</h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Wir sind queere, linke Hundemenschen aus Berlin, die sich vernetzen,
          austauschen und gemeinsam aktiv sind - für mehr Sichtbarkeit,
          Solidarität und Spaß beim Gassigehen.
        </p>
      </section>

      {/* Nächste Events */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nächste Events</h2>
        <ul className="space-y-2">
          <li className="text-lg text-gray-800">Sonntag, 28. April - Spaziergang im Volkspark Friedrichshain</li>
          <li className="text-lg text-gray-800">1. Mai - Demo & Soli-Stand am Mariannenplatz</li>
          <li className="text-lg text-gray-800">12. Mai - QueerDogWalk mit Awareness-Team</li>
        </ul>
      </section>

      {/* Letzte Blogposts */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Letzte Blogposts</h2>
        <ul className="space-y-2">
          <li className="text-lg text-gray-800">
            <strong>Demo mit Hund</strong> – Wie wir laut und sichtbar protestieren können
          </li>
          <li className="text-lg text-gray-800">
            <strong>Hundfutter-Tipps</strong> – Nachhaltig füttern mit regionalen Produkten
          </li>
          <li className="text-lg text-gray-800">
            <strong>Politisch reflektiert</strong> – Warum queere Sichtbarkeit auch bei Hundespaziergängen zählt
          </li>
        </ul>
      </section>
    </div>
  );
}
