import Community from "@/components/Community";

export default function CommunityPage() {
  return (
    <div className="bg-softWhite py-12">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-rust mb-6 font-accent">Unsere Community</h1>
        <p className="text-lg text-heartBlack mb-8">
          Hier kannst du mehr über unsere queere und hundeliebende Community erfahren. 
          Wir sind eine Gruppe von Menschen, die sich für soziale Gerechtigkeit einsetzen und uns gemeinsam für eine bessere Welt stark machen.
        </p>

        {/* Hier wird die Community-Komponente eingebunden */}
        <Community />

      </div>
    </div>
  );
}
