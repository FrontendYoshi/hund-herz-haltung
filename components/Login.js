"use client";
import { signIn } from "next-auth/react";
import { useState } from "react"; // um Daten zu speichern
import { useRouter } from "next/navigation";// hilft später zur Startseite weiterzuleiten (nach Logn)

export default function Login({ onClose }) // onClose sorgt dafür, dass man die Login-Komponente schließen kann
{        
{/* Zustände damit merkt sich React was los ist */}

  const [email, setEmail] = useState(""); // was jmd. ins E-Mail Feld schreibt
  const [password, setPassword] = useState(""); // speichert das PW aus dem Eingabefeld
  const [error, setError] = useState(""); // wenn was schief läuft steht hier der Fehlertext drin
  const [isLoading, setIsLoading] = useState(false); // wenn der Login-Vorgang läuft, wird das auf "true" gesetzt
  const router = useRouter(); // damit kann man später per Code zur Startseite gehen (nach erfolgreichem Login)
      
  {/*Login-Funktion*/}
    async function handleLogin(e) {
    e.preventDefault(); //Verhindert, dass die Seite neu lädt, wenn man das Formular abschickt.
    setError(""); // löscht vorherige Fehler 
    setIsLoading(true); // zeigt "Lade..." an

    try {
      // versucht sich mit E-Mail und PW einzuloggen - ohne sofort die Seite zu wechseln
      const result = await signIn("credentials", {
        redirect: false, // wir bleiben auf der Seite statt automatisch weiterzuleiten
        email,
        password,
      });
      // wenn der Login fehlschlägt kommt Fehlermeldung. 
      if (result?.error) {
        setError("Anmeldung fehlgeschlagen. Prüfe E-Mail/Passwort.");
        setIsLoading(false);
      } 
      // wenn er klappt geht es zur Startseite
      else if (result?.ok) {
        setError("");
        router.push("/");
      } 
      // bei anderen Problemen wird auch eine Nachricht angezeigt
      else {
        setError("Ein unerwarteter Fehler ist aufgetreten.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Login Catch Error:", err);
      setError("Ein unerwarteter Fehler ist aufgetreten.");
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4 py-10"> {/*Das ist der graue, halbtransparente Hintergrund hinter dem Login-Feld (damit es wie ein Popup aussieht).*/}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md border-4 border-[#b83c3c] font-[Inter]">{/* Das eigentliche weiße Login-Feld mit rotem Rahmen.*/}

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
          <form onSubmit={handleLogin} className="space-y-5">
            <input 
              type="email"
              placeholder="E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f4b400] focus:border-[#f4b400]"
            />

            <input 
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f4b400] focus:border-[#f4b400]"
            />

            {error && <p className="text-red-600 text-sm text-center">{error}</p>} {/*Wenn ein Fehler da ist wird er hier angezeigt*/}
            {/*Login Start - drückt man auf den Button*/}
            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full p-3 rounded-xl font-semibold text-white transition 
                ${isLoading ? 'bg-gray-400' : 'bg-[#b83c3c] hover:bg-[#992c2c]'}`}
            >
              {isLoading ? "Lade..." : "Einloggen"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
