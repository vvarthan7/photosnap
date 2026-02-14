import FeatureItemContainer from "@/components/FeatureItemContainer";
import Flyout from "@/components/Flyout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TextImage from "@/components/TextImage";
import { features } from "@/data/features.json";

export default function Features() {
  return (
    <>
      <Header />
      <main>
        <TextImage
          title="FEATURES"
          description="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."
          imagePosition="right"
          bgColor="bg-neutral-950"
          images={{
            mobile: {
              src: "/assets/features/mobile/hero.webp",
              width: 375,
              height: 294,
            },
            tablet: {
              src: "/assets/features/tablet/hero.webp",
              width: 273,
              height: 490,
            },
            desktop: {
              src: "/assets/features/desktop/hero.webp",
              width: 830,
              height: 490,
            },
          }}
          alt="Create and Share"
          isHero={false}
          isFeaturePage={true}
          blurDataURL="data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAACQAQCdASoKAAgABUB8JZwAApexPBAA/udBTIvpv/CNcAAA"
        />
        <FeatureItemContainer features={features} />
        <Flyout
          images={{
            mobile: "/assets/shared/mobile/bg-beta.webp",
            tablet: "/assets/shared/tablet/bg-beta.webp",
            desktop: "/assets/shared/desktop/bg-beta.webp",
          }}
          title="We're in beta. Get your invite today!"
          ctaLabel="GET AN INVITE"
          href="#"
        />
      </main>
      <Footer />
    </>
  );
}
