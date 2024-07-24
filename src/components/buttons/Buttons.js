import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Buttons.module.css';
import logoSolicitar from '../utils/logoSolicitar.png';
import logoColaborar from '../utils/logoColaborar.png';

const Buttons = ({ isLoggedIn, userType }) => {
    const history = useHistory();

    const isJuridicaOrHumana = userType === 'juridica' || userType === 'humana';
    const isVulnerable = userType === 'vulnerable';

    const handleColaborarClick = () => {
        history.push('/PaginaDonacion'); // Navega hacia PaginaDonacion.js
    };

    const handleSolicitarClick = () => {
        // Implementa la lógica de navegación para el botón Solicitar
    };

    return (
        <div className={styles.container}>
            <button
                className={`${styles['colaborar-btn']} ${styles['boton-estilo-comun']} ${!isLoggedIn || isVulnerable ? styles.disabledBtn : ''}`}
                onClick={handleColaborarClick}
                disabled={!isLoggedIn || isVulnerable}
            >
                <img src={logoColaborar} alt="Logo Colaborar" style={{ marginRight: '10px', height: '24px' }} />
                Colaborar
            </button>
            <button
                className={`${styles['solicitar-btn']} ${styles['boton-estilo-comun']} ${!isLoggedIn || isJuridicaOrHumana ? styles.disabledBtn : ''}`}
                onClick={handleSolicitarClick}
                disabled={!isLoggedIn || isJuridicaOrHumana}
            >
                <img src={logoSolicitar} alt="Logo Solicitar" style={{ marginRight: '10px', height: '24px' }} />
                Solicitar
            </button>
        </div>
    );
};

export default Buttons;