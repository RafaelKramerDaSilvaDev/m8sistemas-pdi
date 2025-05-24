import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Logo } from "./components/logo";

gsap.registerPlugin(useGSAP);

export const App = () => {
  return (
    <div className="flex h-dvh bg-gray-800 text-white">
      <div className="flex justify-center items-center w-full">
        <Logo />
      </div>
    </div>
  );
};
