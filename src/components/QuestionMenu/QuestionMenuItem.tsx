export interface QuestionMenuItemProps {
  question: string;
}

export default function QuestionMenuItem({ question }: QuestionMenuItemProps) {
  return (
    <div className="chat chat-end" key={question}>
      <div className="chat-bubble cursor-pointer hover:bg-primary-focus bg-primary text-slate-900">
        {question}
      </div>
    </div>
  );
}
