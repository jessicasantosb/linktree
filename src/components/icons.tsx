import Image from "next/image";

export function Icons() {
  return (
    <div className="my-6 flex items-center justify-center gap-4 select-none">
      <Image
        alt="javascript"
        src={
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        }
        width={40}
        height={40}
      />
      <Image
        alt="typescript"
        src={
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        }
        width={40}
        height={40}
      />
      <Image
        alt="react"
        src={
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        }
        width={40}
        height={40}
      />
      <Image
        alt="next"
        src={
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        }
        width={40}
        height={40}
      />
    </div>
  );
}
