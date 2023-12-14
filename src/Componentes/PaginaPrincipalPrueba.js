import CardSeries from './Comp_Card/CardSeries';
import CardPelis from './Comp_CardPelis/CardPelis';
import ContadorLikes from './Comp_Likes/ContadorLikes';
import Menu from './Comp_Menu/Menu';
import Titulos from './Comp_Titulo/Titulos';
import Button from 'react-bootstrap/Button';
import './PaginaPrincipalPrueba.css'
import { Link } from 'react-router-dom';

function PaginaPrincipal() {
  let NomTitulo = "EL REY DE LAS PELICULAS";
  let MenuTitulo = "Peliculas y Series";
  const nombre = localStorage.getItem('NomyApe')
  return (
    <>
      <body id='body_principal'>
        <div className="grid-layout-principal">

          <div className="caja c1">
            <ul className='ul_titulo'>
              <li className='lb_titulo'><label>Bienvenido {nombre}</label></li>
              <li className='li_titulo'><Titulos title={NomTitulo} /></li>
              <li className='btn_titulo'><Link to='/'><Button className='btn_titulo' >Salir</Button></Link></li>
            </ul>
          </div>

          <div className="caja c2">
            <CardPelis />
          </div>

          <div className="caja c3">
            <Titulos titleMenu={MenuTitulo} />
            <Menu />
          </div>

          <div className="caja c4">
            <h3>Proximos Estrenos</h3>
            <CardSeries />
          </div>

          <div className="caja c5">
            <ContadorLikes />
          </div>

        </div>
      </body>
    </>
  )
}
export default PaginaPrincipal;