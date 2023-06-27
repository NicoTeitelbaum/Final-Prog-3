import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';




function Registro() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');

  const handleSubmitRegistro = (e) => {
    e.preventDefault();

    // Guardar los valores en el localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('Email', campo1);
    localStorage.setItem('NomyApe', campo2);

    // Reiniciar los campos del formulario
    setUsername('');
    setPassword('');
    setCampo1('');
    setCampo2('');

    alert('Registro exitoso');
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
 
  const handleChange1 = (e) => {
    setCampo1(e.target.value);
  };
  const handleChange2 = (e) => {
    setCampo2(e.target.value);
  };


  return (
    <body className='body_registro'>
    <div className='grid-layout-registro'>
        <div className='caja_registro'>
        <Form className='frm_Registro' onSubmit={handleSubmitRegistro}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su usuario" value={username} onChange={handleUsername} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={handlePassword} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control type='Email' placeholder="Ingrese su email" value={campo1} onChange={handleChange1} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type='text' placeholder="Nombre y apellido" value={campo2} onChange={handleChange2} />
      </Form.Group>

      <Button className='btn_registro' variant="primary" type="submit">
        Registrarse!
      </Button>
      <Link to='/'>
      <Button className='btn_registro' variant="secondary" type="submit">
        Ir a login
      </Button>
      </Link>
    </Form>
        </div>
    </div>
    </body>
  );
}

export default Registro;