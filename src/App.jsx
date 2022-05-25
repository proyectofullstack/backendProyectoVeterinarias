import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./componentes/layouts/AuthLayout";
import RutaProtegida from "./componentes/layouts/RutaProtegida";
import ConfirmarCuenta from "./componentes/pages/ConfirmarCuenta";
import Consultas from "./componentes/pages/Consultas";
import Login from "./componentes/pages/Login";
import NuevoPassword from "./componentes/pages/NuevoPassword";
import OlvidePassword from "./componentes/pages/OlvidePassword";
import Registrar from "./componentes/pages/Registrar";
import { AuthProvider } from "./context/AuthProvider";

import "./App.css";
import NuevaConsulta from "./componentes/pages/NuevaConsulta";
import Farmacias from "./componentes/pages/Farmacias";
import { ConsultasProvider } from "./context/ConsultasProvider";
import Veterinarias from "./componentes/pages/Veterinarias";
import Consulta from "./componentes/pages/Consulta";
import EditarConsulta from './componentes/pages/EditarConsulta'


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ConsultasProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvidar-password" element={<OlvidePassword />} />
              <Route
                path="olvidar-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/consultas" element={<RutaProtegida />}>
              <Route index element={<Consultas />} />
              <Route path="crear-consulta" element={<NuevaConsulta />} />
              <Route path=":id" element={<Consulta/>} />
              <Route path="editar/:id" element={<EditarConsulta />} />


              <Route path="farmacias" element={<Farmacias />} />
              <Route path="veterinarias" element={<Veterinarias/>} />
            </Route>
          </Routes>
        </ConsultasProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
