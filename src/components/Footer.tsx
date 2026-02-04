import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { name: "Youtube", href: "https://www.youtube.com", icon: "youtube" },
  { name: "Twitter", href: "https://www.x.com", icon: "twitter" },
  { name: "Pinterest", href: "https://www.pinterest.com", icon: "pinterest" },
  { name: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container-desktop px-8 md:px-[40px] lg:px-0 py-14 md:py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-28 md:gap-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center md:items-start">
          <div className="flex flex-col gap-8 lg:justify-between lg:self-stretch">
            <Image
              src="/assets/shared/desktop/logo-white.svg"
              alt="Logo"
              width={169}
              height={16}
            />
            <ul className="flex gap-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/assets/shared/desktop/${social.icon}.svg`}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="brightness-0 invert"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex md:flex-row flex-col lg:flex-col gap-5 text-preset-7 items-center lg:items-start">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/stories">STORIES</Link>
            </li>
            <li>
              <Link href="/features">FEATURES</Link>
            </li>
            <li>
              <Link href="/pricing">PRICING</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-center md:items-end md:self-stretch">
          <Button variant="link" colorScheme="light">
            GET AN INVITE
          </Button>
          <p className="text-preset-5-regular mt-8 md:mt-0 text-neutral-100">
            Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
