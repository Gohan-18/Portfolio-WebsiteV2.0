import { useContext, useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AppContext } from "../App";
import { FiSend } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import CustomizedSnackbars from "./Snackbar";

const Contact = () => {
  const { setActiveFilter } = useContext(AppContext);
  const [state, handleSubmit] = useForm("xoqzddkg");
  const [contactName, setContactName] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const { open, setOpen } = useContext(AppContext);

  console.log(open);

  console.log(handleSubmit);

  if (state.succeeded) {
    // return <p>Thanks for joining!</p>;
    console.log("Thank you. Your message has been delivered...");
    // setSucceeded(false)
  }

  useEffect(() => {
    setActiveFilter("Contact");
  }, []);

  return (
    <>
      <section className="z-5 padding-top relative flex h-full w-full flex-col items-center justify-center bg-dark-blue px-4 pb-12 transition-all duration-500 sm:px-10 md:h-screen md:bg-wht md:px-14 ">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-7 pb-5 text-center font-catamaran text-2xl font-extrabold uppercase leading-3 text-wht transition-all duration-500 sm:text-3xl md:pt-2 md:text-dark-blue">
            {`< Contact />`}
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s relative flex h-fit w-full max-w-4xl flex-col items-center justify-center rounded-md bg-dark-blue py-3 px-4 transition-all duration-300 sm:rounded-xl sm:px-10 md:h-full md:py-6">
            <form
              // action="https://formspree.io/f/xoqzddkg"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e).then(setOpen(true));
                setContactName("");
                setContactEmail("");
                setContactMessage("");
              }}
              className="flex h-full w-full flex-col items-center justify-center gap-3 "
            >
              <input
                required
                autoComplete="off"
                className="w-full max-w-md rounded bg-wht py-1.5 px-3 font-poppins text-sm font-semibold leading-3 text-slate-600 focus:outline-none"
                type="text"
                name="Name"
                placeholder="Name*"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
              <input
                required
                className="w-full max-w-md rounded bg-wht py-1.5 px-3 font-poppins text-sm font-semibold leading-3 text-slate-600 focus:outline-none"
                type="email"
                name="Email"
                placeholder="Email Id*"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
              <textarea
                required
                rows={8}
                className="w-full max-w-md rounded bg-wht py-2 px-3 font-poppins text-sm font-semibold leading-4 text-slate-600 focus:outline-none"
                name="Message"
                placeholder="Message...*"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
              />
              <button
                className="flex w-full max-w-md items-center justify-center gap-1 rounded bg-green-700 py-3 px-3 font-poppins text-sm font-semibold leading-4 text-wht transition-all duration-300 hover:bg-orange-600 hover:text-wht focus:outline-none"
                type="submit"
                disabled={state.submitting}
                // onClick={handleSuccessClick}
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <CustomizedSnackbars />
    </>
  );
};

export default Contact;
