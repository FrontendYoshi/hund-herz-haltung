"use client";

import { useState } from "react";

export default function MiniForum() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Mila",
      text: "Wer kommt Sonntag zum Spaziergang?",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 2,
      name: "Rafi",
      text: "Ich bring Snacks für die Hunde mit!",
      timestamp: new Date().toLocaleString(),
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "" || username.trim() === "") return;

    const newEntry = {
      id: Date.now(),
      name: username,
      text: newComment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([newEntry, ...comments]); // neuester Kommentar oben
    setNewComment("");
    setUsername("");
  };

  return (
    <div className="mt-12 bg-[#fffaf5] border-2 border-[#b83c3c] p-6 rounded-2xl shadow-md">
      <h3 className="text-2xl font-bold text-[#b83c3c] mb-4 font-[Inter]">
        Mini-Forum
      </h3>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Dein Name"
        className="w-full border border-[#f4b400] bg-white text-gray-900 rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
      />

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Was möchtest du teilen?"
        className="w-full border border-[#f4b400] bg-white text-gray-900 rounded-xl p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
        rows={4}
      />

      <button
        onClick={handleAddComment}
        className="bg-[#b83c3c] hover:bg-[#992c2c] text-white font-semibold py-2 px-6 rounded-xl transition"
      >
        Kommentar absenden
      </button>

      <div className="mt-8">
        <p className="text-lg font-semibold mb-3 text-gray-800">Letzte Kommentare:</p>
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#f4b400]"
            >
              <p className="text-sm text-gray-500 mb-1">{comment.timestamp}</p>
              <p>
                <strong className="text-[#b83c3c]">{comment.name}:</strong>{" "}
                <span className="text-[#333333]">{comment.text}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
