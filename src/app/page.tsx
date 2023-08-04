import { AnimatedLetter } from "@/components";

const firstSentence = "Hi,".split("");
const secondSentence = "I'm Rafael.".split("");

export default function IndexPage() {
  return (
    <div className="flex flex-col justify-center h-full p-5">
      <h1 className="text-9xl">
        {firstSentence.map((letter, index) => (
          <AnimatedLetter letter={letter} key={index} />
        ))}
      </h1>
      <h1 className="text-7xl">
        {secondSentence.map((letter, index) => (
          <AnimatedLetter letter={letter} key={index} />
        ))}
      </h1>
    </div>
  );
}
