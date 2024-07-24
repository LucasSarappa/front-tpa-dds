import React from 'react';
import styles from './PaginaCargarColaboraciones.module.css';
import logoSinFondo from "../../components/utils/logo-sin-fondo.png";
import Navbar from "../../components/navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import CargarColaboraciones from "../../components/cargar-colaboraciones/CargarColaboraciones";


const PaginaCargarColaboraciones = () => {

    const { userType } = useAuth(); // Obtiene el userType del contexto

    return (
        <div className={styles['pg-principal-container']}>
            <img src={logoSinFondo} alt="Logo" className={styles['pg-principal-imagen-logo-esquina']}/>
            <Navbar/>
            <CargarColaboraciones/>
        </div>
    );
};

export default PaginaCargarColaboraciones;