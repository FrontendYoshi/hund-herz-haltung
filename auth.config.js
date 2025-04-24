// Für einfaches Benutzername/Passwort-Login nutzen wir CredentialsProvider(in rechten App Google, GitHub usw hinzufügen und PW hashen)
import Credentials from "next-auth/providers/credentials";
import User from "@/components/User";
import NextAuth from "next-auth";
// Konfiguration für next-auth defninieren
export default{
    Providers:[
        Credentials({
            async authorize(credentials){
                const {email, password} = credentials;
                  // Suche Benutzer in Datenbank
                  const user = users.find(u => u.email === email);
                  if (!user){
                      console.log("Kein Benutzer gefunden.");
                      return null;
                  }
                  // Vergleiche PW mit gespeichertem Hash(PW)
                  const passwordCorrect = await bcrypt.compare(password, user.passwordHash);
                  if (!passwordCorrect) {
                      console.log("Falsches Passwort.");
                      return null;
                  }
                  // Login erfolgreich - gib Benutzerobjekt zurück
                  return {
                      id: user.id,
                      name: user.name,
                      email: user.email,
                  };
                }
            })
        ],
        // Eigene Login-Seite verwenden
        pages: {
            Signin: '/login',
        }
    }