import React, { useEffect } from 'react';
import styles from './PaginaMapa.module.css';
import L from 'leaflet';

const PaginaMapa = () => {
    useEffect(() => {
        const initMap = () => {
            var centroMapa = [-34.6037, -58.3816]; // Buenos Aires, Argentina

            // Crear el mapa
            var map = L.map('map').setView(centroMapa, 12); // Zoom inicial: 12

            // Agregar capa de OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // Arreglo de coordenadas de las heladeras comunitarias
            var heladeras = [
                [-34.607, -58.407],
                [-34.617, -58.391],
                [-34.598, -58.373]
            ];

            for (var i = 0; i < heladeras.length; i++) {
                L.marker(heladeras[i]).addTo(map).bindPopup('Heladera ' + (i + 1)).openPopup();
            }
        };

        document.addEventListener('DOMContentLoaded', initMap);

        // Cleanup event listener
        return () => {
            document.removeEventListener('DOMContentLoaded', initMap);
        };
    }, []);

    return (
        <div>
            <nav className={styles.navbar}>
                <ul>

                </ul>
            </nav>
            <div id="map" className={styles.map}></div>
        </div>
    );
};

export default PaginaMapa;
