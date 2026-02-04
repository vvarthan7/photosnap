import Image from "next/image";

export type Feature = {
  title: string;
  description: string;
  image: string;
};

const FeatureItem = ({ title, description, image }: Feature) => {
  return (
    <article className="flex flex-col justify-start items-center text-center">
      <div className="h-[72px] flex items-center mb-12">
        <Image
          src={image}
          alt={title}
          width={72}
          height={72}
          className="max-h-[72px]"
        />
      </div>
      <h3 className="text-preset-4">{title}</h3>
      <p className="text-preset-5-regular mt-4">{description}</p>
    </article>
  );
};

export default FeatureItem;
