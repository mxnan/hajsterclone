import { cta } from "../../assets";

export const CTASection = () => {
  return (
    <section
      className="wrapper w-full h-screen
    px-6
    "
    >
      <div
        className="
      w-full h-full items-center justify-center
      flex flex-col gap-16
      "
      >
        <div className="flex flex-col w-full gap-6 items-center">
          <h1 className="text-4xl font-semibold">
            Choose a future that is good for you and the planet !
          </h1>
          <button
            className="p-3 px-6  py-3
            max-md:w-full w-max rounded-3xl text-2xl

              bg-black text-white hover:text-black hover:bg-[#fffce3]
              flex items-center text-center  font-semibold
              "
          >
            I want to install Hajster
          </button>
        </div>
        <img src={cta} alt="image" className="rounded-3xl" />
      </div>
    </section>
  );
};
