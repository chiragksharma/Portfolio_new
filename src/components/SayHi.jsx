import { ChevronRight } from "lucide-react";
import { cn } from '../lib/utils';
import AnimatedGradientText from "./magic-ui/animated-gradient-text";


function AnimatedGradientTextDemo() {
    return (
      <div className="flex items-center justify-center mt-4" >
        <a href="https://www.linkedin.com/in/chirag-kumar-sharma-5286b51b8/" target="_blank" rel="noopener noreferrer" className="z-50 cursor-pointer">
        <AnimatedGradientText className="z-50 cursor-pointer">
          👋🏻 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Say Hi
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        </a>
      </div>
    );
  }

export default AnimatedGradientTextDemo;