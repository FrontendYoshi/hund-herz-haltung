import NextAuth from 'next-auth';
import config from '../../../../auth.config'; // Korrekter Import der Konfiguration

const handler = NextAuth(config)

export {handler as Get, handler as POST}