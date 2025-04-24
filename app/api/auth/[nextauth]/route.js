 import { GET, POST } from '@/auth'; // '@/' ist normalerweise ein Alias für das Projekt-Root
    import config from '../../../../auth.config'; // Importiere unsere Konfiguration

    // Exportiere die GET und POST Handler
    // Diese Zeilen sorgen dafür, dass Routen wie /api/auth/signin, /api/auth/signout,
    // /api/auth/session etc. automatisch von next-auth verwaltet werden.
    export { GET, POST };
    ```