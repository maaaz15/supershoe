import Cards from "./Cards";

const FeaturedProducts = () => {
  return (
    <div className="py-12">
      <div className="text-center">
        <h2 className="text-lg md:text-2xl font-bold tracking-wide uppercase">
          Step into Style, Stride with Confidence.
        </h2>
        <p className="mt-8 text-sm md:text-lg leading-8 font-medium ">
          Elevate your every step with our meticulously crafted shoes, where
          fashion meets comfort. Explore a curated collection designed to
          empower your journey, one stylish stride at a time.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default FeaturedProducts;
