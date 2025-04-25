// Für einfaches Benutzername/Passwort-Login nutzen wir CredentialsProvider(in rechten App Google, GitHub usw hinzufügen und PW hashen)
import Credentials from "next-auth/providers/credentials";
// import User from "@/components/User"; // Annahme: User wird hier nicht direkt benötigt, bcrypt fehlt auch
import bcrypt from 'bcryptjs'; // bcrypt muss importiert werden

// Mock-Benutzerdaten (ersetze dies durch deine Datenbankabfrage)
const users = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    passwordHash: '$2a$10$examplehash...' // Ersetze dies durch einen echten Hash
  }
];

// Konfiguration für next-auth definieren
export default {
    providers: [ // Korrekte Schreibweise: providers
        Credentials({
            async authorize(credentials) {
                // Prüfen, ob credentials vorhanden sind
                if (!credentials?.email || !credentials?.password) {
                  console.log("Fehlende Anmeldedaten.");
                  return null;
                }

                const { email, password } = credentials;
                // Suche Benutzer
                const user = users.find(u => u.email === email);
                if (!user) {
                    console.log("Kein Benutzer gefunden für E-Mail:", email);
                    return null;
                }
                // Vergleiche PW
                // const passwordCorrect = await bcrypt.compare(password, user.passwordHash);
                // Temporär für Testzwecke: Einfacher Vergleich (unsicher!)
                const passwordCorrect = password === "password"; // NUR ZUM TESTEN!

                if (!passwordCorrect) {
                    console.log("Falsches Passwort.");
                    return null;
                }
                // Login erfolgreich
                console.log("Login erfolgreich für:", user.email);
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                };
            }
        })
    ],
    pages: { // Korrekte Schreibweise: pages
        signIn: '/login',// Korrekte Schreibweise: signIn
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Nach erfolgreichem Login immer zur Homepage weiterleiten.
            // baseUrl ist die Basis-URL deiner Anwendung (z.B. http://localhost:3000)
            return baseUrl;
        }
    },
    // Füge hier ggf. weitere Optionen wie session, secret etc. hinzu
    // Beispiel: session: { strategy: "jwt" },
    // secret: process.env.AUTH_SECRET, // Wichtig für Produktion
};