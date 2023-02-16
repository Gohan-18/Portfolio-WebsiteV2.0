import React from 'react'

const Header = () => {
  return (
    <>
      <section className="z-5 w-full flex-col bg-header-banner bg-no-repeat">
        <div
          id="Home"
          className="flex h-screen w-1/2 flex-col flex-wrap items-center justify-start px-10 pt-24"
        >
          <h2 className="animate__animated  animate__pulse hero-text pt-20 pb-5 pr-16 font-catamaran text-4xl font-black uppercase text-white shadow-black drop-shadow-lg">
            Hey there ,<br></br> Welcome to my portfolio website .
          </h2>
          <h3 className="pb-5 font-poppins text-lg font-bold capitalize leading-6 text-white ">
            I'm <span className="text-amber-400 underline">Prabhat</span> , a
            Full-Stack MERN web developer with experties in Front-End webapp
            development.
          </h3>
          <h3 className="font-poppins text-lg font-bold capitalize leading-6 text-violet-200">
            This website holds information about my web development journey
            and the projects i have made till now.
          </h3>
        </div>
      </section>
    </>
  )
}

export default Header