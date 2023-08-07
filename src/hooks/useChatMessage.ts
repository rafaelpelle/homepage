import { ChatMessageProps } from "@/components/ChatMessage";
import { MutableRefObject, useCallback, useEffect, useState } from "react";

const rootMessages: ChatMessageProps[] = [
  { text: "Hi," },
  { text: "I'm Rafael Pelle!" },
  { text: "You can ask me a question, or navigate through the menu." },
];

const rootQuestions: string[] = [
  "Can you tell me about your career?",
  "Can you show me your projects?",
  "How do I get in touch with you?",
];

export function useChatMessage(
  messagesEndRef: MutableRefObject<null | HTMLDivElement>,
) {
  const [messages, setContent] = useState<ChatMessageProps[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [questions, setQuestions] = useState<string[]>([]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (messages.length < rootMessages.length) {
        const newContent = [...messages, rootMessages[messages.length]];
        setContent(newContent);
        if (newContent.length === rootMessages.length) {
          setIsTyping(false);
          setQuestions([...rootQuestions]);
        }
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [messages]);

  useEffect(() => {
    if (messages.length >= 2) {
      scrollToBottom();
    }
  }, [messages.length, scrollToBottom]);

  return {
    messages,
    isTyping,
    questions,
  };
}
