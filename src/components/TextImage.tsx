import clsx from "clsx";
import Button from "./Button";
import { Images } from "./Banner";

interface TextImageProps {
  title: string;
  description: string;
  btnLabel?: string;
  imagePosition: "left" | "right";
  bgColor: "bg-neutral-950" | "bg-neutral-0";
  images: Images;
  alt: string;
  isHero?: boolean;
  isFeaturePage?: boolean;
  blurDataURL?: string;
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
  isFeaturePage = false,
  blurDataURL,
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
        {btnLabel && (
          <Button variant="link" colorScheme={isDarkBg ? "light" : "dark"}>
            {btnLabel}
          </Button>
        )}
      </div>
      <picture
        className="w-full md:flex-1"
        style={
          blurDataURL
            ? {
                backgroundImage: `url(${blurDataURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <source media="(min-width: 1280px)" srcSet={images.desktop.src} />
        <source media="(min-width: 768px)" srcSet={images.tablet.src} />
        <img
          src={images.mobile.src}
          alt={alt}
          width={images.mobile.width}
          height={images.mobile.height}
          className={clsx(
            "w-full object-cover",
            isHero
              ? "md:h-[650px]"
              : isFeaturePage
                ? "md:h-[490px]"
                : "md:h-[600px]",
            isHero
              ? "lg:h-[650px]"
              : isFeaturePage
                ? "lg:h-[490px]"
                : "lg:h-[600px]",
          )}
          loading={isHero ? "eager" : "lazy"}
          fetchPriority={isHero ? "high" : "auto"}
          decoding={isHero ? "sync" : "async"}
        />
      </picture>
    </div>
  );
};

export default TextImage;
