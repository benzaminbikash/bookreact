const Banner = () => {
  return (
    <div className="max-w-screen-2xl px-20 flex flex-col md:flex-row md:items-center">
      <div className="w-full md:w-1/2  order-2 md:order-1 lg:mt-48 mt-12 ">
        <div>
          <h1 className="font-bold text-4xl dark:text-white text-black  md:pt-10 lg:pt-0">
            Hello, welcomes here to learn{" "}
            <span className="text-red-500">something new everyday!</span>
          </h1>
          <p className="dark:text-gray-200 mt-6 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde at,
            magni veritatis perspiciatis aliquam nam blanditiis commodi
            corrupti. Minima obcaecati voluptate eveniet libero eaque. Veniam
            iure voluptas ipsam deserunt ut a aspernatur temporibus, ad
            consequuntur consequatur culpa deleniti, dicta iste.
          </p>
          <label className="input input-bordered flex items-center gap-2 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 "
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow text-white"
              placeholder="Email"
            />
          </label>
          <button className="btn btn-active btn-secondary mt-4">
            Subscribe
          </button>
        </div>
      </div>
      <div className=" w-full md:w-1/2 order-1 mt-32  md:mt-10">
        <img src="/images/hero.png" alt="randomImage" />
      </div>
    </div>
  );
};

export default Banner;
