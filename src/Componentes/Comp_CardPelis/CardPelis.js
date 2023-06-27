import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./CardPelis.css";
import Spiderman from "../../Recursos/Spiderman.jpg";
import Venom from "../../Recursos/Venom.jpg";
import Uncharted from "../../Recursos/Uncharted.jpg";
import BlackAdamn from "../../Recursos/BlackAdam.jpg";
import SuperMascotas from "../../Recursos/SuperMascotas.jpg";
import SpaceJam from "../../Recursos/SpaceJam.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";


function CardPelis() {
  return (
    <Carousel className="carrusel" interval={null}>
      <Carousel.Item>
        <CardGroup id="cartas">
          <Card id="grupo1">
            <Card.Img variant="top" src={Spiderman} />
            <Card.Body>
              <Card.Title>
                Spider-Man: Sin Camino a Casa (Edición Extendida)
              </Card.Title>
              <Card.Text>
                <p>
                  Tom Holland, Zendaya y Benedict Cumberbatch estelarizan la
                  versión extendida y más divertida de esta aventura donde
                  Spider-Man se enfrenta a sus mayores enemigos luego de que el
                  Dr. Strange abre, sin querer, una grieta en el Multiverso.
                </p>
              </Card.Text>
              <Link to="/spider-man">
                <Button variant="primary">Ver</Button>
              </Link>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card id="grupo2">
            <Card.Img variant="top" src={Venom} />
            <Card.Body>
              <Card.Title>Venom: Carnage Liberado</Card.Title>
              <Card.Text>
                <br></br>
                <p>
                  Tom Hardy y Woody Harrelson interpretan a Eddie Brock y Cletus
                  Kasady en una batalla mortal junto a sus simbiontes Venom y
                  Carnage.
                </p>
                <br></br>
              </Card.Text>
              <Link to="/venom">
                <Button variant="primary">Ver</Button>
              </Link>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card id="grupo3">
            <Card.Img variant="top" src={Uncharted} />
            <Card.Body>
              <Card.Title>Uncharted: Fuera del Mapa</Card.Title>
              <Card.Text>
                <br></br>
                <p>
                  Tom Holland y Mark Wahlberg protagonizan esta aventura y se
                  embarcan en un peligroso viaje para encontrar el mayor tesoro
                  jamás buscado.
                </p>
                <br></br>
              </Card.Text>
              <Link to="/uncharted">
                <Button variant="primary">Ver</Button>
              </Link>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </CardGroup>
      </Carousel.Item>
      <Carousel.Item>
        <CardGroup id="cartas">
          <Card id="grupo4">
            <Card.Img variant="top" src={BlackAdamn} />
            <Card.Body>
              <Card.Title>Black Adam</Card.Title>
              <Card.Text>
                <br></br>
                <p>
                  Luego de casi 5000 años de recibir los poderes de los antiguos
                  dioses y ser encarcelado con la misma rapidez, Black Adam es
                  liberado de su tumba terrenal, listo para dar rienda suelta a
                  su único sentido de justicia en el mundo moderno.
                </p>
              </Card.Text>
              <Link to="/black-adam">
                <Button variant="primary">Ver</Button>
              </Link>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card id="grupo5">
            <Card.Img variant="top" src={SpaceJam} />
            <Card.Body>
              <Card.Title>Space Jam: Una Nueva Era</Card.Title>
              <Card.Text>
                <br></br>
                <p>
                  ¡Te damos la bienvenida al mundo de Space Jam! El ícono
                  mundial de la NBA LeBron James se embarca en una aventura
                  épica junto al personaje clásico Bugs Bunny en un evento que
                  combina animación y actores reales, Space Jam: Una nueva era.
                </p>
              </Card.Text>
              <Link to="/space-jam">
                <Button variant="primary">Ver</Button>
              </Link>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card id="grupo6">
            <Card.Img variant="top" src={SuperMascotas} />
            <Card.Body>
              <Card.Title>DC Liga de Supermascotas</Card.Title>
              <Card.Text>
                <p>
                  Krypto debe convencer a un grupo diverso, un sabueso, un
                  cerdo, una tortuga y una ardilla, de que dominen sus nuevos
                  poderes y lo ayuden a rescatar a la Liga de la Justicia.
                </p>
                <br></br>
              </Card.Text>
              <Link to="/super-mascotas">
                <Button variant="primary">Ver</Button>
              </Link>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </CardGroup>
      </Carousel.Item>
    </Carousel>
  );
}

export default CardPelis;
