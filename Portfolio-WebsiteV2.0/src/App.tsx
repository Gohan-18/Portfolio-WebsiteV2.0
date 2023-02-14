import './App.css';

function App() {
  return (
    <>
    <section> 
      <header className='flex items-center justify-center rounded-b-xl w-screen header' >
        <nav className='flex items-center justify-between w-screen p-5 '>
            <ul className='flex items-center justify-between gap-3'>
              <li><a href="index.html" className="font-catamaran font-black">PRABHAT.</a></li>
              <li><a href="index.html" id="homeBtn" className="font-poppins font-normal ">Home</a></li>
              <li><a href="#technologies" className="font-poppins font-normal">Technologies</a></li>
              <li><a href="#projects" className="font-poppins font-normal">Projects</a></li>
            </ul>
            <ul>
              <li><a href="#contact" className="font-poppins font-normal">Contact</a></li>
            </ul>
        </nav>
      </header>
    </section>

    <section>
      <main>

      </main>
    </section>

    <section>
      <footer>

      </footer>
    </section>

    </>
  )
}

export default App;
