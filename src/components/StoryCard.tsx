import Button from "./Button";

export type Story = {
  title: string;
  author?: string;
  images: {
    mobile: string;
    desktop: string;
  };
  href?: string;
};

const StoryCard = ({ title, author, images, href = "#" }: Story) => {
  return (
    <div className="group relative transition-transform duration-300 ease-out lg:hover:-translate-y-6">
      <picture>
        <source media="(min-width: 768px)" srcSet={images.desktop} />
        <img
          src={images.mobile}
          alt={title}
          loading="lazy"
          className="object-cover block w-full"
        />
      </picture>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-t from-black/50 to-transparent/0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-accent-peach via-accent-pink to-accent-blue opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100" />
      <div className="absolute bottom-0 px-10 pb-10 text-white w-full">
        <h3 className="text-preset-4 mb-1">{title}</h3>
        {author && <p className="text-preset-6 mb-4">by {author}</p>}
        <hr className="border-white w-full" />
        <Button
          variant="link"
          colorScheme="light"
          className="mt-5 w-full justify-between"
          href={href}
        >
          READ STORY
        </Button>
      </div>
    </div>
  );
};

export default StoryCard;
