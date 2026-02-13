import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteStories from "@/components/InfiniteStories";
import { stories } from "@/data/stories.json";

export default function Stories() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/assets/stories/desktop/moon-of-appalacia.webp"
        media="(min-width: 1280px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/stories/tablet/moon-of-appalacia.webp"
        media="(min-width: 768px) and (max-width: 1279px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/stories/mobile/moon-of-appalacia.webp"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <Header />
      <main>
        <Banner
          title="HAZY FULL MOON OF APPALACHIA"
          preTitle="LAST MONTH'S FEATURED STORY"
          description='The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in
          eastern Kentucky and West Virginia, and while the ridges are not high,
          the terrain is extremely rugged.'
          date="March 2nd 2020"
          author="John Appleseed"
          ctaLabel="READ THE STORY"
          images={{
            mobile: {
              src: "/assets/stories/mobile/moon-of-appalacia.webp",
              width: 375,
              height: 317,
              blurDataURL:
                "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAADQAQCdASoKAAgABUB8JQBOgCPTZk5vAAD+c7gSFfLRBdAAAAA=",
            },
            tablet: {
              src: "/assets/stories/tablet/moon-of-appalacia.webp",
              width: 768,
              height: 650,
              blurDataURL:
                "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAADQAQCdASoKAAgABUB8JQBOgCPQQNWjsAD+GwxsIfyzpRAAAAA=",
            },
            desktop: {
              src: "/assets/stories/desktop/moon-of-appalacia.webp",
              width: 1440,
              height: 650,
              blurDataURL:
                "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAADQAQCdASoKAAUABUB8JQBOgCPSUsN8AAD+v+fks+hzy0QXQAAAAA==",
            },
          }}
        />
        <InfiniteStories stories={stories} />
      </main>
      <Footer />
    </>
  );
}
