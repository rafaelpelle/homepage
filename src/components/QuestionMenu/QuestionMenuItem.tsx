export interface QuestionMenuItemProps {
  question: string;
  clickHandler: () => void;
}

export default function QuestionMenuItem({
  question,
  clickHandler,
}: QuestionMenuItemProps) {
  return (
    <div className="chat chat-end" key={question}>
      <div
        className="chat-bubble cursor-pointer hover:bg-primary-focus bg-primary text-slate-900"
        onClick={clickHandler}
      >
        {question}
      </div>
    </div>
  );
}
