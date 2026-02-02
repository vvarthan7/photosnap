import Header from "@/components/Header";
import TextImage from "@/components/TextImage";

export default function Home() {
  return (
    <>
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
              src: "/assets/home/mobile/create-and-share.jpg",
              width: 375,
              height: 294,
            },
            tablet: {
              src: "/assets/home/tablet/create-and-share.jpg",
              width: 768,
              height: 650,
            },
            desktop: {
              src: "/assets/home/desktop/create-and-share.jpg",
              width: 1152,
              height: 650,
            },
          }}
          alt="Create and Share"
          isHero={true}
        />
        <TextImage
          title="BEAUTIFUL STORIES EVERY TIME"
          description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          btnLabel="VIEW THE STORIES"
          imagePosition="left"
          bgColor="bg-neutral-0"
          images={{
            mobile: {
              src: "/assets/home/mobile/beautiful-stories.jpg",
              width: 375,
              height: 294,
            },
            tablet: {
              src: "/assets/home/tablet/beautiful-stories.jpg",
              width: 768,
              height: 650,
            },
            desktop: {
              src: "/assets/home/desktop/beautiful-stories.jpg",
              width: 1152,
              height: 650,
            },
          }}
          alt="Beautiful Stories"
        />
        <TextImage
          title="DESIGNED FOR EVERYONE"
          description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
          btnLabel="VIEW THE STORIES"
          imagePosition="right"
          bgColor="bg-neutral-0"
          images={{
            mobile: {
              src: "/assets/home/mobile/designed-for-everyone.jpg",
              width: 375,
              height: 294,
            },
            tablet: {
              src: "/assets/home/tablet/designed-for-everyone.jpg",
              width: 768,
              height: 650,
            },
            desktop: {
              src: "/assets/home/desktop/designed-for-everyone.jpg",
              width: 1152,
              height: 650,
            },
          }}
          alt="Designed for Everyone"
        />
      </main>
    </>
  );
}
