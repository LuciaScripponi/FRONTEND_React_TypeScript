import { useState } from "react";
import { Button, Col, Form, Nav, Navbar, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {

  const navigate = useNavigate();
  const [termino, setTermino] = useState<string>("");

  const changeHandler = async(e:any) =>{
    await setTermino(e.target.value);
  } 

  const buscar = async () => {   //Funcion para buscar instrumentos por nombre, segun letras ingresadas en la barra de busqueda.
    console.log("Buscar " + termino);   //Devuelve todos los que contengan en el nombre lo que coloque
    navigate('/buscar/'+ termino); 
    window.location.reload();
  }

  const handleKeyDown = (e:any) => {  //Al presionar Enter en la barra de busqueda, tambien se iniciar el metodo de busqueda por termino
    if (e.key === 'Enter') {
      buscar();
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Map">Donde Estamos</Nav.Link>
          <Nav.Link href="/listaInstrumentos">Productos</Nav.Link>
          <Nav.Link href="/grilla">Grilla Instrumentos</Nav.Link>
          <Form>
              < Row>
              <Col md={8}><Form.Control type="Text" placeholder="Buscar" defaultValue={termino} onChange={changeHandler} onKeyDown={handleKeyDown}/></Col>
              <Col md={4}><Button type="button" onClick={buscar} variant="outline-light">Search</Button></Col>
              </Row>
              </Form>
                <br></br>     
                <br></br>    
        </Nav>
      </Navbar>
    </>
  );
};
