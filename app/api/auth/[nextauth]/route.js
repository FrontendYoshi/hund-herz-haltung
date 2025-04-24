import{GET, POST} from "@/auth"; // Handler aus auth.js Datei
export{GET, POST}; // exportiert die Handler, sorgt dafür. dass Routen wie api/auth/signout usw automatisch von next-auth verwaltet wird