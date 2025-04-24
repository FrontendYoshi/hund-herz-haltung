export { auth as middleware } from "@/auth"; // Importiere und exportiere 'auth' als Middleware

// Die Middleware wird standardmäßig auf ALLEN Routen ausgeführt.
// Wir können sie mit einem 'matcher' konfigurieren, um sie nur auf bestimmte
// Pfade anzuwenden und unnötige Ausführungen (z.B. für Bilddateien) zu vermeiden.

export const config = {
  // Der Matcher definiert, auf welche Pfade die Middleware angewendet werden soll.
  // Hier schützen wir alles unterhalb von /geschuetzt UND die API-Route.
  // Negative Lookaheads (?!...) können verwendet werden, um bestimmte Pfade auszuschließen (z.B. statische Dateien).
  // Siehe Next.js Middleware Docs für komplexere Matcher: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
   matcher: [
    '/geschuetzt/:path*', // Schützt /geschuetzt und alle Unterseiten
    '/api/geschuetzte-daten/:path*', // Schützt die API Route
    // Füge hier weitere Pfade hinzu, die geschützt werden sollen
    // '/dashboard/:path*',
   ],
};