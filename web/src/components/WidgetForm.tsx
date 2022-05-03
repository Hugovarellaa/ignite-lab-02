import { CloseButton } from "./CloseButton";

import bugImageURl from "../assets/bug.svg";
import ideiaImageURl from "../assets/ideia.svg";
import thoughtImageURl from "../assets/thought.svg";

const feddbackTypes = {
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

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe o seu feddback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feddbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="
              bg-zinc-800 
              rounded-lg 
              py-5 
              w-24 
              flex-1 
              flex 
              flex-col 
              items-center gap-2 
              border-2 border-transparent 
            hover:border-brand-500 
            focus:border-brand-500
              focus:outline-none            
              "
              // onClick={}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })} 
      </div>
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
