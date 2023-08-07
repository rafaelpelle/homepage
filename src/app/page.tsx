"use client";

import { AnimatedLetter, ChatLoading, ChatMessage } from "@/components";
import { useChatMessage } from "@/hooks/useChatMessage";
import Image from "next/image";
import { useMemo, useRef } from "react";

export default function IndexPage() {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { content, isTyping } = useChatMessage(messagesEndRef);

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
