import { Link } from "react-router-dom";
import './SpaceJam.css'
import Button from 'react-bootstrap/Button';
import SpaceTrailer from '../Comp_Trailers/SpaceJamTrailer';

function SpaceJam(){
    return(
        <body className="body_space">
        <div className="grid-layout-space">
            <div className="space1">
                <ul className="ul_space">
                    <li className="li_space_titulo"><h1>SpaceJam</h1></li>
                    <li className="li_btn_space"><Link to='/pagina-principal'><Button className="btn_space" variant="primary">Volver al inicio</Button></Link></li>
                </ul>
            </div>
            <div className="space2"><SpaceTrailer/></div>
        </div>
        </body>
    )
}
export default SpaceJam;