import Image from "next/image";
import { Icons } from "./icons";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-4">
      <div className="p-1 border-2 rounded-full border-purple-800 select-none">
        <Image
          alt="avatar"
          src={"/avatar.jpg"}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <h2 className="text-5xl md:text-7xl font-extrabold">Jessica Bandeira</h2>
      <p className="text-purple-800 text-xl md:text-3xl font-bold">
        Desenvolvedora Web
      </p>
      <p className="text-gray-500">
        💻 Coding Adventurer | 🚀 Lifelong Learner
      </p>
      <Icons />
    </header>
  );
}
