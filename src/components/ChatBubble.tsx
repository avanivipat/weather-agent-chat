/*
interface Props {
  role: "user" | "agent";
  message: string;
}

export default function ChatBubble({ role, message }: Props) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow
        ${isUser
          ? "bg-user text-white rounded-br-none"
          : "bg-agent text-gray-900 rounded-bl-none"}`}
      >
        {message}
      </div>
    </div>
  );
}
*/
interface Props {
  role: "user" | "agent";
  message: string;
}

export default function ChatBubble({ role, message }: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fadeIn`}
    >
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm shadow-md
        ${
          isUser
            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
            : "bg-white text-gray-800 rounded-bl-none"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
