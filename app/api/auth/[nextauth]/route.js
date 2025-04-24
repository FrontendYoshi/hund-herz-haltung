import NextAuth from 'next-auth';
import authConfig from '@/auth.config'; // Korrekter Import der Konfiguration

// Für next-auth v4 wird NextAuth direkt mit der Konfiguration exportiert.
export default NextAuth(authConfig);