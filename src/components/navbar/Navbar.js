import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
    const history = useHistory();
    const { isLoggedIn, userType, logout } = useAuth();
    const [isPuntosDropdownVisible, setPuntosDropdownVisible] = useState(false);

    const esColaborador = userType === 'juridica' || userType === 'humana';

    const handleCargarColaboradoresClick = () => {
        history.push('/PaginaCargarColaboradores');
    };

    const handleConsultarPuntosClick = () => {
        history.push('/PaginaConsultarPuntos');
    };

    const handleCanjearPuntosClick = () => {
        history.push('/PaginaCanjearPuntos');
    };

    const handleReportarFallasClick = () => {
        history.push('/PaginaReportarFallas');
    };

    const handleLogoutClick = () => {
        logout();
        history.push('/');
    };

    const handleLoginClick = () => {
        history.push('/login');
    };

    const handleInicioClick = () => {
        history.push('/');
    };

    const handleNosotrosClick = () => {
        history.push('/nosotros');
    };

    const handleFaqsClick = () => {
        history.push('/faqs');
    };

    const handleNoticiasClick = () => {
        history.push('/noticias');
    };

    const handleMapaClick = () => {
        history.push('/PaginaMapa');
    };

    return (
        <nav className={styles.navbar}>
            <button className={styles['inicio-btn'] + " " + styles['boton-navbar-estilo-comun']}
                    onClick={handleInicioClick}>
                <div className={`${styles['contenido-inicio-btn']}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <p>Inicio</p>
                </div>
            </button>

            <button className={styles['nosotros-btn'] + " " + styles['boton-navbar-estilo-comun']}
                    onClick={handleNosotrosClick}>
                <div className={`${styles['contenido-nosotros-btn']}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <p>Nosotros</p>
                </div>
            </button>

            <button className={styles['faqs-btn'] + " " + styles['boton-navbar-estilo-comun']}
                    onClick={handleFaqsClick}>
                <div className={`${styles['contenido-faqs-btn']}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <p>FAQs</p>
                </div>
            </button>

            <button className={styles['noticias-btn'] + " " + styles['boton-navbar-estilo-comun']}
                    onClick={handleNoticiasClick}>
                <div className={`${styles['contenido-noticias-btn']}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <p>Noticias</p>
                </div>
            </button>

            <button className={styles['mapa-btn'] + " " + styles['boton-navbar-estilo-comun']}
                    onClick={handleMapaClick}>
                <div className={`${styles['contenido-mapa-btn']}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <p>Mapa</p>
                </div>
            </button>

            {isLoggedIn && esColaborador && (
                <>
                    <button className={styles['cargarColaboradores-btn'] + " " + styles['boton-navbar-estilo-comun']}
                            onClick={handleCargarColaboradoresClick}>
                        <div className={`${styles['contenido-cargarColaboradores-btn']}`}
                             style={{ display: 'flex', alignItems: 'center' }}>
                            <p>Cargar Colaboradores</p>
                        </div>
                    </button>
                    <div className={styles['puntos-dropdown-container']}
                         onMouseEnter={() => setPuntosDropdownVisible(true)}
                         onMouseLeave={() => setPuntosDropdownVisible(false)}>
                        <button className={styles['puntos-btn'] + " " + styles['boton-navbar-estilo-comun']}>
                            <div className={`${styles['contenido-puntos-btn']}`}
                                 style={{ display: 'flex', alignItems: 'center' }}>
                                <p>Puntos</p>
                            </div>
                        </button>
                        {isPuntosDropdownVisible && (
                            <div className={styles['puntos-dropdown']}>
                                <button onClick={handleConsultarPuntosClick}>Consultar Puntos</button>
                                <button onClick={handleCanjearPuntosClick}>Canjear Puntos</button>
                            </div>
                        )}
                    </div>
                    <button className={styles['fallas-btn'] + " " + styles['boton-navbar-estilo-comun']}
                            onClick={handleReportarFallasClick}>
                        <div className={`${styles['contenido-fallas-btn']}`}
                             style={{ display: 'flex', alignItems: 'center' }}>
                            <p>Reportar Fallas</p>
                        </div>
                    </button>
                </>
            )}

            {isLoggedIn ? (
                <div>
                    <button className={styles['login-btn'] + " " + styles['boton-login-estilo']}
                            onClick={handleLogoutClick}>
                        Log Out
                    </button>
                    <span className={styles.userTypeText}>{`Sesión iniciada como: ${userType}`}</span>
                </div>
            ) : (
                <button className={styles['login-btn'] + " " + styles['boton-login-estilo']}
                        onClick={() => history.push('/login')}>
                    Log In
                </button>
            )}
        </nav>
    );
};

export default Navbar;