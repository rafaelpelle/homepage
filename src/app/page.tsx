"use client";

import { AnimatedLetter, ChatLoading, ChatMessage } from "@/components";
import { ChatMessageProps } from "@/components/ChatMessage";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const chatMessages: ChatMessageProps[] = [
  { text: "Hi," },
  { text: "I'm Rafael Pelle!" },
  { text: "You can ask me a question, or navigate through the menu." },
];

export default function IndexPage() {
  const [contentIndex, setContentIndex] = useState<number>(0);
  const [content, setContent] = useState<ChatMessageProps[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const firstName = useMemo(
    () =>
      "Rafael"
        .split("")
        .map((letter, index) => <AnimatedLetter key={index} letter={letter} />),
    []
  );

  const lastName = useMemo(
    () =>
      "Pelle"
        .split("")
        .map((letter, index) => <AnimatedLetter key={index} letter={letter} />),
    []
  );

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
    if (contentIndex > 2) {
      scrollToBottom();
    }
  }, [contentIndex]);

  return (
    <div className="flex flex-col justify-evenly sm:justify-between h-full w-full p-3 mx-auto max-w-full sm:max-w-4xl">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-20">
        <Image
          className="rounded-full bg-blur w-52 sm:w-72"
          alt="Rafael Pelle picture"
          src="/images/profile.jpg"
          width={300}
          height={300}
          priority
        />
        <div className="container flex flex-col items-center sm:items-start mt-5 sm:ml-5">
          <h1 className="hidden sm:block text-5xl">
            <p className="whitespace-nowrap">{firstName}</p>
            <p className="text-8xl whitespace-nowrap">{lastName}</p>
          </h1>
          <h1 className="sm:hidden text-2xl text-center">
            {firstName} {lastName}
          </h1>
          <p className="text-slate-500 sm:pl-2 text-center sm:text-left w-3/4 sm:w-full">
            Front-end web developer specialized in React
          </p>
        </div>
      </div>

      <div className="w-12/12 sm:w-6/12">
        {content.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
        {isTyping && <ChatLoading />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
