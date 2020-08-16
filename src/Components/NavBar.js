import React from 'react'
import '../Components/Page.css'

function NavBar(params) {
    return(
        <div>
            <nav className="navbar">
                <div className="container">
                    <a href="#">Hulk</a>
                         {/* Currently Active  */}
                    <a href="#" className="logo is-active">Mavel</a>
                    <a href="#">Venom</a>
                </div>
            </nav>
        </div>
    )
    
}
export default NavBar