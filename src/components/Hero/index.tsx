import { motion } from "framer-motion";
import { herovideo } from "../../assets/videohero";

export const Hero = () => {
  return (
    <section className="wrapper">
      <div
        className="h-screen flex flex-col justify-between w-full
      "
      >
        {/*content*/}
        <div className="flex flex-col gap-16 h-max  px-6 pt-52  ">
          <h1 className="capitalize text-7xl font-semibold ">
            Doing climate right
          </h1>
          <h1 className="text-xl font-medium">
            Heating,
            <br /> &nbsp; cooling, <br /> &nbsp;&nbsp; and hot water <br />
            &nbsp;&nbsp;&nbsp; with minimal costs and <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp; without harming the environment.
          </h1>
        </div>
        {/*content end */}
        {/*video */}
        <motion.div className="w-full relative h-max  -z-10 ">
          <video autoPlay muted loop playsInline className="absolute w-full bottom-0  ">
            <source src={herovideo} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
};
