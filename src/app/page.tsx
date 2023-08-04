"use client";

import { ChatLoading, ChatMessage } from "@/components";
import { ChatMessageProps } from "@/components/ChatMessage";
import { useEffect, useRef, useState } from "react";

const chatMessages: ChatMessageProps[] = [
  { senderName: "Rafael Pelle", text: "Hi," },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
  { text: "I'm Rafael Pelle!" },
];

export default function IndexPage() {
  const [contentIndex, setContentIndex] = useState<number>(0);
  const [content, setContent] = useState<ChatMessageProps[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (contentIndex < chatMessages.length) {
        setContent([...content, chatMessages[contentIndex]]);
        setContentIndex(contentIndex + 1);
        if (contentIndex === chatMessages.length - 1) {
          setIsTyping(false);
        }
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [content, contentIndex]);

  useEffect(() => {
    scrollToBottom();
  }, [content]);

  return (
    <div className="flex flex-col justify-end h-full p-6">
      <div className="w-12/12 lg:w-6/12">
        {content.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
        {isTyping && <ChatLoading />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
