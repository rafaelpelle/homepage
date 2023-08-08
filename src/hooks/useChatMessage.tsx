import { ChatMessageProps } from '@/components/ChatMessage';
import { QuestionMenuItemProps } from '@/components/QuestionMenu/QuestionMenuItem';
import Link from 'next/link';
import { MutableRefObject, useCallback, useEffect, useState } from 'react';

const rootMessages: ChatMessageProps[] = [
  { text: 'Hi,' },
  { text: "I'm Rafael Pelle!" },
  { text: 'You can ask me a question, or navigate through the menu.' },
];

export function useChatMessage(
  messagesEndRef: MutableRefObject<null | HTMLDivElement>,
) {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [questions, setQuestions] = useState<QuestionMenuItemProps[]>([]);

  const handleGetInTouchClick = useCallback((msgs: ChatMessageProps[]) => {
    if (typeof (document.activeElement as HTMLElement)?.blur === 'function') {
      (document.activeElement as HTMLElement).blur();
    }

    const newMessage: ChatMessageProps = {
      text: 'How do I get in touch with you?',
      align: 'end',
      imgSrc: '/images/guest_profile.png',
    };
    const newMessages = [...msgs, newMessage];
    setMessages(newMessages);
    setQuestions([]);
    setIsTyping(true);

    setTimeout(() => {
      const response: ChatMessageProps = {
        text: (
          <>
            You can send me an{' '}
            <Link
              className="text-primary cursor-pointer"
              target="_blank"
              href="mailto:rafapelle@gmail.com"
            >
              e-mail
            </Link>{' '}
            or a{' '}
            <Link
              className="text-primary cursor-pointer"
              target="_blank"
              href="https://www.linkedin.com/in/rafael-pelle-23429317a/"
            >
              LinkedIn
            </Link>{' '}
            message!
          </>
        ),
      };
      setMessages([...newMessages, response]);
      setIsTyping(false);
    }, 1500);
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messagesEndRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (messages.length < rootMessages.length) {
        const newMessages = [...messages, rootMessages[messages.length]];
        setMessages(newMessages);
        if (newMessages.length === rootMessages.length) {
          setIsTyping(false);
          setQuestions([
            {
              question: 'Can you tell me about your career?',
              clickHandler: () => {
                console.log('Can you tell me about your career?');
              },
            },
            {
              question: 'Can you show me your projects?',
              clickHandler: () => {
                console.log('Can you show me your projects?');
              },
            },
            {
              question: 'How do I get in touch with you?',
              clickHandler: () => handleGetInTouchClick(newMessages),
            },
          ]);
        }
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [messages, handleGetInTouchClick]);

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
