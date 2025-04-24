"use client";
import { signIn } from "next-auth/react";
import { useState } from "react"; // um Daten zu speichern
import { useRouter } from "next/navigation"; // hilft später zur Startseite weiterzuleiten (nach Logn)

export default function Login({ onClose }) {
  // onClose sorgt dafür, dass man die Login-Komponente schließen kann
  {
    /* Zustände damit merkt sich React was los ist */
  }

  const [email, setEmail] = useState(""); // was jmd. ins E-Mail Feld schreibt
  const [password, setPassword] = useState(""); // speichert das PW aus dem Eingabefeld
  const [error, setError] = useState(""); // wenn was schief läuft steht hier der Fehlertext drin
  const [isLoading, setIsLoading] = useState(false); // wenn der Login-Vorgang läuft, wird das auf "true" gesetzt
  const router = useRouter(); // damit kann man später per Code zur Startseite gehen (nach erfolgreichem Login)

  {
    /* Login-Funktion */
  }
  async function handleSubmit(e) {
    e.preventDefault(); // Verhindert das Neuladen der Seite beim Absenden des Formulares
    setError(""); // löscht vorherige Fehler
    setIsLoading(true); // zeigt "Lade..." an, Ladezustand aktivieren

    try {
      // Versuche die Benutzer*innen mit "credentials" anzumelden, versucht sich mit E-Mail und PW einzuloggen - ohne sofort die Seite zu wechseln
      const result = await signIn("credentials", {
        // WICHTIG: redirect: false verhindert, dass next-auth automatisch weiterleitet
        // Wir wollen die Weiterleitung selbst steuern und Fehler anzeigen
        redirect: false, // wir bleiben auf der Seite statt automatisch weiterzuleiten
        email, // Übergib Email aus dem State
        password, // Übergib PW aus dem State
      });

      console.log("Login Result:", result); // Logge das Ergebnis

      // Prüf ob das Ergebnis einen Fehler enthält
      if (result?.error) {
        setError("Anmeldung fehlgeschlagen. Prüfe E-Mail/Passwort."); // Setze Fehlermeldung
        setIsLoading(false); // Ladezustand beenden
      } else if (result?.ok) {
        // Wenn Anmeldung erfolgreich war (result ist ok und kein error)
        setError("");
        router.push("/Login/page"); // Leite zur Startseite weiter
        // setIsLoading muss hier nicht false sein, da wir wegnavigieren
      } else {
        // Fallback für unerwartete Ereignisse, bei anderen Problemen wird auch eine Nachricht angezeigt
        setError("Ein unerwarteter Fehler ist aufgetreten.");
        setIsLoading(false);
      }
    } catch (err) {
      // Fange andere mögliche Fehler ab
      console.error("Login Catch Error:", err);
      setError("Ein unerwarteter Fehler ist aufgetreten.");
      setIsLoading(false);
    }
  }

  // Das JSX für das Formular
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4 py-10">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md border-4 border-[#b83c3c] font-[Inter]">
        {/* Schließen-X im roten Rahmen oben rechts */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-[#b83c3c] hover:text-[#992c2c] font-bold"
          aria-label="Schließen"
        >
          ×
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-[#b83c3c] mb-6">
            Willkommen zurück
          </h2>

          {/* Einloggen */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-3xl font-bold text-center text-[#b83c3c] mb-6">
              Login
            </h2>
            {/* Eingabefeld für E-Mail */}
            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="email"
                className="block text-[#b83c3c] font-bold mb-2"
              >
                E-Mail:
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f4b400] focus:border-[#f4b400]"
              />
            </div>
            {/* Eingabefeld für Passwort */}
            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="password"
                className="block text-[#b83c3c] font-bold mb-2"
              >
                Passwort:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Aktualisiere den State
                required // Pflichtfeld
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f4b400] focus:border-[#f4b400]"
              />
            </div>
            {/* Zeige Fehlermeldung an, falls vorhanden */}
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}{" "}
            {/*Wenn ein Fehler da ist wird er hier angezeigt*/}
            {/* Sende-Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full p-3 bg-[#b83c3c] text-white rounded-xl hover:bg-[#992c2c] font-bold focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
            >
              {isLoading ? "Melde an..." : "Anmelden"}
              {/* Zeige Ladezustand an */}
            </button>
            {/* Abstand zwischen den Buttons */}
            <div style={{ marginTop: "15px" }}></div>
            {/* SignIn-Button */}
            <button
              type="button" // WICHTIG: type "button", damit das Formular nicht abgeschickt wird
              onClick={() => signIn("google")} // Rufe signIn mit "google" auf
              className="w-full p-3 bg-[#b83c3c] text-white rounded-xl hover:bg-[#992c2c] font-bold focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
            >
              Einloggen
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
