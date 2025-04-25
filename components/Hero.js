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

  const [showLogin, setShowLogin] = useState(false); //State, der speichert, ob das Login-Modal angezeigt wird (true) oder nicht (false).

  return (
    <div className="bg-amber-200 text-black py-16 px-4 sm:px-8">
      {/* Navigation */}
      <nav className="flex items-center justify-between mb-12">
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
        <ul className="flex space-x-6">
          <li className="text-lg text-gray-800 hover:text-gray-500 transition duration-200">
            <Link href="/community" className="flex items-center">
              <i className="bx bxs-heart mr-2 text-xl text-[#b83c3c]"></i>
              Community
            </Link>
          </li>
          <li className="text-lg text-gray-800 hover:text-gray-500 transition duration-200">
            <Link href="/haltung" className="flex items-center">
              <i className="bx bxs-hot mr-2 text-xl text-[#b83c3c]"></i>
              Haltung
            </Link>
          </li>
          <li className="text-lg text-gray-800 hover:text-gray-500 transition duration-200">
            <Link href="/kontakt" className="flex items-center">
              <i className="bx bxs-megaphone mr-2 text-xl text-[#b83c3c]"></i>
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
          Hund, Herz, Haltung – Queere, linke Hundemenschen aus Berlin vernetzen
          sich
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-700">
          Ob Spaziergänge, Austausch oder Soli-Aktionen – wir verbinden Politik
          mit Pfotenliebe.
        </p>

        {/* Buttons nebeneinander */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleClick}
            className="bg-black text-yellow-300 font-bold py-3 px-6 rounded-xl border border-black shadow-md hover:bg-[#333] transition duration-300 transform hover:scale-105"
          >
            <i className="bx bxs-user-plus mr-2 text-xl text-white"></i>
            Be Part of it
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="bg-[#b83c3c] hover:bg-[#932828] text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <i className="bx bxs-key mr-2 text-xl text-rust"></i>
            Einloggen
          </button>
        </div>

        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </div>

      {/* Über die Seite */}
      <section className="mt-12 text-center">

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Worum geht&apos;s?</h2>
        
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Wir sind queere, linke Hundemenschen aus Berlin, die sich vernetzen,
          austauschen und gemeinsam aktiv sind - für mehr Sichtbarkeit,
          Solidarität und Spaß beim Gassigehen.
        </p>
      </section>

      {/* Nächste Events */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-rust mb-6">
          Nächste Events
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "28. April – Spaziergang im Volkspark Friedrichshain",
            "1. Mai – Demo & Soli-Stand am Mariannenplatz",
            "12. Mai – QueerDogWalk mit Awareness-Team",
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition transform hover:scale-[1.02]"
            >
              <p className="text-lg text-gray-800">{event}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Letzte Blogposts */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-rust mb-6">
          Letzte Blogposts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-lg text-rust">Demo mit Hund</h3>
            <p className="text-gray-700 text-sm">
              Wie wir laut und sichtbar protestieren können
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-lg text-rust">
              Hundfutter-Tipps
            </h3>
            <p className="text-gray-700 text-sm">
              Nachhaltig füttern mit regionalen Produkten
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-lg text-rust">
              Politisch reflektiert
            </h3>
            <p className="text-gray-700 text-sm">
              Warum queere Sichtbarkeit auch bei Hundespaziergängen zählt
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
