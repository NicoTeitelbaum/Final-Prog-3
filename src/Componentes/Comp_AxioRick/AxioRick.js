import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './AxioRick.css';

function AxioRick() {
  const [caracteres, setCaracteres] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCaracteres(response.data.results.slice(0, 6));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
  <body className='body_axio'>
    <div className='contenedor'>
    <Link to='/pagina-principal'><Button className='btn_axio'>Salir</Button></Link>      
    <h1 className='h1-contenedor'>Rick and Morty</h1>
      <Carousel interval={null}>
        {[0, 3].map((index) => (  /*Se utiliza un bucle map para generar dos diapositivas en el carrusel.*/
          <Carousel.Item key={index}>
            <div className="cartas-contenedor">
              {caracteres.slice(index, index + 3).map((car) => (
                <Card key={car.id} className="caracteres-cartas">
                  <Card.Img variant="top" src={car.image} />
                  <Card.Body>
                    <Card.Title>{car.name}</Card.Title>
                    <Card.Text>Species: {car.species}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </body>
  );
}

export default AxioRick;
