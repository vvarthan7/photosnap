import Button from "./Button";
import Link from "next/link";

export type Story = {
  id: string;
  title: string;
  author?: string;
  date?: string;
  images: {
    mobile: string;
    desktop: string;
  };
  blurDataURL?: string;
  href?: string;
  ctaLabel: string;
};

const StoryCard = ({
  id,
  title,
  author,
  date,
  images,
  blurDataURL,
  href = "#",
  ctaLabel,
}: Story) => {
  return (
    <article
      className="group relative transition-transform duration-300 ease-out lg:hover:-translate-y-6"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 500px" }}
    >
      <Link
        href={href}
        className="relative inset-0 z-10"
        aria-label={`Read story: ${title}${author ? ` by ${author}` : ""}`}
      >
        <picture
          className="block bg-cover bg-center bg-no-repeat"
          style={
            blurDataURL ? { backgroundImage: `url(${blurDataURL})` } : undefined
          }
        >
          <source media="(min-width: 768px)" srcSet={images.desktop} />
          <img
            src={images.mobile}
            alt=""
            loading="lazy"
            className="object-cover block w-full"
          />
        </picture>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-t from-black/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-accent-peach via-accent-pink to-accent-blue opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100" />
        <div className="absolute bottom-0 px-10 pb-10 text-white w-full pointer-events-none">
          <p className="text-preset-6 mb-1">{date}</p>
          <h3 className="text-preset-4 mb-1">{title}</h3>
          {author && <p className="text-preset-6 mb-4">by {author}</p>}
          <hr className="border-white w-full" />
          <div aria-hidden="true">
            <Button
              variant="link"
              colorScheme="light"
              className="mt-5 w-full justify-between group-hover:underline"
              href={href}
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default StoryCard;
