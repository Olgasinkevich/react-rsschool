import React from 'react'
import './App.css';
import Cards from "./Cards/Cards";
import ToyForms from "./Cards/ToyForms/ToyForms";

window.addEventListener('load', () => {
    ToyForms();
    Cards();
})
function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="container">
                                 <div className="header__form-wrapper">
                        <input type="search" className="search border-home-page" autocomplete="off"/>
                    </div>
                </div>
            </header>

            <main className="main">
                <div className="container container-toys-page">
                </div>
                <div id="cards-wrapper" className="cards-wrapper">
                    <Cards onCreate = {Cards}/>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer__github_container footer__github_text">
                        © 2022
                        <a href="https://github.com/Olgasinkevich"> Olga Sinkevich </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;

/*
window.addEventListener('load', () => {
    ToyForms();
    Cards();
})
 */

       /*<!--
                    <nav className="nav-bar">
                        <a href="../index.html" className="header__logo switch-page"></a>
                        <a href="toys-page.html" className="switch-page active">Игрушки</a>
                        <a href="tree-page.html" className="switch-page active">Елка</a>
                    </nav>
-->

/*<!--<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
-->
 */
