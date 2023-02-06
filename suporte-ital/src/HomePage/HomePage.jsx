import React, {useContext}from "react";
import { AuthContext } from "../contexts/auth";

import './style.css';

const HomePage = () => {

    const {authenticated,logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }
    return(
    <>
     <div id="HomePage">
       <h1>SUPORTE</h1>
       <p>{String()}</p>
        
            <main>
                <section>
                    <ul id="teste">
                        <li><a  href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Teste</a></li>
                    </ul>
                </section>
            </main>
        </div>
        <div id="texto">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
    </>
    );
};



export default HomePage;