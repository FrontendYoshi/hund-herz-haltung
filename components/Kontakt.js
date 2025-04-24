"use client";

import Link from "next/link";
import { useState } from "react"; // Mit useState können wir Daten im Zustand speichern und aktualisieren
// Komponentenstruktur
export default function Kontakt() {
  //Formulardaten speichern
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //Datenänderung beim tippen
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });  //e steht für Ergebnis(Benutzeraktion), Funktion wird aufgerufen, wenn Benutzer*innen etwas im Formular eingibt. e.target.name wird verwendet um dynamisch den Namen des Formularfeldes zu aktualisieren.
  //Formular senden
  const handleSubmit = (e) => {
    e.preventDefault(); // verhindert, dass das Formular die Seite neu lädt (was normalerweise passiert)
    console.log("Formulardaten:", formData); // eingegebene Formulardaten werden in Konsole angezeigt (kann ich später nutzen um die Daten zu senden)
    alert("Danke für deine Nachricht!"); // Bestätigungsnachricht
    setFormData({ name: "", email: "", message: "" }); // Formulardaten werden zurück auf leer gesetzt, damit die Benutzer*innen das Formular erneut ausfüllen können
    // Optional: Hier könntest du fetch() oder Axios verwenden, um die Daten zu versenden
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-softWhite rounded-2xl shadow-md">

      <h1 className="text-4xl font-bold text-rust mb-6 font-accent">Kontakt</h1>

      <p className="text-lg text-heartBlack mb-8">
        Du möchtest bei einem Spaziergang mitkommen, hast Fragen oder willst dich vernetzen? 
        Schreib uns eine E-Mail an{" "}
        <Link href="mailto:hallo@hund-herz-haltung.de"
          className="underline text-mustard hover:text-rust transition-all duration-300"
        >
          hallo@hund-herz-haltung.de
        </Link>{" "}
        oder folge uns auf{" "}
        <Link href="https://instagram.com/hundherzhaltung"
          target="_blank"
          className="underline text-mustard hover:text-rust transition-all duration-300"
        >
          Instagram @hundherzhaltung
        </Link>.
      </p>
      {/* Formular wird erstellt */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-heartBlack mb-2">Dein Name</label>
          <input
            type="text"
            name="name"
            value={formData.name} // zeigt aktuellen Wert an d.h. es zeigt den Namen, den die Benutzer*innen eingegeben haben
            onChange={handleChange} // onChange sorgt dafür, dass der Wert des Namens immer aktualisiert wird, wenn die Benutzer*innen etwas eingeben
            required // bedeutet, dass das Feld ausgefüllt sein muss, bevor das Formular abgeschickt werden kann
            className="w-full border border-mustard rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-mustard bg-white text-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-heartBlack mb-2">E-Mail-Adresse</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-mustard rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-mustard bg-white text-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-heartBlack mb-2">Nachricht</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-mustard rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-mustard bg-white text-gray-800"
            placeholder="Worum geht's?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-mustard hover:bg-rust text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
        >
          Nachricht senden
        </button>
      </form>
    </div>
  );
}
