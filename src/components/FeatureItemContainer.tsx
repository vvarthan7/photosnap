import FeatureItem, { Feature } from "./FeatureItem";

type FeatureItemContainerProps = {
  features: Feature[];
};

const FeatureItemContainer = ({ features }: FeatureItemContainerProps) => {
  return (
    <section
      aria-label="Features"
      className="px-8 md:px-[155px] lg:px-0 container-desktop grid gap-14 md:gap-20 lg:gap-7 grid-cols-1 lg:grid-cols-3 py-[80px] md:py-[120px]"
    >
      {features.map((feature) => (
        <FeatureItem key={feature.title} {...feature} />
      ))}
    </section>
  );
};

export default FeatureItemContainer;
