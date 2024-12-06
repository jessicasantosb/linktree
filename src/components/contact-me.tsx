import Image from "next/image";
import Link from "next/link";

export function ContactMe() {
  return (
    <div className="pb-8 max-w-fit self-center select-none">
      <p className="pb-4 text-purple-300 text-2xl font-bold">Prefere Email?</p>

      <Link
        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
        className="h-14 p-4 flex items-center gap-4 rounded-lg shadow-lg text-xl tracking-widest bg-blue-100 hover:shadow-purple-300"
      >
        <Image
          alt="outlook icon"
          src={"/icons/outlook.svg"}
          width={30}
          height={30}
        />
        Fale comigo
      </Link>
    </div>
  );
}
