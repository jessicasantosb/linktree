import Image from "next/image";
import { LinkItem } from "./link-item";

export function Links() {
  return (
    <div className="flex flex-col gap-6">
      <LinkItem
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
      >
        <Image
          alt="whatsapp icon"
          src={"/icons/whatsapp.svg"}
          width={30}
          height={30}
        />
        Whatsapp
      </LinkItem>
      <LinkItem
        href={`https:/discordapp.com/users/${process.env.NEXT_PUBLIC_DISCORD_USER}`}
      >
        <Image
          alt="discord icon"
          src={"/icons/discord.svg"}
          width={45}
          height={45}
          className="-ml-2"
        />
        Discord
      </LinkItem>
    </div>
  );
}
