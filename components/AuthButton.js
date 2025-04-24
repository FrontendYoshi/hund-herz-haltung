"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./Login";
import Button from "./Button";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-amber-600 font-medium">Prüfe Login...</p>;
  }

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

  return (
    <div className="bg-[#fffaf5] border border-[#f4b400] rounded-xl p-4 shadow-sm">
      <p className="text-gray-800 mb-2"> Nicht eingeloggt</p>
      <button
        onClick={() => signIn("credentials", { callbackUrl: "/geschützt" })}
        className="bg-[#f4b400] hover:bg-[#e0a800] text-black font-semibold py-2 px-4 rounded-xl transition"
      >
       Einloggen
      </button>
    </div>
  );
}
