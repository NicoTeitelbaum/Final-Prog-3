import { Link } from "react-router-dom";
import './SpiderMan.css'
import Button from 'react-bootstrap/Button';
import SpiderManTrailer from "../Comp_Trailers/SpiderManTrailer";

function SpiderMan(){
    return(
        <>
        <body className="body_spider">
        <div className="grid-layout-spider">
            <div className="spider1">
                <ul className="ul_spider">
                    <li className="li_spider_titulo"><h1>Spider-Man</h1></li>
                    <li className="li_btn_spider"><Link to='/pagina-principal'><Button className="btn_spider" variant="primary">Volver al inicio</Button></Link></li>
                </ul>
            </div>
            <div className="spider2"><SpiderManTrailer/></div>
        </div>
        </body>
        </>
    )
}
export default SpiderMan;