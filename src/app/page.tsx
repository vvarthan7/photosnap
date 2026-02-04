import Header from "@/components/Header";
import StoryCardContainer from "@/components/StoryCardContainer";
import TextImage from "@/components/TextImage";
import { Story } from "@/components/StoryCard";

const homeStories: Story[] = [
  {
    title: "The Mountains",
    author: "John Appleseed",
    images: {
      mobile: "/assets/stories/mobile/mountains.jpg",
      desktop: "/assets/stories/desktop/mountains.jpg",
    },
  },
  {
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    images: {
      mobile: "/assets/stories/mobile/cityscapes.jpg",
      desktop: "/assets/stories/desktop/cityscapes.jpg",
    },
  },
  {
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    images: {
      mobile: "/assets/stories/mobile/18-days-voyage.jpg",
      desktop: "/assets/stories/desktop/18-days-voyage.jpg",
    },
  },
  {
    title: "Architecturals",
    author: "Samantha Brooke",
    images: {
      mobile: "/assets/stories/mobile/architecturals.jpg",
      desktop: "/assets/stories/desktop/architecturals.jpg",
    },
  },
];

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/assets/home/desktop/create-and-share.webp"
        media="(min-width: 1280px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/home/tablet/create-and-share.webp"
        media="(min-width: 768px) and (max-width: 1279px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/home/mobile/create-and-share.webp"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <Header />
      <main>
        <TextImage
          title="CREATE AND SHARE YOUR PHOTO STORIES"
          description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          btnLabel="GET AN INVITE"
          imagePosition="right"
          bgColor="bg-neutral-950"
          images={{
            mobile: {
              src: "/assets/home/mobile/create-and-share.webp",
              width: 375,
              height: 294,
            },
            tablet: {
              src: "/assets/home/tablet/create-and-share.webp",
              width: 768,
              height: 650,
            },
            desktop: {
              src: "/assets/home/desktop/create-and-share.webp",
              width: 1152,
              height: 650,
            },
          }}
          alt="Create and Share"
          isHero={true}
          blurDataURL="data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAACQAQCdASoKAAgABUB8JZwAApexPBAA/udBTIvpv/CNcAAA"
        />
        <TextImage
          title="BEAUTIFUL STORIES EVERY TIME"
          description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          btnLabel="VIEW THE STORIES"
          imagePosition="left"
          bgColor="bg-neutral-0"
          images={{
            mobile: {
              src: "/assets/home/mobile/beautiful-stories.webp",
              width: 375,
              height: 271,
            },
            tablet: {
              src: "/assets/home/tablet/beautiful-stories.webp",
              width: 768,
              height: 600,
            },
            desktop: {
              src: "/assets/home/desktop/beautiful-stories.webp",
              width: 1152,
              height: 600,
            },
          }}
          alt="Beautiful Stories"
          blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoKAAcABUB8JQBOgB6Q+uyAAPjknrcRd8CU6AuUUNIAAA=="
        />
        <TextImage
          title="DESIGNED FOR EVERYONE"
          description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
          btnLabel="VIEW THE STORIES"
          imagePosition="right"
          bgColor="bg-neutral-0"
          images={{
            mobile: {
              src: "/assets/home/mobile/designed-for-everyone.webp",
              width: 375,
              height: 271,
            },
            tablet: {
              src: "/assets/home/tablet/designed-for-everyone.webp",
              width: 768,
              height: 600,
            },
            desktop: {
              src: "/assets/home/desktop/designed-for-everyone.webp",
              width: 1152,
              height: 600,
            },
          }}
          alt="Designed for Everyone"
          blurDataURL="data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAACwAQCdASoKAAcABUB8JZQAAueBcy+AAP7ssG/ns9QlwAAA"
        />
        <StoryCardContainer stories={homeStories} />
      </main>
    </>
  );
}
