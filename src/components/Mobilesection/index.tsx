import { motion } from "framer-motion";
import { mobile } from "../../assets";

export const Mobilesection = () => {
  return (
    <section className="wrapper h-full w-full px-6 lg:px-[4vw] pb-24">
      <div className="w-full h-full 
       flex flex-col items-center 
       lg:flex-row lg:justify-evenly
       gap-16
       ">

        <div className="flex relative lg:w-1/3 rounded-3xl overflow-hidden">
          <motion.img
          initial={{ scale:1.2 }}
          animate={{ scale:1.2 }}
          src={mobile} alt="mobile" 
          className="w-full h-full rounded-3xl max-h-[600px] max-w-[700px] bg-cover" />
        </div>

        <div className="flex flex-col lg:w-1/4  sm:text-center lg:text-start
        gap-6
        ">
          <h1 className="text-4xl font-semibold">Comfort and control in a few taps</h1>
          <h1 className="text-lg font-medium">
            Thanks to the Hajster application, you will have remote access to
            your device, you will be able to monitor indicators and performance,
            and if necessary, order maintenance in one click.
          </h1>
        </div>
      </div>
    </section>
  );
};
