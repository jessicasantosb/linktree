import Image from "next/image";
import { LinkItem } from "./link-item";

export function Links() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        href={`https://discordapp.com/users/${process.env.NEXT_PUBLIC_DISCORD_USER}`}
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

      <LinkItem
        href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`}
      >
        <Image
          alt="github icon"
          src={"/icons/github.svg"}
          width={35}
          height={35}
          className="-ml-0.5"
        />
        Github
      </LinkItem>

      <LinkItem href={`https://x.com/${process.env.NEXT_PUBLIC_X_USER}`}>
        <Image
          alt="x icon"
          src={"/icons/x.svg"}
          width={35}
          height={35}
          className="-ml-0.5"
        />
        X
      </LinkItem>

      <LinkItem
        href={`https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USER}`}
      >
        <Image
          alt="linkedin icon"
          src={"/icons/linkedin.svg"}
          width={30}
          height={30}
        />
        Linkedin
      </LinkItem>

      <LinkItem
        href={`https://www.youtube.com/@${process.env.NEXT_PUBLIC_YOUTUBE_USER}`}
      >
        <Image
          alt="youtube icon"
          src={"/icons/youtube.svg"}
          width={35}
          height={35}
        />
        Youtube
      </LinkItem>
    </div>
  );
}
