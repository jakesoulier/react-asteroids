import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';   

function Header() {
    return (
        <header>
            <nav>
                <img src='/src/logo.png' alt='logo pic'/>
                <ul className='navbar'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            &copy;2022 | Jake Soulier | WDD230
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>This page</h1>
            <ul>
                <li>number 1</li>
                <li>number 2</li>
                <li>number 3</li>
            </ul>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById('root'));