import StoryCard, { Story } from "./StoryCard";

type StoryCardContainerProps = {
  stories: Story[];
};

const StoryCardContainer = ({ stories }: StoryCardContainerProps) => {
  return (
    <section
      aria-label="Featured Stories"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
    >
      {stories.map((story) => (
        <StoryCard key={story.title} {...story} />
      ))}
    </section>
  );
};

export default StoryCardContainer;
