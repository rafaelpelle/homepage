'use client';

import { ChatLoading, ChatMessage, QuestionMenu } from '@/components';
import { useChatMessage } from '@/hooks/useChatMessage';

export default function ChatContainer() {
  const { messages, isTyping, questions } = useChatMessage();

  return (
    <div className="w-12/12">
      {messages.map((message, index) => (
        <ChatMessage key={index} {...message} />
      ))}
      {isTyping && <ChatLoading />}

      {!isTyping && questions.length > 0 && (
        <QuestionMenu questions={questions} />
      )}
    </div>
  );
}
