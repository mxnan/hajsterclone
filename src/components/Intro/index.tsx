export const Intro = () => {
  return (
    <section className="wrapper bg-[#f5f5f5]">
      {/*content*/}
      <div
        className=" h-[80vh] w-full flex flex-col lg:flex-row
      px-6 py-12 justify-around lg:justify-between items-center
      "
      >
        <div className="flex flex-col
        lg:w-1/3 lg:px-6
        lg:items-end gap-10 lg:gap-4">
          <h1 className="text-2xl lg:text-xl lg:text-right font-semibold">
            Hajster is an Ukrainian manufacturer of heat pumps, that has been
            offering not only product quality but also customer peace of mind.
          </h1>
          <button
            className="p-3 w-max px-6 text-2xl lg:text-base rounded-3xl bg-[#fffce3]
          flex items-center capitalize font-semibold
          "
          >
            about our company
          </button>
        </div>
        <div className="w-full flex items-center justify-start
        lg:pl-40 py-2">
          <h1 className="text-3xl lg:text-5xl capitalize font-semibold">
            Development,
            <br /> installation ,
            <br /> support , 
            <br /> service , 
            <br /> of heat pumps.
          </h1>
        </div>
      </div>
    </section>
  );
};
