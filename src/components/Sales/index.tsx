import { sales1, sales2, sales3 } from "../../assets";
import { FaAngleRight } from "react-icons/fa";

export const Sales = () => {
  return (
    <section className="wrapper  h-full w-full lg:px-[4vw]">
      <div
        className="w-full h-full bg-[rgb(229,221,221)] py-[10vh] px-10  rounded-3xl
      
      "
      >
        {/*heading*/}
        <div
          className="flex items-center justify-between
        py-6 px-6 md:px-14
        "
        >
          <h1 className="text-xl xl:text-3xl font-semibold">
            Sales launch spring 2024
          </h1>
          <h1 className="text-2xl xl:text-4xl font-bold">hajster</h1>
        </div>
        {/*heading end */}
        {/* image section*/}
        <div
          className=" w-full h-full
        flex flex-col items-center justify-center
        xl:flex-row xl:gap-6
        gap-10 py-6 px-6"
        >
          {/*img 1*/}
          <div
            className="flex flex-col p-1 gap-4 items-center justify-center 
          max-xl:w-full max-xl:max-w-[900px] xl:w-max 
          max-sm:h-[55vh] sm:h-[70vh] md:h-[76vh] max-lg:h-[85vh] max-xl:h-[87vh] xl:h-[90vh]
          "
          >
            {/*content*/}
            <div
              className="flex relative overflow-hidden rounded-3xl items-center justify-center 
              "
            >
              <div
                className="flex flex-col items-start gap-10 text-[#dddad6]
              absolute bottom-12 left-6 z-10"
              >
                <h1 className=" text-xl font-semibold ">
                  Air-water heat pumps
                </h1>
                <h1 className=" text-3xl font-semibold ">Hajster NEBO split</h1>
              </div>
              {/*image*/}
              <img
                src={sales1}
                alt="sales1"
                className="xl:h-[800px] xl
                bg-cover  
             "
              />
            </div>
            {/*button*/}
            <button
              className="flex justify-between items-center 
              w-full
            rounded-3xl border-2 border-[#292828] py-2 px-4
            "
            >
              <span className="text-2xl capitalize font-medium">
                more details
              </span>
              <FaAngleRight className="w-8 h-8" />
            </button>
          </div>
          {/*img 2*/}
          <div
            className="flex flex-col p-1 gap-4 items-center justify-center 
          max-xl:w-full max-xl:max-w-[900px] xl:w-max 
          max-sm:h-[55vh] sm:h-[70vh] md:h-[76vh] max-lg:h-[85vh] max-xl:h-[87vh] xl:h-[90vh]
          "
          >
            {/*content*/}
            <div
              className="flex relative overflow-hidden rounded-3xl items-center justify-center 
              "
            >
              <div
                className="flex flex-col items-start gap-10 text-[#dddad6]
              absolute bottom-12 left-6 z-10"
              >
                <h1 className=" text-xl font-semibold ">
                  Air-water heat pumps
                </h1>
                <h1 className=" text-3xl font-semibold ">Hajster NEBO mono</h1>
              </div>
              {/*image*/}
              <img
                src={sales2}
                alt="sales1"
                className="xl:h-[800px] xl
                bg-cover  
             "
              />
            </div>
            {/*button*/}
            <button
              className="flex justify-between items-center 
              w-full
            rounded-3xl border-2 border-[#292828] py-2 px-4
            "
            >
              <span className="text-2xl capitalize font-medium">
                more details
              </span>
              <FaAngleRight className="w-8 h-8" />
            </button>
          </div>
          {/*img 3*/}
          <div
            className="flex flex-col p-1 gap-4 items-center justify-center 
          max-xl:w-full max-xl:max-w-[900px] xl:w-max 
          max-sm:h-[55vh] sm:h-[70vh] md:h-[76vh] max-lg:h-[85vh] max-xl:h-[87vh] xl:h-[90vh]
          "
          >
            {/*content*/}
            <div
              className="flex relative overflow-hidden rounded-3xl items-center justify-center 
              "
            >
              <div
                className="flex flex-col items-start gap-10 text-[#dddad6]
              absolute bottom-12 left-6 z-10"
              >
                <h1 className=" text-xl font-semibold ">
                  Geothermal heat pumps
                </h1>
                <h1 className=" text-3xl font-semibold ">Hajster GRUNT</h1>
              </div>
              {/*image*/}
              <img
                src={sales3}
                alt="sales1"
                className="xl:h-[800px] xl
                bg-cover  
             "
              />
            </div>
            {/*button*/}
            <button
              className="flex justify-between items-center 
              w-full
            rounded-3xl border-2 border-[#292828] py-2 px-4
            "
            >
              <span className="text-2xl capitalize font-medium">
                more details
              </span>
              <FaAngleRight className="w-8 h-8" />
            </button>
          </div>
        </div>
        {/* image section end*/}
      </div>
    </section>
  );
};
