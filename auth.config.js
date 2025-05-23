import Google from "next-auth/providers/google"; // Importiere Google Provider
// Für einfaches Benutzername/Passwort-Login nutzen wir CredentialsProvider(in rechten App Google, GitHub usw hinzufügen und PW hashen)
import Credentials from "next-auth/providers/credentials";
// import User from "@/components/User"; // Annahme: User wird hier nicht direkt benötigt, bcrypt fehlt auch
import bcrypt from 'bcryptjs'; // bcrypt muss importiert werden

// Definiere die Konfiguration für next-auth
export default {
  // Hier listen wir die Authentifizierungs-Anbieter auf
  providers: [
    // Google Provider hinzufügen
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Konfiguration für den Benutzername/Passwort-Login
    Credentials({
      // Dieser Abschnitt ist optional und definiert Felder für eine automatisch generierte Login-Seite.
      // Wir bauen aber unsere eigene Login-Seite.
      // name: 'Credentials',
      // credentials: {
      //   email: { label: 'Email', type: 'email', placeholder: 'test@test.com' },
      //   password: { label: 'Password', type: 'password' }
      // },

      // Dies ist die WICHTIGSTE Funktion: Sie validiert die Anmeldedaten.
      // 'credentials' enthält die vom Benutzer eingegebenen Daten (z.B. email, password).
      async authorize(credentials) {
        console.log('Authorize Funktion wird aufgerufen mit:', credentials);

        // --- WICHTIG: ECHTE AUTHENTIFIZIERUNG ---
        // In einer echten App würdest du hier:
        // 1. Den Benutzer anhand der `credentials.email` in deiner Datenbank suchen.
        // 2. Das eingegebene `credentials.password` sicher mit einem Hash-Algorithmus (z.B. bcrypt) hashen.
        // 3. Den gehashten Wert mit dem gespeicherten Hash in der Datenbank vergleichen.
        // 4. Wenn sie übereinstimmen, den Benutzer aus der Datenbank zurückgeben.

        // --- VEREINFACHTES BEISPIEL FÜR DIESE DEMO ---
        // Wir prüfen nur hartcodierte Werte. NIEMALS so in Produktion verwenden!
        const testEmail = "test@test.com";
        const testPassword = "password123";
        

        if (credentials.email === testEmail && credentials.password === testPassword) {
          console.log('Credentials OK, gebe Benutzerobjekt zurück.');
          // Wenn die Anmeldung erfolgreich ist, GIB das Benutzerobjekt zurück.
          // Wichtig: Gib hier NIE das Passwort zurück!
          // Die 'id' ist oft nützlich.
          return { id: "1", name: "Test Benutzer", email: testEmail };
        } else {
          console.log('Credentials ungültig.');
          // Wenn die Anmeldung fehlschlägt, gib 'null' zurück.
          return null;
        }
      }
    }) // Ende Credentials Provider
  ], // Ende providers Array

  // Hier fügen wir die Seitenkonfiguration hinzu
  pages: {
    signIn: '/login', // Leite zum Anmelden auf /login weiter
  },

  // Optional: Eigene Login-Seite angeben (standardmäßig /api/auth/signin)
  // pages: {
  //   signIn: '/login', // Wenn du eine eigene Seite unter /login erstellen würdest
  // },
};