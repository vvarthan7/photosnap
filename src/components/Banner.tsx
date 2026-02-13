import Button from "./Button";

export interface ImageSource {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export interface Images {
  mobile: ImageSource;
  tablet: ImageSource;
  desktop: ImageSource;
}

const Banner = ({
  title,
  preTitle,
  description,
  date,
  author,
  ctaLabel,
  images,
}: {
  images: Images;
  title: string;
  preTitle: string;
  description: string;
  date: string;
  author: string;
  ctaLabel: string;
}) => {
  return (
    <section className="relative flex flex-col w-full md:h-[650px] md:justify-center">
      <picture
        className="block w-full md:h-full bg-cover bg-center bg-no-repeat"
        style={
          images.mobile.blurDataURL
            ? { backgroundImage: `url(${images.mobile.blurDataURL})` }
            : undefined
        }
      >
        <source media="(min-width: 1280px)" srcSet={images.desktop.src} />
        <source media="(min-width: 768px)" srcSet={images.tablet.src} />
        <img
          src={images.mobile.src}
          alt={title}
          loading="eager"
          className="w-full h-full"
          fetchPriority="high"
        />
      </picture>
      <div className="bg-neutral-950 md:bg-transparent py-12 md:py-0 px-6 md:px-0 md:absolute z-10 md:max-w-[406px] gradient-accent-mobile md:self-center md:left-10 lg:left-[112px] text-neutral-0">
        <p className="text-preset-7 mb-10">{preTitle}</p>
        <h1 className="text-preset-1 mb-16">{title}</h1>
        <p className="text-preset-6 mb-6">
          {date} <span>by {author}</span>
        </p>
        <p className="text-preset-5-regular mb-6">{description}</p>
        <Button variant="link" colorScheme="light">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
};

export default Banner;
