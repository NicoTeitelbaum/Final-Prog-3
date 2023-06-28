import Button from 'react-bootstrap/Button';
import { useEffect , useState} from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';




function PeliculasEstreno({peliculas, estaDisponible}){
  return estaDisponible ? <li className='pelis'>{peliculas} - Esta disponible!</li> : <li>{peliculas} - Proximamente!</li>
}

function SeriesEstreno({series, estaDisponible}){
  return estaDisponible ? <li className='series'>{series} - Esta disponible!</li> : <li>{series} - Proximamente!</li>
}

function Menu() {

  const [fontSize, setFontSize] = useState("");
  const handleClickSize = () => {setFontSize ("20px")}


  useEffect(()=>{
    document.getElementById('caja_menu1').style.fontSize=fontSize;
    document.getElementById('caja_menu2').style.fontSize=fontSize;
},[fontSize])


  return (
    <>
      <div className='grid-layout-menu'>
          <div className='cajamenu' id='caja_menu1'>
            <div className='divprueba'>
              <h6>Series</h6>
            </div>
            <ul className='lista_menu'>
              <SeriesEstreno estaDisponible={true} series={"Doctor House"}/>
              <SeriesEstreno estaDisponible={true} series={"Las chicas del cable"}/>
              <SeriesEstreno estaDisponible={true} series={"Lucifer"}/>
              <SeriesEstreno estaDisponible={true} series={"Peaky Blinders"}/>
              <SeriesEstreno estaDisponible={true} series={"Stranger Things"}/> 
              <SeriesEstreno estaDisponible={true} series={"Grey's Anatomy"}/> 
              <SeriesEstreno estaDisponible={false} series={"The Big Bang Theory"}/> 
            </ul>
          </div>
          <div className='cajamenu' id='caja_menu2'>
            <div className='divprueba'>
              <h6>Peliculas</h6>
            </div>
              <ul className='lista_menu'>
              <PeliculasEstreno estaDisponible={true} peliculas={"Spider-Man"}/>
              <PeliculasEstreno estaDisponible={true} peliculas={"Black Adam"}/>
              <PeliculasEstreno estaDisponible={true} peliculas={"Venom"}/>
              <PeliculasEstreno estaDisponible={true} peliculas={"Uncharted"}/>
              <PeliculasEstreno estaDisponible={true} peliculas={"SpaceJam"}/> 
              <PeliculasEstreno estaDisponible={true} peliculas={"Super Mascotas"}/> 
              <PeliculasEstreno estaDisponible={false} peliculas={"Un Sueño Posible"}/> 
              </ul>
          </div>
      </div>
      <Button variant="primary" size="lg" className='btn_menu' onClick={handleClickSize}>
        Cambiar tamaño de la fuente
      </Button>
      <Link to='/rick-and-morty'><Button variant="primary" size="lg" className='btn_menu'>Rick and Morty info</Button></Link>
    </>
  );
}

export default Menu;