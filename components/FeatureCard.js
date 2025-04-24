export default function FeatureCard({ title, description }) {
    return (
      <div className="bg-[#fffaf5] p-6 rounded-2xl shadow-md hover:shadow-lg border border-amber-200 hover:border-amber-400 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-3 text-[#b83c3c]">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      </div>
    );
  }
  