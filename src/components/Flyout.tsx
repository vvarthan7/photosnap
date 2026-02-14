import Button from "./Button";

export type FlyoutProps = {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  ctaLabel: string;
  href: string;
};

const Flyout = ({ images, title, ctaLabel, href }: FlyoutProps) => {
  return (
    <section className="flex flex-col items-center justify-center relative w-full gradient-accent">
      <picture className="block bg-cover bg-center bg-no-repeat w-full">
        <source media="(min-width: 1280px)" srcSet={images.desktop} />
        <source media="(min-width: 768px)" srcSet={images.tablet} />
        <img
          src={images.mobile}
          alt="get an invite"
          loading="lazy"
          className="object-cover block w-full"
        />
      </picture>
      <div className="absolute container-desktop flex flex-col md:flex-row items-start md:items-center w-full h-full justify-center md:justify-between px-6 md:px-10 lg:px-0">
        <h2 className="text-white max-w-[310px] md:max-w-[400px]">
          <span className="text-preset-2 md:hidden">{title}</span>
          <span className="hidden md:inline text-preset-1">{title}</span>
        </h2>
        <Button
          variant="link"
          colorScheme="light"
          className="mt-6 md:mt-0 w-full md:justify-end"
          href={href}
        >
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
};

export default Flyout;
