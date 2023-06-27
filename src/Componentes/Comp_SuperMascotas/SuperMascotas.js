import { Link } from "react-router-dom";
import './SuperMascotas.css'
import Button from 'react-bootstrap/Button';
import SuperTrailer from '../Comp_Trailers/SuperMascotasTrailer';

function SuperMascotas(){
    return(
        <body className="body_super">
        <div className="grid-layout-super">
            <div className="super1">
                <ul className="ul_super">
                    <li className="li_super_titulo"><h1>Super Mascotas</h1></li>
                    <li className="li_btn_super"><Link to='/pagina-principal'><Button className="btn_super" variant="primary">Volver al inicio</Button></Link></li>
                </ul>
            </div>
            <div className="super2"><SuperTrailer/></div>
        </div>
        </body>
    )
}
export default SuperMascotas;