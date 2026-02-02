import clsx from "clsx";
import Image from "next/image";
import Button from "./Button";

interface ImageSource {
  src: string;
  width: number;
  height: number;
}

interface TextImageProps {
  title: string;
  description: string;
  btnLabel: string;
  imagePosition: "left" | "right";
  bgColor: string;
  images: {
    mobile: ImageSource;
    tablet: ImageSource;
    desktop: ImageSource;
  };
  alt: string;
  isHero?: boolean;
}

const TextImage = ({
  title,
  description,
  btnLabel,
  imagePosition,
  bgColor,
  images,
  alt,
  isHero = false,
}: TextImageProps) => {
  const Heading = isHero ? "h1" : "h2";
  const isDarkBg = bgColor === "bg-neutral-950";

  return (
    <div
      className={clsx(
        "flex flex-col-reverse items-center",
        imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row",
        bgColor,
      )}
    >
      <div
        className={clsx(
          "px-7 py-[72px] md:px-14 md:py-0 lg:px-28",
          "md:max-w-[495px] lg:max-w-[610px]",
          isDarkBg && "gradient-accent",
        )}
      >
        <Heading
          className={clsx("text-preset-1 mb-5", isDarkBg && "text-white")}
        >
          {title}
        </Heading>
        <p
          className={clsx(
            "text-preset-5-regular mb-12",
            isDarkBg && "text-white",
          )}
        >
          {description}
        </p>
        <Button variant="link" colorScheme={isDarkBg ? "light" : "dark"}>
          {btnLabel}
        </Button>
      </div>
      <picture className="w-full md:w-auto">
        <source
          media="(min-width: 1024px)"
          srcSet={images.desktop.src}
          width={images.desktop.width}
          height={images.desktop.height}
        />
        <source
          media="(min-width: 768px)"
          srcSet={images.tablet.src}
          width={images.tablet.width}
          height={images.tablet.height}
        />
        <Image
          src={images.mobile.src}
          alt={alt}
          width={images.mobile.width}
          height={images.mobile.height}
          className="w-full object-cover md:w-auto"
        />
      </picture>
    </div>
  );
};

export default TextImage;
