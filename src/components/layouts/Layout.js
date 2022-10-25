import Header from './Header.js'
import Navbar from './Navbar.js';
import Main from './Main.js';
import Footer from './Footer.js'

import './Layout.css';


function Layout() {
    // Properties ---------
    //  Hooks ---------
    // Contect ---------
    // Methods ---------
    // View ---------
    return (
        <div className='grid-container'>
            <Header />
            <Navbar />
            <Main/>
            
            <Footer/>
        </div>
    )

}

export default Layout;