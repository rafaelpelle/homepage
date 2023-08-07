import { ChatMessageProps } from "@/components/ChatMessage";
import { MutableRefObject, useCallback, useEffect, useState } from "react";

const chatMessages: ChatMessageProps[] = [
  { text: "Hi," },
  { text: "I'm Rafael Pelle!" },
  { text: "You can ask me a question, or navigate through the menu." },
];

export function useChatMessage(
  messagesEndRef: MutableRefObject<null | HTMLDivElement>
) {
  const [content, setContent] = useState<ChatMessageProps[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (content.length < chatMessages.length) {
        const newContent = [...content, chatMessages[content.length]];
        setContent(newContent);
        if (newContent.length === chatMessages.length) {
          setIsTyping(false);
        }
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [content]);

  useEffect(() => {
    if (content.length >= 2) {
      scrollToBottom();
    }
  }, [content.length, scrollToBottom]);

  return {
    content,
    isTyping,
  };
}
