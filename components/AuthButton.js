"use client";
import { useSession, signIn, signOut } from "next-auth/react"; // useSession sagt ob jmd eingeloggt ist oder nicht, signIn ruft Login auf, signOut loggt aus

export default function AuthButtons() {
  const { data: session, status } = useSession(); // holt Infos über Login-Status session enthält Name,Email usw  status ist entweder "loading", "authenticated" oder "unauthenticated"
// Wenn die Session noch geladen wird
  if (status === "loading") {
    return <p className="text-amber-600 font-medium">Prüfe Login...</p>;
  }
// Wenn jmd eingeloggt ist
  if (status === "authenticated") {
    return (
      <div className="bg-[#fffaf5] border border-[#f4b400] rounded-xl p-4 shadow-sm">
        <p className="text-gray-800 mb-2">
           Eingeloggt als: <strong className="text-[#b83c3c]">{session.user?.name}</strong> 
          <br />
          <span className="text-sm text-gray-600">({session.user?.email})</span>
        </p>
        <button
          onClick={() => signOut()}
          className="bg-[#b83c3c] hover:bg-[#992c2c] text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          Ausloggen
        </button>
      </div>
    );
  }
  // Wenn Niemand eingeloggt ist
  return (
    <div className="bg-[#fffaf5] border border-[#f4b400] rounded-xl p-4 shadow-sm">
      <p className="text-gray-800 mb-2"> Nicht eingeloggt</p>
      <button
        onClick={() => signIn()}
        className="bg-[#f4b400] hover:bg-[#e0a800] text-black font-semibold py-2 px-4 rounded-xl transition"
      >
       Einloggen
      </button>
    </div>
  );
}
