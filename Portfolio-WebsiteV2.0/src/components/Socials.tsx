import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { RiTelegramFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const Socials = () => {
  return (
    <>
    <section>
    <div className="animate__animated animate__slideInUp hidden fixed right-0 bottom-0 md:flex max-w-xs items-center flex-col justify-center gap-1 rounded py-1.5 px-3 font-poppins text-sm font-medium text-wht md:bottom-1  ">
        <a href="https://www.linkedin.com/in/prabhat187/" target="_blank" >
            <CiLinkedin className="cursor-pointer rounded bg-dark-blue p-0.5 text-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600 " />
        </a>
        <a href="https://github.com/Gohan-18" target="_blank" >
            <AiFillGithub className="cursor-pointer rounded bg-dark-blue p-1 text-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600" />
        </a>
        <a href="mailto:pkjha187@gmail.com" target="_blank" >
            <HiOutlineMail className="cursor-pointer rounded bg-dark-blue p-1 text-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600" />
        </a>
        <a href="https://www.instagram.com/prab_hat18/" target="_blank" >
            <BsInstagram className="cursor-pointer rounded bg-dark-blue p-1.5 text-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600" />
        </a>
        <a href="https://t.me/Prab_hat18/" target="_blank" >
            <RiTelegramFill className="cursor-pointer rounded bg-dark-blue p-1 text-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600" />
        </a>
    </div>
    </section>
    </>
  )
}

export default Socials