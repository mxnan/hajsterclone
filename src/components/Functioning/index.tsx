export const Functioning = () => {
  return (
    <section className="wrapper h-[80vh] w-full bg-[#f5f5f5] py-12 lg:px-6 ">
      <div
        className="w-full h-full  rounded-3xl bg-[rgb(141,138,138)]
       flex flex-col xl:flex-row
       justify justify-evenly
       max-sm:items-start sm:items-center 
       py-2 px-6
       "
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
        font-medium text-stone-50 xl:w-1/4 "
        >
          Heating in winter,
          <br className="lg:hidden xl:visible" /> cooling in summer .
        </h1>
        <div
          className="flex flex-col xl:flex-row
        gap-4 xl:gap-12  xl:justify-evenly max-sm:items-center
         justify-center"
        >
          <div className="w-40 h-36 bg-red-700 rounded-3xl"></div>
          <div className="w-40 h-36 bg-red-700 rounded-3xl"></div>
          <div className="w-40 h-36 bg-red-700 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};
