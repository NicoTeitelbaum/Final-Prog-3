import PaginaPrincipalPrueba from "./Componentes/PaginaPrincipalPrueba";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlackAdam from "./Componentes/Comp_BlackAdam/BlackAdam";
import Login from "./Componentes/Comp_Login/Login";
import Registro from "./Componentes/Comp_Registro/Registro";
import SpiderMan from "./Componentes/Comp_SpiderMan/SpiderMan";
import Uncharted from "./Componentes/Comp_Uncharted/Uncharted";
import SpaceJam from "./Componentes/Comp_SpaceJam/SpaceJam";
import SuperMascotas from "./Componentes/Comp_SuperMascotas/SuperMascotas";
import VenomPeli from "./Componentes/Comp_Venom/VenomPeli";
import AxioRick from "./Componentes/Comp_AxioRick/AxioRick";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pagina-principal" element={<PaginaPrincipalPrueba/>}></Route>
          <Route path="/black-adam" element={<BlackAdam />}></Route>
          <Route path="/space-jam"  element={<SpaceJam/>}></Route>
          <Route path="/spider-man" element={<SpiderMan/>}></Route>
          <Route path="/super-mascotas" element={<SuperMascotas/>}></Route>
          <Route path="/uncharted" element={<Uncharted/>}></Route>
          <Route path="/venom" element={<VenomPeli/>}></Route>
          <Route path="/rick-and-morty" element={<AxioRick/>}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/registro" element={<Registro/>}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
