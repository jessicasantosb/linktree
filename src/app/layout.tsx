import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessica Bandeira - Linktree",
  description:
    "Sou a Jessica, e este é meu Linktree! Aqui você encontra todos os links importantes e maneiras de entrar em contato comigo de forma rápida e fácil.",
    icons: {
      icon: '/avatar.jpg'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={alegreya.className}
      >
        {children}
      </body>
    </html>
  );
}
