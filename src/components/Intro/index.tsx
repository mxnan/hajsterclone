export const Intro = () => {
  return (
    <section className="wrapper">
      {/*content*/}
      <div
        className=" h-[60vh] w-full flex flex-col
      px-6 py-12 justify-around
      "
      >
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-2xl font-semibold">
            Hajster is an Ukrainian manufacturer of heat pumps, that has been
            offering not only product quality but also customer peace of mind.
          </h1>
          <button
            className="p-3 px-6 text-2xl rounded-3xl bg-[#fffce3]
          flex items-center capitalize font-semibold
          "
          >
            about our company
          </button>
        </div>
        <div>
          <h1 className="text-3xl capitalize font-semibold">
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
