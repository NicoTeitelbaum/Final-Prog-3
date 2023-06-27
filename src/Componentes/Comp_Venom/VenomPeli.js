import { Link } from "react-router-dom";
import './Venom.css'
import Button from 'react-bootstrap/Button';
import Venom from '../Comp_Trailers/VenomTrailer';

function VenomPeli(){
    return(
        <body className="body_venom">
        <div className="grid-layout-venom">
            <div className="venom1">
                <ul className="ul_venom">
                    <li className="li_venom_titulo"><h1>Venom</h1></li>
                    <li className="li_btn_venom"><Link to='/pagina-principal'><Button className="btn_venom" variant="primary">Volver al inicio</Button></Link></li>
                </ul>
            </div>
            <div className="venom2"><Venom/></div>
        </div>
        </body>
    )
}
export default VenomPeli;