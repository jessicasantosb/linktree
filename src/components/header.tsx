import { Icons } from "./icons";

export function Header() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded">...</div>
      <h2 className="text-5xl md:text-7xl font-extrabold">Jessica Bandeira</h2>
      <p className="text-purple-800 text-xl md:text-3xl font-bold">
        Desenvolvedora Web
      </p>
      <p className="text-gray-500">💻 Coding Adventurer | 🚀 Lifelong Learner</p>
      <Icons />
    </div>
  );
}
