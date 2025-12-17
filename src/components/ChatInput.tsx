/*
import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: Props) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div className="p-4 bg-white border-t flex gap-2">
      <input
        value={text}
        disabled={disabled}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Ask about the weather..."
        className="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring"
      />
      <button
        onClick={handleSend}
        disabled={disabled}
        className="bg-user text-white px-4 py-2 rounded-lg disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
}
*/
import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div className="p-4 bg-white border-t flex gap-3 shadow-inner">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Ask about the weather..."
        className="flex-1 border rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSend}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition"
      >
        Send
      </button>
    </div>
  );
}
