import { image1, image2, imagesvg } from "../../assets";

export const ImageSection = () => {
  return (
    <section className="wrapper h-[90vh] md:h-[60vh] lg:h-[100vh] overflow-hidden  w-full">
      <div
        className="w-full h-full flex flex-col 
      md:flex-row max-md:justify-center
      gap-10  max-md:py-20
       px-6 py-12 lg:px-[4vw]"
      >
        <div
          className="rounded-3xl relative 
          md:flex md:items-center md:justify-center
          w-full h-2/4 
          md:h-full md:w-1/3
        overflow-hidden
        "
        >
          <img src={image1} alt="image1" className="bg-center  rounded-3xl max-md:-mt-20" />
        </div>
        <div
          className="rounded-3xl relative overflow-hidden
         w-full h-2/4 flex items-center justify-center
         md:h-full md:w-2/3"
        >
          <img src={image2} alt="image2" className="bg-center rounded-3xl " />
          <img src={imagesvg} alt="image2svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"  />
        </div>
      </div>
    </section>
  );
};
