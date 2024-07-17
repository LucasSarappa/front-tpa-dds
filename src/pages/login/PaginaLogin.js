import React, { useState } from 'react';
import styles from './PaginaLogin.module.css';
import { useHistory } from 'react-router-dom'; // Changed from useNavigate to useHistory
import IconoPJ from './IconoPJ.png';
import IconoPH from './IconoPH.png';
import PaginaPrincipal from "../principal/PaginaPrincipal";

const PaginaLogin = () => {
    const [active, setActive] = useState(false);
    const [personaType, setPersonaType] = useState(null);
    //Funcionalidad para el botón LogIn (no está en uso)
    /*
    const history = useHistory(); // Initialize useHistory instead of useNavigate

    const handleLogin = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        history.push('/'); // Cambia 'PaginaPrincipal' por '/'
    };
    */

    return (
        <div className={`${styles.container} ${active ? styles.active : ''}`}>
            <div className={styles.signupSection}>
                <header onClick={() => setActive(false)}>Registrate como...</header>
                <div className={styles['social-buttons']}>
                    <button onClick={() => setPersonaType('juridica')} className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPJ} alt="Icono Persona Jurídica"/>
                        <div>Persona Juridica</div>
                    </button>
                    <button onClick={() => setPersonaType('humana')} className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPH} alt="Icono Persona Humana"/>
                        <div>Persona Humana</div>
                    </button>
                </div>
                <div className={styles.separator}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>

                {personaType === 'juridica' && (
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Company Name" required/>
                        <input type="email" placeholder="Company Email Address" required/>
                        <input type="password" placeholder="Password" required/>
                        <a href="#">Forget Password?</a>
                        <button type="submit" className={styles.btn}>Signup</button>
                    </form>
                )}

                {personaType === 'humana' && (
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Full Name" required/>
                        <input type="email" placeholder="Email Address" required/>
                        <input type="password" placeholder="Password" required/>
                        <a href="#">Forget Password?</a>
                        <button type="submit" className={styles.btn}>Signup</button>
                    </form>
                )}
            </div>

            <div className={styles.loginSection}>
                <header onClick={() => setActive(true)}>Inciar Sesion como...</header>
                <div className={styles['social-buttons']}>
                    <button onClick={() => setPersonaType('juridica')} className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPJ} alt="Icono Persona Jurídica"/>
                        <div>Persona Juridica</div>
                    </button>
                    <button onClick={() => setPersonaType('humana')} className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPH} alt="Icono Persona Humana"/>
                        <div>Persona Humana</div>
                    </button>
                </div>

                <div className={styles.separator}>
                    <div className={styles.line}></div>
                    <p>Or</p>
                    <div className={styles.line}></div>
                </div>

                {personaType === 'juridica' && (
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="Company Email Address" required/>
                        <input type="password" placeholder="Password" required/>
                        <a href="#">Forget Password?</a>
                        <button type="submit" className={styles.btn}>Login</button>
                    </form>
                )}

                {personaType === 'humana' && (
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="Email Address" required/>
                        <input type="password" placeholder="Password" required/>
                        <a href="#">Forget Password?</a>
                        <button type="submit" className={styles.btn}>Login</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PaginaLogin;