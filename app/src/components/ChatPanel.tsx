"use client";

import { useEffect, useRef, useState } from "react";
import { assistantPlaceholderReply, chatSeed } from "@/lib/demo-data";
import type { ChatMessage } from "@/lib/types";
import { SendIcon } from "./Icons";
import { SectionCard } from "./ui";

function nowTime(): string {
  return new Date().toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function newId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : String(Date.now() + Math.random());
}

export function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>(chatSeed);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listEndRef = useRef<HTMLDivElement | null>(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    // Beim ersten Rendern nicht scrollen — nur bei neuen Nachrichten.
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    listEndRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [messages, pending]);

  function send() {
    const text = draft.trim();
    if (!text || pending) return;
    setMessages((prev) => [
      ...prev,
      { id: newId(), role: "user", text, time: nowTime() },
    ]);
    setDraft("");
    setPending(true);
    timerRef.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "assistant",
          text: assistantPlaceholderReply,
          time: nowTime(),
        },
      ]);
      setPending(false);
    }, 900);
  }

  return (
    <SectionCard
      kicker="Dialog"
      title="Analyse-Chat"
      meta="Rückfragen zur Auswertung vom 03.07.2026"
    >
      <div className="chat-list">
        {messages.map((m) => (
          <div key={m.id} className={`msg ${m.role}`}>
            <div className={`msg-avatar ${m.role}`} aria-hidden="true">
              {m.role === "assistant" ? "KI" : "DU"}
            </div>
            <div className="msg-body">
              <div className="msg-bubble">{m.text}</div>
              <div className="msg-time num">{m.time} Uhr</div>
            </div>
          </div>
        ))}

        {pending ? (
          <div className="msg assistant">
            <div className="msg-avatar assistant" aria-hidden="true">
              KI
            </div>
            <div className="msg-body">
              <div className="msg-bubble typing" aria-label="KI antwortet">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        ) : null}
        <div ref={listEndRef} />
      </div>

      <div className="chat-input-row">
        <input
          className="chat-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Frage zur Auswertung stellen — z. B. „Was ändert das ADR-Listing am Einstiegsplan?“"
          aria-label="Frage zur Auswertung"
        />
        <button
          type="button"
          className="btn btn-primary btn-send"
          onClick={send}
          disabled={!draft.trim() || pending}
          aria-label="Nachricht senden"
          style={!draft.trim() || pending ? { opacity: 0.55, cursor: "default" } : undefined}
        >
          <SendIcon />
        </button>
      </div>
      <p className="chat-hint">
        Enter zum Senden · Die KI-Anbindung folgt in der nächsten Ausbaustufe — Antworten
        sind hier noch Platzhalter. Keine Anlageberatung.
      </p>
    </SectionCard>
  );
}
