import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { deleteInstrumentoPorId, getInstrumentosJSONFetch } from "../service/FuncionesAPI";
import Instrumento from "../model/Instrumento";
import { Navigation } from "./Navigation";

export const GrillaInstrumentos = () => {

  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

 
  const getInstrumentos = async () =>{
    let datos:Instrumento[] = await getInstrumentosJSONFetch();  //Llamo a la funcion que se comunica con el endpoint del back para listar todos los instrumentos
    setInstrumentos(datos);
  }

  //Hook para renderizar el componente
  useEffect(()=>{
    getInstrumentos();
  },[] );

const deleteInstrumento = async (idInstrumento: number) => {
    await deleteInstrumentoPorId(idInstrumento);
    window.location.reload();
  };

  return (  //Lo que devuelve el componente que se visualizara en el navegador, cuando se renderize
    <>
      <Navigation></Navigation>
      <Container fluid="md">
        <br />
        <Button href={`/formulario/0`} variant="outline-primary">  {/* Al presionar el boton Nuevo, le paso el ID 0 en la ruta, asi me carga el formulario vacío */}
          Nuevo
        </Button>
        <Row>
          <Col md={1}>
            <b>ID</b>
          </Col>
          <Col md={3}>
            <b>Nombre</b>
          </Col>
          <Col md={2}>
            <b>Marca</b>
          </Col>
          <Col md={2}>
            <b>Modelo</b>
          </Col>
          <Col md={2}>
            <b>Precio</b>
          </Col>
          <Col md={1}>
            <b>Modificar</b>
          </Col>
          <Col md={1}>
            <b>Eliminar</b>
          </Col>
        </Row>
        {instrumentos.map((instrumento: Instrumento) => (   //Recorro el array de instrumentos para mostrarlos en la grilla
          <Row key={instrumento.id}>
            <Col md={1}>{instrumento.id}</Col>
            <Col md={3}>{instrumento.instrumento}</Col>
            <Col md={2}>{instrumento.marca}</Col>
            <Col md={2}>{instrumento.modelo}</Col>
            <Col md={2}>{instrumento.precio}</Col>
            <Col md={1}>
              <Button
                variant="outline-warning"
                href={`/formulario/` + instrumento.id}  //Al presionar el boton Modificar, le paso el ID del que quiero cambiar en la ruta
              >                                        
                Modificar
              </Button>
            </Col>
            <Col md={1}>
              <Button
                variant="outline-danger"
                onClick={() => deleteInstrumento(instrumento.id)}  //Al presionar el boton Eliminar, le paso el ID del instrumento que se va borrar
              >
                Eliminar
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};
