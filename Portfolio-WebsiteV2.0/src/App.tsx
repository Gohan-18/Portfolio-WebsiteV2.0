import './App.css';

function App() {
  return (
    <>
    <section> 
      <header className='flex items-center justify-center rounded-b-xl w-screen header' >
        <nav className='flex items-center justify-between w-screen p-5 '>
            <ul className='flex items-center justify-between'>
              <li><a href="index.html" className="header-brand">Prabhat.</a></li>
              <li><a href="index.html" id="homeBtn">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
            <ul>
              <li><a href="#contact">Contact</a></li>
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
