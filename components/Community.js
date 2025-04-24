import Image from "next/image";
import MiniForum from "@/components/MiniForum";

export default function Community() {
  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto bg-[#fffaf5] rounded-xl shadow-md space-y-10">
      {/* Titel */}
      <header>
        <h1 className="text-4xl font-bold text-[#b83c3c] mb-4">Unsere Community</h1>
        <p className="text-lg text-gray-800">
          Offen für alle queeren, linken Hundemenschen aus Berlin. Wir treffen uns regelmäßig zu Spaziergängen, tauschen uns aus und unterstützen uns gegenseitig 
        </p>
      </header>

      {/* Spaziergänge */}
      <section>
        <h2 className="text-2xl font-semibold text-[#f4b400] mb-2">Gassi-Treffen</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
          <li>28. April – Volkspark Friedrichshain</li>
          <li>5. Mai – Tempelhofer Feld</li>
          <li>12. Mai – QueerDogWalk mit Awareness-Team</li>
        </ul>
      </section>

      {/* Austausch & Aktionen */}
      <section>
        <h2 className="text-2xl font-semibold text-[#f4b400] mb-2">Vernetzung & Aktionen</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
          <li>Signal-Gruppen für Austausch & Organizing</li>
          <li>Gemeinsame Soli- und Awareness-Aktionen</li>
        </ul>
      </section>

      {/* Galerie */}
      <section>
        <h2 className="text-2xl font-semibold text-[#f4b400] mb-2">Galerie: Unsere Hunde</h2>
        <p className="mb-4 text-gray-700">Hier könnt ihr bald eure Vierbeiner vorstellen!</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Image src="/Images/GalleryDog1.jpg" alt="Hund 1" width={300} height={200} className="rounded-xl shadow-md object-cover" />
          <Image src="/Images/GalleryDog2.jpg" alt="Hund 2" width={300} height={200} className="rounded-xl shadow-md object-cover" />
          <Image src="/Images/GalleryDog3.webp" alt="Hund 3" width={300} height={200} className="rounded-xl shadow-md object-cover" />
        </div>
      </section>

      {/* Forum */}
      <section>
        <h2 className="text-2xl font-semibold text-[#f4b400] mb-2"> Mini-Forum</h2>
        <p className="mb-4 text-gray-700">Tauscht euch aus! z.B. „Wer kommt Sonntag mit?“</p>
        <MiniForum />
      </section>
    </div>
  );
}
