import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Props = LinkProps & { children: ReactNode };

export function LinkItem({ href, ...props }: Props) {
  return (
    <Link
      href={href}
      {...props}
      target="_blank"
      className="w-full h-14 p-4 flex items-center gap-4 rounded-lg shadow-lg text-xl tracking-widest bg-white hover:shadow-xl"
    />
  );
}
