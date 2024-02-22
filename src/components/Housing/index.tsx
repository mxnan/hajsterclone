import { housing1, housing2 } from "../../assets";

export const Housing = () => {
  return (
    <section className="wrapper h-full w-full">
      <div className="relative h-full w-full px-6 lg:px-[4vw] py-16">
        <h1 className="text-4xl md:text-5xl
        xl:mr-96 lg:text-7xl
        max-lg:text-center lg:text-end">
          For a dream home ,<br className="" /> future or existing .
        </h1>
        <div
          className="mt-24 
        flex flex-col lg:flex-row items-center justify-center gap-8
        "
        >
          {/*image 1*/}
          <div className=" max-h-[725px] max-w-[725px]">
            <img
              src={housing1}
              alt="housing1"
              className="bg-cover rounded-3xl"
            />
          </div>
          {/*image 2*/}
          <div className=" max-h-[725px] max-w-[725px]">
            <img
              src={housing2}
              alt="housing2"
              className="bg-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
