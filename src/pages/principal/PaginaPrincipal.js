import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Buttons from '../../components/buttons/Buttons';
import styles from './PaginaPrincipal.module.css'; // Actualiza esta línea
import imagenPaginaPrincipal from "../../components/utils/imagen-pagina-principal-sin-fondo.jpg";
import logoSinFondo from "../../components/utils/logo-sin-fondo.png";
import '../../App.css';
import {useAuth} from "../../context/AuthContext";

const PaginaPrincipal = () => {

    const { isLoggedIn, userType } = useAuth();

    return (
        <div className={styles['pg-principal-container']}>
            <Navbar/>
            <Buttons isLoggedIn={isLoggedIn} userType={userType}/>
            <img src={imagenPaginaPrincipal} alt="Descripción de la imagen" className={styles['pg-principal-imagen-full-width']}/>
            <img src={logoSinFondo} alt="Logo" className={styles['pg-principal-imagen-logo-esquina']}/>
            <div className={styles['pg-principal-rectangulo-personalizado']}></div>
        </div>
    );
};

export default PaginaPrincipal;