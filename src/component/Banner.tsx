import BannerStack from "../assets/banner-stack.png";
const Banner = () => {
  
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg leading-8 max-w-xl">
            Explore the technologies you need to build modern,
            powerful and scalable applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
              Explore Technologies
            </button>

            <button className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-medium">
              Learn More
            </button>
          </div>
        </div>


        <div className="flex justify-center">
  <img
    src={BannerStack}
    alt="Development technology"
    className="w-full max-w-md"
  />
</div>

      </div>
    </section>
  );
};

export default Banner ;