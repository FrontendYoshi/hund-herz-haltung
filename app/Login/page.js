import Login from "@/components/Login"; // Importiere das Formular

// Eine einfache Seite, die nur das Login-Formular anzeigt.
export default function LoginPage() {
  return (
    <div className="bg-amber-200 min-h-screen flex flex-col items-center justify-center bg-[#fff8f0] px-4 py-16">
      <h1 className="text-4xl font-bold text-[#b83c3c] mb-6 font-[Inter]">
        Willkommen bei Hund, Herz, Haltung 🐾
      </h1>
      <p className="bg-amber-200 text-lg text-gray-700 mb-10 text-center max-w-xl font-[Inter]">
        Bitte logge dich ein, um auf unsere geschützten Inhalte zugreifen zu können.
      </p>
      <Login />
    </div>
  );
}
