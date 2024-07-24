import React from 'react';
import styles from './PaginaCanjearPuntos.module.css';
import logoSinFondo from "../../components/utils/logo-sin-fondo.png";
import Navbar from "../../components/navbar/Navbar";
import { useAuth } from "../../context/AuthContext";

const PaginaCanjearPuntos = () => {

    const { userType } = useAuth(); // Obtiene el userType del contexto

    return (
        <div className={styles['pg-principal-container']}>
            <img src={logoSinFondo} alt="Logo" className={styles['pg-principal-imagen-logo-esquina']}/>
            <Navbar/>
        </div>
    );
};

export default PaginaCanjearPuntos;