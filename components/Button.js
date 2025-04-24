
export default function Button({ buttonText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-amber-600 text-white py-2 px-6 rounded-xl hover:bg-amber-700 transition duration-300"
    >
      {buttonText}
    </button>
  );
}