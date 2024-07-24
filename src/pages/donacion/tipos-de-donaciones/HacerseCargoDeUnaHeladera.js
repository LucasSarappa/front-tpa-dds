import React from 'react';
import styles from './HacerseCargoDeUnaHeladera.module.css';
import logoSinFondo from "../../../components/utils/logo-sin-fondo.png";
import Navbar from "../../../components/navbar/Navbar";
import { useAuth } from "../../../context/AuthContext";
import BotonesHacerseCargo from "../../../components/donacion/tipos-de-donaciones/BotonesHacerseCargo"

const HacerseCargoDeUnaHeladera = () => {

    const { userType } = useAuth(); // Obtiene el userType del contexto

    return (
        <div className={styles['pg-principal-container']}>
            <img src={logoSinFondo} alt="Logo" className={styles['pg-principal-imagen-logo-esquina']}/>
            <Navbar/>
            <BotonesHacerseCargo/>
        </div>
    );
};

export default HacerseCargoDeUnaHeladera;