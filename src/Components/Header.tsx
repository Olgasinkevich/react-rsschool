import React from 'react';

 const Header = (): JSX.Element => {
   return (
    <header className="header">
        <div className="container">
            <nav className="nav-bar">
                <a href="../index.html" className="switch-page">Главная</a>
                <a href="toys-page.html" className="switch-page active">Игрушки</a>
                <a href="tree-page.html" className="switch-page active">Елка</a>
            </nav>
                    </div>
    </header>
);
}
export default Header;