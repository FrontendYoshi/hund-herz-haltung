import SessionWrapper from "@/components/Sessionwrapper";
import "./globals.css";

export const metadata = {
  title: "Hund Herz Haltung",
  description: "Queere Hundemenschen vernetzen sich.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
<link href="https://fonts.googleapis.com/css2?family=Caveat&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />



{/*Der Sessionprovider umgibt die gesamte Anwendung und stellt sicher, dass die Session während der gesamten Lebensdauer der Anwendung verfügbar bleibt.
Er stellt den Kontext für die Authentifizierung bereit, damit useSession auf die Session zugreifen kann. Ohne diesen Provider weiss NextAuth nicht
 wie es die Benutzersitzung verwalten soll*/}