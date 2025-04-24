"use client";

import { SessionProvider } from "next-auth/react";

// Eine Wrapper-Komponente, die den SessionProvider für clientseitige Hooks bereitstellt.
export default function SessionWrapper({ children }) {
  // children repräsentiert den Inhalt, der von diesem Provider umschlossen wird.
  return (
  <SessionProvider>
    {children}
    </SessionProvider>
    );
}
