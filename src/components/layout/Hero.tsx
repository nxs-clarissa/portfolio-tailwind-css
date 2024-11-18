export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Annyeong! It's me
                <span className="block font-bold text-dark text-4xl mt-1 lg:5xl">
                  Clarissa Savira
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:2xl">
                FrontEnd Engineer
                <span className="text-dark"> & Data Analyst</span>
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                Belajar web programming itu mudah dan menyenangkan bukan?
                <span className="text-dark"> Bukan!</span>
              </p>

              <a
                href="#contact"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 text-slate-300 ease-in-out"
              >
                Contact me
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img src="./me.png" alt="me" className="max-w-full mx-auto" />
                <span className="absolute -bottom-1 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fb7185"
                      d="M47.1,-49.2C60.1,-34,69.2,-17,69.9,0.7C70.6,18.3,62.8,36.7,49.7,49.2C36.7,61.7,18.3,68.4,-2,70.3C-22.3,72.3,-44.6,69.7,-54.5,57.1C-64.4,44.6,-61.8,22.3,-57.3,4.6C-52.7,-13.2,-46.1,-26.3,-36.2,-41.5C-26.3,-56.6,-13.2,-73.8,1.9,-75.7C17,-77.6,34,-64.3,47.1,-49.2Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //Hero Section END  */}
    </>
  );
}
