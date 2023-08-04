"use client";

import { AnimatedLetter, ChatLoading, ChatMessage } from "@/components";
import { ChatMessageProps } from "@/components/ChatMessage";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const chatMessages: ChatMessageProps[] = [
  { senderName: "Rafael Pelle", text: "Hi," },
  { text: "I'm Rafael Pelle!" },
  { text: "You can ask me a question, or navigate through the menu." },
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
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [content, contentIndex]);

  useEffect(() => {
    scrollToBottom();
  }, [content]);

  return (
    <div className="flex flex-col justify-end lg:justify-between h-full p-3 lg:p-20">
      <div className="hidden lg:flex items-center justify-between">
        <h1 className="text-6xl">
          I&apos;m
          <p className="text-8xl whitespace-nowrap">
            {"Rafael".split("").map((letter, index) => (
              <AnimatedLetter key={index} letter={letter} />
            ))}
          </p>
        </h1>
        <Image
          className="rounded-full bg-blur"
          alt="Rafael Pelle picture"
          src="/images/profile.jpg"
          width={300}
          height={300}
        />
      </div>

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
