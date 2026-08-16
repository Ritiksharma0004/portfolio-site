import { useState, useRef, useEffect } from "react";
import "./Chat.css";

const API_URL = "https://hiremeai-backend-d3qw.onrender.com/chat";

function Chat({ onBack, embedded }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I'm Ritik. Ask me anything about my skills, experience, or projects — I'll answer as if you're interviewing me.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    resizeTextarea();
  }, []);

  const resizeTextarea = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  };

  const sendMessage = async () => {
    const question = input.trim();
    if (!question || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    requestAnimationFrame(resizeTextarea);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok || !res.body) throw new Error(`Server error: ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let started = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunkText = decoder.decode(value, { stream: true });
        if (!chunkText) continue;

        if (!started) {
          started = true;
          setLoading(false);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", text: chunkText },
          ]);
        } else {
          setMessages((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            updated[updated.length - 1] = {
              ...last,
              text: last.text + chunkText,
            };
            return updated;
          });
        }
      }
    } catch (err) {
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong reaching the server. Is the backend running?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`chat-page ${embedded ? "embedded" : ""}`}>
      <nav className="chat-nav">
        <button className="back-btn" onClick={onBack}>
          {embedded ? "✕" : "← Back"}
        </button>
        <span className="chat-nav-title">Interview with Ritik</span>
        <span className="status-pill">
          <span className="status-dot" /> Online
        </span>
      </nav>

      <div className="chat-window">
        {messages.map((m, i) => (
          <div className={`msg-row ${m.role}`} key={i}>
            <span className={`msg-tag ${m.role}`}>
              {m.role === "user" ? "You" : "Ritik"}
            </span>
            <div className={`bubble ${m.role}`}>{m.text}</div>
          </div>
        ))}

        {loading && (
          <div className="msg-row assistant">
            <span className="msg-tag assistant">Ritik</span>
            <div className="bubble assistant typing-bubble">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="input-bar">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            resizeTextarea();
          }}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question…"
          rows={1}
        />
        <button
          className="send-btn"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12L20 4L14 20L11 13L4 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chat;
