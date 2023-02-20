import { useContext, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AppContext } from "../App";
import { FiSend } from "react-icons/fi";
import { BiSend } from "react-icons/bi";

const Contact = () => {
  const { setActiveFilter } = useContext(AppContext);
  const [state, handleSubmit] = useForm("xoqzddkg");

  if (state.succeeded) {
    // return <p>Thanks for joining!</p>;
    console.log("Thank you. Your message has been delivered...");
  }

  useEffect(() => {
    setActiveFilter("Contact");
  }, []);

  return (
    <>
      <section className="z-5 flex h-screen w-full flex-col items-center justify-center bg-dark-blue px-4 pt-24 pb-12 transition-all duration-500 sm:px-10 md:bg-wht md:px-14 ">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-2 pb-5 text-center font-catamaran text-3xl font-extrabold uppercase leading-3 text-wht transition-all duration-500 md:text-dark-blue">
            {`< Contact />`}
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s flex h-fit w-full max-w-4xl flex-col items-center justify-center rounded-md bg-dark-blue py-6 px-4 transition-all duration-500 sm:rounded-xl sm:px-10 sm:py-10 md:h-full">
            <form
              // action="https://formspree.io/f/xoqzddkg"
              onSubmit={handleSubmit}
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
                className="flex w-full max-w-md items-center justify-center gap-1 rounded bg-green-700 py-3 px-3 font-poppins text-sm font-semibold leading-4 text-wht transition-all duration-300 hover:bg-orange-600 hover:text-wht focus:outline-none"
                type="submit"
                disabled={state.submitting}
              >
                <FiSend />
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
