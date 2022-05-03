import { useState } from "react";

import bugImageURl from "../../assets/bug.svg";
import ideiaImageURl from "../../assets/ideia.svg";
import thoughtImageURl from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feddbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageURl,
      alt: "Imagem de um inserto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideiaImageURl,
      alt: "Imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageURl,
      alt: "Imagem de uma nuvem de pensamneto",
    },
  },
};

export type FeedbackType = keyof typeof feddbackTypes;

export function WidgetForm() {
  const [feedback, setFeedback] = useState<FeedbackType | null>();

  function handleRestartFeedback() {
    setFeedback(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedback ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedback} />
      ) : (
        <FeedbackContentStep feedbackType={feedback} onFeedbackRestartRequested={handleRestartFeedback} />
      )}

      <footer>
        <span>
          Feito com ♥ pela {""}
          <a href="http://rocketseat.com.br" className="underline-offset-2">
            Rocketseat
          </a>
        </span>
      </footer>
    </div>
  );
}
