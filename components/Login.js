"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Anmeldung fehlgeschlagen. Prüfe E-Mail/Passwort.");
        setIsLoading(false);
      } else if (result?.ok) {
        setError("");
        router.push("/");
      } else {
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
    <div className="flex items-center justify-center min-h-screen bg-[#fff8f0] px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-[#b83c3c]">
        <h2 className="text-3xl font-bold text-center text-[#b83c3c] mb-6 font-[Inter]">Willkommen zurück 🐾</h2>
        <form onSubmit={handleLogin} className="space-y-5 font-[Inter]">
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

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

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
  );
}
