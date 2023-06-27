import { Link } from "react-router-dom";
import './Uncharted.css'
import Button from 'react-bootstrap/Button';
import UnchartedTrailer from '../Comp_Trailers/UnchartedTrailer'

function Uncharted(){
    return(
        <body className="body_uncharted">
        <div className="grid-layout-uncharted">
            <div className="uncharted1">
                <ul className="ul_uncharted">
                    <li className="li_uncharted_titulo"><h1>Uncharted</h1></li>
                    <li className="li_btn_uncharted"><Link to='/pagina-principal'><Button className="btn_uncharted" variant="primary">Volver al inicio</Button></Link></li>
                </ul>
            </div>
            <div className="uncharted2"><UnchartedTrailer/></div>
        </div>
        </body>
    )
}
export default Uncharted;