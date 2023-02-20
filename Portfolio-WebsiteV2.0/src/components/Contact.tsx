import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { FiSend } from "react-icons/fi";
import { BiSend } from "react-icons/bi";

const Contact = () => {
  const { setActiveFilter } = useContext(AppContext);

  useEffect(() => {
    setActiveFilter("Contact");
  }, []);

  return (
    <>
      <section className="z-5 flex h-screen w-full flex-col items-center justify-center bg-wht px-4 pt-24 pb-12 sm:px-10 md:px-14 ">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-2 pb-5 text-center font-catamaran text-3xl font-extrabold uppercase leading-3 text-wht">
            {`< Contact />`}
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s flex h-full w-full max-w-4xl items-center justify-center rounded border-r-4 border-l-4 border-indigo-800 bg-dark-blue py-6 px-4 sm:rounded-xl sm:px-10 sm:py-10">
            <form
              action="#"
              className="flex h-full w-full flex-col items-center justify-center gap-3 "
            >
              <input
                autoComplete="off"
                className="w-full max-w-md rounded bg-wht py-1.5 px-3 font-poppins text-sm font-semibold leading-3 text-slate-600 focus:outline-none"
                type="text"
                name="Name"
                placeholder="Name*"
              />
              <input
                className="w-full max-w-md rounded bg-wht py-1.5 px-3 font-poppins text-sm font-semibold leading-3 text-slate-600 focus:outline-none"
                type="email"
                name="Email"
                placeholder="Email Id*"
              />
              <textarea
                rows={8}
                className="w-full max-w-md rounded bg-wht py-2 px-3 font-poppins text-sm font-semibold leading-4 text-slate-600 focus:outline-none"
                name="Message"
                placeholder="Message...*"
              />
              <button
                className="w-full flex items-center justify-center gap-1 max-w-md rounded hover:bg-orange-600 transition-all duration-300 hover:text-wht bg-green-700 py-3 px-3 font-poppins text-sm font-semibold leading-4 text-wht focus:outline-none"
                type="submit"
              >
                <FiSend/>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
