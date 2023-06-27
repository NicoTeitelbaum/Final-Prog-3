import './Login.css';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login(){
  const [usuario, setUsername] = useState('');
  const [pass, setPassword] = useState('');
  const [logueado, setLogueado] = useState(false);
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const compUsu = localStorage.getItem('username');
    const compPass = localStorage.getItem('password');

    if (usuario === compUsu && pass === compPass){
      setLogueado(true)
    }
    else{
      alert('Usuario o Contraseña incorrectos')
      setUsername('')
      setPassword('')
    }
  };
  
  const handleUsuario = (e) => {
    setUsername(e.target.value);
  }

  const handlePass = (e) => {
    setPassword(e.target.value);
  }

  if(logueado){
    navigate('/pagina-principal')
  }


  return(
    <>
    <body className='body_login'>
      <div className="grid-layout-login">
        <div className="caja_login"> 
          <form className="frm_login" onSubmit={handleSubmitLogin}>
            <div className="cajita"><h1>Iniciar Sesion</h1></div>
            <div className="cajita">
              <div className='cajita2'>
              <label><b>Usuario:</b></label><br></br>
              <input type='text' placeholder='Usuario' value={usuario} onChange={handleUsuario}></input><br></br>
              <label><b>Contraseña:</b></label><br></br>
              <input type='password' placeholder='Contraseña' value={pass} onChange={handlePass}></input><br></br><br></br>
              <Button className='btn_loguear'variant="primary" type='submit'><b>Iniciar Sesion</b></Button>   
              <Link to='/registro'>
              <Button variant="link">Registrase</Button>
              </Link>           
              </div>  
            </div>
          </form>
        </div>
      </div>
    </body>   
    </>
  )
}
export default Login;