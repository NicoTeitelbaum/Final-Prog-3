import { Link } from "react-router-dom";
import './BlackAdam.css'
import Button from 'react-bootstrap/Button';
import BlackTrailer from '../Comp_Trailers/BlackTrailer';

function BlackAdam() {
    return (
        <body className="body_black">
            <div className="grid-layout-black">
                <div className="black1">
                    <ul className="ul_black">
                        <li className="li_black_titulo"><h1>Black Adam</h1></li>
                        <li className="li_btn_black"><Link to='/pagina-principal'><Button className="btn_black" variant="primary">Volver al inicio</Button></Link></li>
                    </ul>
                </div>
                <div className="black2"><BlackTrailer /></div>
            </div>
        </body>
    )
}
export default BlackAdam;