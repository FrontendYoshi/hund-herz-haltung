import {auth} from "@/auth"; // serverseitige auth Funktion importieren, diese fragt: ist der Benutzer eingeloggt? wenn ja - gib mir die Infos
import { NextResponse } from "next/server"; // Für standardisierte API-Antworten, benutzen wir, um eine saubere Antwort zurückzugeben – also z. B. ein OK oder eine Fehlermeldung.

// die Funktion, die ausgelöst wird, wenn jemand mit der Methode GET (also: Daten abrufen) diese API-Route aufruft.
//Zum Beispiel: Wenn man mit dem Browser oder JavaScript sagt: "Hol mir Daten!"
export async function GET(request) {
    // Hole die Session auf dem Server für diese API-Anfrage, unser Server fragt ob jmd eingeloggt ist und wer das ist, die Antwort wird in session gespeichert
    const session = await auth();
  
    // Prüfe, ob eine Session existiert
    if (!session || !session.user) {
      // Wenn niemand eingeloggt ist, gib eine 401 Unauthorized Antwort zurück
      return NextResponse.json({ message: 'Nicht autorisiert' }, { status: 401 });
    }
  
    // Wenn eingeloggt, gib die geschützten Daten zurück
    const geschuetzteDaten = {
      userId: session.user.id, // ID aus der Session
      geheimnis: "Das ist eine geheime Information!",
      timestamp: new Date().toISOString(),
    };
  
    // Sende die Daten als JSON mit Status 200 OK
    return NextResponse.json(geschuetzteDaten, { status: 200 });
  }