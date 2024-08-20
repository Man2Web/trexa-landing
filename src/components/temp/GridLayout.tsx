export const GridLayout = () => {
  return (
    <section className="my-8">
      <h1 className="font-semibold mb-4">
        Listen to what our users say about us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-6 ">
        {/* Column One */}
        <div className="col-span-1 flex flex-col gap-10">
          <div className="h-64 bg-red-100 rounded-lg shadow-lg p-4"></div>
          <div className="h-64 bg-red-100 rounded-lg shadow-lg p-4"></div>
          <div className="h-64 bg-red-100 rounded-lg shadow-lg p-4"></div>
        </div>
        {/* Column Two */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-10">
          <div className="h-80 bg-red-100 rounded-lg shadow-lg p-4"></div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-6">
            <div className="h-96 w-80 col-span-1 row-span-2 bg-red-100 rounded-lg shadow-lg p-4"></div>
            <div className="flex flex-col gap-10">
              <div className="h-52 w-80 col-span-1 row-span-2 bg-red-100 rounded-lg shadow-lg p-4"></div>
              <div className="h-52 w-80 col-span-1 row-span-2 bg-red-100 rounded-lg shadow-lg p-4"></div>
            </div>
          </div>
        </div>
        {/* Column Three */}
        <div className="col-span-1 flex flex-col gap-10">
          <div className="h-96 w-52 bg-red-100 rounded-lg shadow-lg p-4"></div>
          <div className="h-96 w-52 bg-red-100 rounded-lg shadow-lg p-4"></div>
        </div>
      </div>
    </section>
  );
};
