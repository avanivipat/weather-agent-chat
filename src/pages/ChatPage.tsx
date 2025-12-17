/*

import { useEffect, useRef, useState } from "react";
import ChatBubble from "../components/ChatBubble";
import ChatInput from "../components/ChatInput";
import { useWeatherAgent } from "../hooks/useWeatherAgent";

type Message = {
  role: "user" | "agent";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { sendMessage, loading } = useWeatherAgent();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(text: string) {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);

    let agentReply = "";
    setMessages((prev) => [...prev, { role: "agent", content: "" }]);

    await sendMessage(text, (chunk) => {
      agentReply += chunk;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = agentReply;
        return updated;
      });
    });
  }

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Header *//*}
      <header className="p-4 text-center font-semibold shadow bg-white">
        🌤 Weather Agent
      </header>

      {/* Messages *//*}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} message={msg.content} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input *//*}
      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
}
*/

import { useEffect, useRef, useState } from "react";
import ChatBubble from "../components/ChatBubble";
import ChatInput from "../components/ChatInput";
import { useWeatherAgent } from "../hooks/useWeatherAgent";

type Message = {
  role: "user" | "agent";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { sendMessage } = useWeatherAgent();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(text: string) {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    let agentReply = "";
    setMessages((prev) => [...prev, { role: "agent", content: "" }]);

    await sendMessage(text, (chunk) => {
      agentReply += chunk;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = agentReply;
        return updated;
      });
    });

    setLoading(false);
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-sky-50 to-indigo-100">
      {/* Header */}
      <header className="p-4 text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow">
        🌤 Weather Agent
        <div className="text-xs opacity-80">Ask anything about weather</div>
      </header>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-3">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            role={msg.role}
            message={msg.content}
          />
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-2 rounded-xl shadow text-sm text-gray-500 animate-pulse">
              Weather agent is typing…
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}
