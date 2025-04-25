import NextAuth from 'next-auth'
import { getServerSession } from "next-auth/next" // Import für getServerSession hinzufügen
import authConfig from './auth.config' // Importiere die separate Konfigurationsdatei
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"; // Typen für getServerSession (wird jetzt nicht mehr direkt verwendet, aber lassen wir es vorerst)

// Initialisiere NextAuth mit der Konfiguration
// Dies ist die Instanz, die in API-Routen verwendet wird.
// Der default export wird in app/api/auth/[...nextauth].js verwendet
export default NextAuth(authConfig);

// Exportiere eine Funktion, um die Session serverseitig abzurufen (für Middleware oder getServerSideProps)
// Hinweis: Für App Router wäre `auth()` aus `@auth` (v5) üblicher, aber für v4 + Pages/API ist dies ein Weg.
// Für die Middleware benötigen wir eigentlich nur die Konfiguration, aber exportieren wir `getServerSession` für Konsistenz.
export function auth(...args) {
  return getServerSession(...args, authConfig)
}

// Exportiere auch die Konfiguration selbst, falls sie anderswo benötigt wird.
export { authConfig };

// WICHTIG: Der Import in middleware.js `export { auth as middleware } from "@/auth";` 
// ist eher für V5 gedacht. Für V4 ist es oft einfacher, die Logik direkt in der Middleware zu haben
// oder eine spezifischere Funktion zu exportieren. 
// Wenn die Middleware nur prüfen soll, ob ein Benutzer angemeldet ist, 
// kann sie ggf. auf `getToken` von `next-auth/jwt` zurückgreifen.
// Vorerst belassen wir den Export von `auth` hier, aber es könnte Anpassungen in der Middleware erfordern. 