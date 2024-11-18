export default function Portofolio() {
  return (
    <>
      {/* PORTOFOLIO SECTION */}
      <section id="portfolio" className="pt-36 pb16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2 sm:text-4xl lg:text-5xl">
                Portfolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4">New Project</h2>
              <p className="font-medium text-md text-secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit et corrupti ea nostrum veritatis itaque. Obcaecati
                corporis expedita repellendus rem.
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2 ">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="./portfolio/1.png" alt="Dashboard" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Ameribite Dashboard
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur quia incidunt dolor? Fugiat, libero asperiores!
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2 ">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src="./portfolio/2.png" alt="Dashboard" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Web Profile Sumber Djadi Makmur
              </h3>
              <p className="font-medium text-base text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur quia incidunt dolor? Fugiat, libero asperiores!
              </p>
            </div>
          </div>
        </div>
      </section>
      ;{/* Portofolio END */};
    </>
  );
}
