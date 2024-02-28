import { HiChevronDoubleRight } from "react-icons/hi2";
import { formhajster } from "../../assets";

export const FormSection = () => {
  return (
    <section className="wrapper h-screen w-full overflow-hidden md:px-6 md:py-20">
      <div
        className="w-full h-full  bg-[rgb(229,221,221)] rounded-3xl
     flex flex-col lg:flex-row overflow-hidden
     xl:px-16 xxl:px-36
    "
      >
        <div
          className="w-full h-full
           flex flex-col          
        max-sm:px-6 px-6 xl:px-6
        lg:w-[1/2]
        py-16 "
        >
          <h1 className="sm:text-3xl xl:text-4xl lg:mb-10 max-sm:text-2xl font-medium">
            Just imagine your future benefits with
            <br /> Hajster heat pumps.
          </h1>
          <div
            className="h-full w-full flex flex-col items-start
          max-lg:gap-10 xl:pr-10
           max-lg:justify-center lg:justify-evenly"
          >
            <div className="flex w-full flex-col gap-2 ">
              <p className="text-xl">City</p>
              <input
                type="text"
                className="rounded-3xl w-full border border-gray-400 py-3  bg-transparent"
              />
            </div>
            <div className="flex w-full flex-col gap-2 ">
              <p className="text-xl">Area</p>
              <input
                type="text"
                className="rounded-3xl w-full border border-gray-400 py-3  bg-transparent"
              />
            </div>
            <div className="flex w-full flex-col gap-2 ">
              <p className="text-xl">Email</p>
              <input
                type="text"
                className="rounded-3xl w-full border border-gray-400 py-3  bg-transparent"
              />
            </div>
            <button
              className="p-3 px-6  py-2
               max-sm:w-full w-max 
              rounded-3xl bg-[#fffce3]
              flex items-center  font-semibold
              max-sm:justify-between
              sm:gap-4
              sm:text-xl
              "
            >
              <span>show results</span>
              <HiChevronDoubleRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <img
          src={formhajster}
          alt="formimg"
          className="max-lg:hidden rounded-3xl
           lg:max-w-[725px] lg:max-h-[690px] m-10 xl:mx-32
          "
        />
      </div>
    </section>
  );
};
