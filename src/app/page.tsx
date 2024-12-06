import { ContactMe } from "@/components/contact-me";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Links } from "@/components/links";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-[#f6f6f6]">
      <main className="max-w-xl mx-auto pt-14 pb-6 px-2 text-center flex flex-col gap-8">
        <Header />
        <Links />
        <ContactMe />
        <Footer />
      </main>
    </section>
  );
}
