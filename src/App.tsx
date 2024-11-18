import { useState, useEffect } from "react";
import "./App.css";
// import HamburgerButton from "./components/button/hamburgerButton";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Portofolio from "./components/layout/Portofolio";

function App() {
  // State untuk navbar dan tombol "scroll to top"
  const [, setIsNavbarFixed] = useState(false);
  const [isToTopVisible, setIsToTopVisible] = useState(false);

  useEffect(() => {
    // Handler untuk event scroll
    const handleScroll = () => {
      const header = document.querySelector("header") as HTMLElement;
      const toTop = document.querySelector("#to-top") as HTMLElement;

      // Cek posisi scroll dan ubah kelas sesuai kebutuhan
      if (window.pageYOffset > header.offsetTop) {
        setIsNavbarFixed(true);
        if (toTop) {
          setIsToTopVisible(true);
        }
      } else {
        setIsNavbarFixed(false);
        if (toTop) {
          setIsToTopVisible(false);
        }
      }
    };

    // Attach event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener ketika komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Kosongkan dependency array untuk hanya dipanggil sekali saat komponen mount

  return (
    <>
      <Header />
      <Hero />
      {/* Scroll to Top Button */}
      <div
        id="to-top"
        className={`fixed bottom-8 right-8 z-0 ${
          isToTopVisible ? "flex" : "hidden"
        } bg-primary p-3 rounded-full cursor-pointer`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="text-white">↑</span>
      </div>

      <About />
      <Portofolio/>

      {/* Client Start */}
      <section id="clients" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Clients
              </h4>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Who have collaborated together
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                facilis cumque enim?
              </p>
            </div>
          </div>
          <div>
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <a
                  href="#"
                  className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 
                  hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <img src="./clients/1.png" alt="Google" />
                </a>
                <a
                  href="#"
                  className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 
                  hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <img src="./clients/shopee.png" alt="Google" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client END */}

      {/* Blog Section Start */}
      <section id="blog" className="pt-36 pb-32 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2 sm:text-4xl lg:text-5xl">
                Blog
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4">
                Tulisan Terkini
              </h2>
              <p className="font-medium text-md text-secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore porro impedit illo quae.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://images.unsplash.com/photo-1698594380432-270f92bf6235?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="waterfall"
                  className="w-full w-500"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Tips Belajar Programming
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    modi nihil molestiae amet sint velit!
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://images.unsplash.com/photo-1698594380432-270f92bf6235?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="waterfall"
                  className="w-full w-500"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Tips Belajar Programming
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    modi nihil molestiae amet sint velit!
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://images.unsplash.com/photo-1698594380432-270f92bf6235?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="waterfall"
                  className="w-full w-500"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Tips Belajar Programming
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    modi nihil molestiae amet sint velit!
                  </p>
                  <a
                    href="#"
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Start */}
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2 sm:text-4xl lg:text-5xl">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4">
                Hubungi Kami
              </h2>
              <p className="font-medium text-md text-secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore porro impedit illo quae.
              </p>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 mb-8 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="pesan"
                  className="text-base font-bold text-primary"
                >
                  Message
                </label>
                <textarea
                  id="pesan"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none 
                focus:ring-primary focus:ring-1 focus:border-primary h-32"
                />
              </div>
              <div className="w-full px-4">
                <button
                  className="text-base font-semibold text-white bg-primary
              py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg 
              transition duration-500"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact End */}

      {/* Footer Start */}
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div
              className="w-full px-4 mb-12 text-slate-300 font-medium
            md:w-1/3"
            >
              <h2 className="font-bold text-4xl text-white mb-5">ZB1</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p>clarissa@gmail.com</p>
              <p>Jl. Wonosari</p>
              <p>Yogyakarta</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">
                Kategori Tulisan
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Programming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Lifestyle
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#home"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              {/* Youtube */}
              <a
                href="https://youtube.com/@ZB1_official"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/zb1_official"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/zb1_official"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              {/* Tiktok */}
              <a
                href="https://x.com/@ZB1_official"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>TikTok</title>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Created by{" "}
              <a
                href="https://instagram.com/clarissavra"
                target="_blank"
                className="font-bold text-primary"
              >
                Clarissa Savira Madayanto
              </a>
              , using{" "}
              <a
                href="https://react.dev/"
                target="_blank"
                className="font-bold text-sky-500"
              >
                React
              </a>{" "}
              &{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                className="font-bold text-sky-500"
              >
                Tailwind CSS 3
              </a>
            </p>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
}

export default App;
