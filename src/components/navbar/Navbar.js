import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Navbar.module.css'; // Importa el CSS Module correctamente
import userLogo from './userLogo.png'; // Actualiza la ruta de la imagen según corresponda

const Navbar = () => {
    const history = useHistory();

    const handleLoginClick = () => {
        history.push('/login');
    };

    const handleInicioClick = () => {
        history.push('/');
    }

    const handleNosotrosClick = () => {
        history.push('/nosotros');
    }

    const handleFaqsClick = () => {
        history.push('/faqs');
    }

    const handleNoticiasClick = () => {
        history.push('/noticias');
    }

    const handleMapaClick = () => {
        history.push('/mapa');
    }

    return (
        <nav className={styles.navbar}>


            <button className={styles['inicio-btn'] + " " + styles['boton-navbar-estilo-comun']} onClick={handleInicioClick}>
                <div className={`${styles['contenido-inicio-btn']}`} style={{display: 'flex', alignItems: 'center'}}>
                    <p>Inicio</p>
                </div>
            </button>

            <button className={styles['nosotros-btn'] + " " + styles['boton-navbar-estilo-comun']} onClick={handleNosotrosClick}>
                <div className={`${styles['contenido-nosotros-btn']}`} style={{display: 'flex', alignItems: 'center'}}>
                    <p>Nosotros</p>
                </div>
            </button>

            <button className={styles['faqs-btn'] + " " + styles['boton-navbar-estilo-comun']} onClick={handleFaqsClick}>
                <div className={`${styles['contenido-faqs-btn']}`} style={{display: 'flex', alignItems: 'center'}}>
                    <p>FAQs</p>
                </div>
            </button>

            <button className={styles['noticias-btn'] + " " + styles['boton-navbar-estilo-comun']} onClick={handleNoticiasClick}>
                <div className={`${styles['contenido-noticias-btn']}`} style={{display: 'flex', alignItems: 'center'}}>
                    <p>Noticias</p>
                </div>
            </button>

            <button className={styles['mapa-btn'] + " " + styles['boton-navbar-estilo-comun']} onClick={handleMapaClick}>
                <div className={`${styles['contenido-mapa-btn']}`} style={{display: 'flex', alignItems: 'center'}}>
                    <p>Mapa</p>
                </div>
            </button>

            <button className={styles['login-btn'] + " " + styles['boton-login-estilo']} onClick={handleLoginClick}>
                <div className={`${styles['contenido-login-btn']}`} style={{display: 'flex', alignItems: 'center'}}>
                    <p>Log In</p>
                    <img src={userLogo} alt="Logo User" style={{marginLeft: '10px', height: '24px'}}/>
                </div>
            </button>
        </nav>
    );
};

export default Navbar;