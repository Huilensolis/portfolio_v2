import { ReactNode } from "react";

interface Props {
  leftSide: ReactNode;
  cards: ReactNode[];
}

export function Card({ leftSide, cards }: Props) {
  if (cards.length > 3)
    throw new Error(
      "this component doesnt suppont more than 3 cards, please remove " +
        (cards.length - 3) +
        "card"
    );
  return (
    <article className="flex justify-center items-start gap-14 w-full min-h-[600px] bg-white border border-gray-200 rounded-2xl dark:bg-neutral-800 dark:border-neutral-600 p-20 relative shadow-2xl shadow-neutral-950/20">
      <div className="w-2/4 h-full flex flex-col justify-center items-center">
        {/* top left  */}
        <figure className="bg-orange-500/60 w-24 h-24 absolute top-24 left-20 blur-3xl ounded-full select-none z-0" />
        <figure className="bg-rose-500/40 w-24 h-24 absolute top-16 left-60 blur-3xl ounded-full select-none z-0" />

        {/* middle left */}
        <figure className="bg-orange-500/60 w-24 h-24 absolute top-72 left-64 blur-3xl ounded-full select-none z-0" />
        <figure className="bg-blue-500/60 w-24 h-24 absolute top-72 left-80 blur-3xl rounded-full select-none z-0" />

        <figure className="bg-orange-500/40 w-24 h-24 absolute top-14 right-20 blur-3xl ounded-full select-none z-0" />
        <figure className="bg-emerald-500/40 w-36 h-36 absolute bottom-16 right-16 blur-3xl rounded-full select-none z-0" />
        <div className="z-10 h-full w-full flex justify-center items-center">
          {leftSide}
        </div>
      </div>
      <div className="w-3/4 h-full flex justify-center items-center relative">
        <ul className="w-full h-full relative -top-5">
          {cards.map((card, index) => {
            const leftValue =
              index === 0 ? "left-0" : index === 1 ? "left-32" : "left-64";
            const rotateValue =
              index === 0 && cards.length > 1
                ? "-rotate-[12deg]"
                : index === 1 && cards.length > 1
                ? "-rotate-[8deg]"
                : "-rotate-[4deg]";

            const zIndex = index === 0 ? "z-10" : index === 1 ? "z-20" : "z-30";

            return (
              <li
                key={index}
                className={`w-80 h-80 ${zIndex} absolute ${rotateValue} ${leftValue} hover:-translate-y-8 delay-75 duration-500 transition-all hover:z-50 hover:rotate-0 hover:scale-105 rounded-lg overflow-hidden shadow-left-bottom dark:shadow-neutral-950/30 shadow-neutral-950/20`}
              >
                <MiniCard>{card}</MiniCard>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
function MiniCard({ children }: { children?: ReactNode }) {
  return (
    <article className="flex justify-start items-start flex-col bg-cm-white rounded-lg dark:bg-neutral-800 w-full h-full dark:border-2 dark:border-neutral-600 border-2 border-neutral-400/50">
      {children}
    </article>
  );
}
