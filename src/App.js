import React from 'react';
import './App.css'; // Importa el archivo CSS global
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PaginaPrincipal from './pages/principal/PaginaPrincipal';
import PaginaLogin from "./pages/login/PaginaLogin";
import PaginaDonacion from './pages/donacion/PaginaDonacion';
import PaginaMapa from './pages/mapa/PaginaMapa';
import 'leaflet/dist/leaflet.css';
import { AuthProvider } from './context/AuthContext';
import PaginaCargarColaboraciones from "./pages/cargar-colaboraciones/PaginaCargarColaboraciones";
import PaginaCanjearPuntos from "./pages/canjear-puntos/PaginaCanjearPuntos";
import PaginaConsultarPuntos from "./pages/consultar-puntos/PaginaConsultarPuntos";
import PaginaReportarFallas from "./pages/reportar-fallas/PaginaReportarFallas";
import HacerseCargoDeUnaHeladera from "./pages/donacion/tipos-de-donaciones/HacerseCargoDeUnaHeladera";

// Importa otros componentes de página según sea necesario

function App() {
    return (
        <AuthProvider>

        <div className="App body-background"> {/* Aplica la clase del fondo aquí */}
            <Router>
                <Switch>
                    <Route path="/" exact component={PaginaPrincipal}/>
                    <Route path="/login" component={PaginaLogin}/> {/* Asegúrate de que esta línea esté presente */}
                    <Route path="/PaginaDonacion" component={PaginaDonacion} />
                    <Route path="/PaginaMapa" component={PaginaMapa} />
                    <Route path="/PaginaCargarColaboraciones" component={PaginaCargarColaboraciones} />
                    <Route path="/PaginaConsultarPuntos" component={PaginaConsultarPuntos} />
                    <Route path="/PaginaCanjearPuntos" component={PaginaCanjearPuntos} />
                    <Route path="/PaginaReportarFallas" component={PaginaReportarFallas} />
                    <Route path="/HacerseCargoDeUnaHeladera" component={HacerseCargoDeUnaHeladera} />

                </Switch>
            </Router>
        </div>
        </AuthProvider>

    );
}

export default App;