import { GetInTouchResponse } from '@/components';
import { ChatMessageProps } from '@/components/ChatMessage';
import { QuestionMenuItemProps } from '@/components/QuestionMenu/QuestionMenuItem';
import { MutableRefObject, useCallback, useEffect, useState } from 'react';

export type ChatQuestion =
  | 'Can you tell me about your career?'
  | 'Can you show me your projects?'
  | 'How do I get in touch with you?';

const rootMessages: ChatMessageProps[] = [
  { text: 'Hi,' },
  { text: "I'm Rafael Pelle!" },
  { text: 'You can ask me a question, or navigate through the menu.' },
];

const rootQuestions: ChatQuestion[] = [
  'Can you tell me about your career?',
  'Can you show me your projects?',
  'How do I get in touch with you?',
];

const responseTemplate: ChatMessageProps = {
  text: '',
  align: 'end',
  imgSrc: '/images/guest_profile.png',
};

export function useChatMessage(
  messagesEndRef: MutableRefObject<null | HTMLDivElement>,
) {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [questions, setQuestions] = useState<QuestionMenuItemProps[]>([]);

  const closeQuestionDropdown = () => {
    const dropdown = document.activeElement as HTMLElement;
    if (typeof dropdown?.blur === 'function') {
      dropdown.blur();
    }
  };

  const handleAboutCareerClick = useCallback((msgs: ChatMessageProps[]) => {
    console.log('handleAboutCareerClick', msgs);
  }, []);

  const handleShowProjectsClick = useCallback((msgs: ChatMessageProps[]) => {
    console.log('handleShowProjectsClick', msgs);
  }, []);

  const handleGetInTouchClick = useCallback((msgs: ChatMessageProps[]) => {
    closeQuestionDropdown();
    const newMessages = [
      ...msgs,
      {
        ...responseTemplate,
        text: rootQuestions[2],
      },
    ];
    setMessages(newMessages);
    setQuestions([]);
    setIsTyping(true);
    setTimeout(() => {
      const response: ChatMessageProps = {
        text: <GetInTouchResponse />,
      };
      setMessages([...newMessages, response]);
      setIsTyping(false);
    }, 1500);
  }, []);

  const getClickHandler = useCallback(
    (question: ChatQuestion) => {
      switch (question) {
        case rootQuestions[0]:
          return handleAboutCareerClick;
        case rootQuestions[1]:
          return handleShowProjectsClick;
        default:
          return handleGetInTouchClick;
      }
    },
    [handleAboutCareerClick, handleGetInTouchClick, handleShowProjectsClick],
  );

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
          setQuestions(
            rootQuestions.map((question) => ({
              question,
              clickHandler: () => {
                const handler = getClickHandler(question);
                handler(newMessages);
              },
            })),
          );
        }
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [messages, getClickHandler]);

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
