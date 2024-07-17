import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Buttons.module.css';
import logoSolicitar from './logoSolicitar.png';
import logoColaborar from './logoColaborar.png';
import PaginaDonacion from "../../pages/donacion/PaginaDonacion.js";

const Buttons = () => {
    const history = useHistory();

    const handleColaborarClick = () => {
        history.push('/PaginaDonacion'); // Navega hacia PaginaDonacion.js
    };

    return (
        <div className={styles.container}>
            <div className={`${styles['blur-rectangle']} ${styles['bottom-right']}`}></div>

            <button className={`${styles['colaborar-btn']} ${styles['boton-estilo-comun']}`} onClick={handleColaborarClick}>
                <span></span><p>COLABORAR</p>
                <img src={logoColaborar} alt="Logo Colaborar" style={{ marginLeft: '10px', height: '24px' }} />
            </button>
            <button className={`${styles['solicitar-btn']} ${styles['boton-estilo-comun']}`}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>SOLICITAR</p>
                    <img src={logoSolicitar} alt="Logo Solicitar" style={{ marginLeft: '10px', height: '24px' }} />
                </div>
            </button>
        </div>
    );
};

export default Buttons;