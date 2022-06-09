import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getInstrumentoXIdFectch, saveInstrumento } from "../service/FuncionesAPI";
import Instrumento from "../model/Instrumento";
import { Navigation } from "./Navigation";

export const FormularioInstrumento = () => {
  const navigate = useNavigate();  //Hook para pasar parametros, en este caso si es modificar, el formulario debe llenarse con los datos del Instrumento
                                    //Si es agregar, el formulario debe estar vacío

  const { idinstrumento } = useParams();  //Hook para obtener el ID del instrumento (Si hay ID es modificar, si el ID es 0, sera para agregar un instrumento)
  const [instrumento, setInstrumento] = useState<Instrumento>(
    new Instrumento()
  );

  //Seteo el instrumento y cambio su estado con el hook de useState
  const getInstrumento = async () => {
    if (Number(idinstrumento) !== 0) {
      let instrumentoSelect: Instrumento = await getInstrumentoXIdFectch(
        Number(idinstrumento)
      );
      setInstrumento(instrumentoSelect);
    } else {
      let instrumentoSelect: Instrumento = new Instrumento();
      setInstrumento(instrumentoSelect);
    }
  };

  //Hook para renderizar el componente
  useEffect(() => {
    getInstrumento();
  }, []);

  const save = async () => {
    console.log(instrumento.instrumento);
    await saveInstrumento(instrumento);
    navigate("/grilla");
  };
  return (   //Lo que devuelve el componente que se visualizara en el navegador, cuando se renderize
    <>
      <Navigation></Navigation>
      <div className="center">
        <Form className="form-control">
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese el nombre"
              defaultValue={instrumento?.instrumento}
              onChange={(e) =>
                (instrumento.instrumento = String(e.target.value))
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMarca">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese la marca"
              defaultValue={instrumento?.marca}
              onChange={(e) => (instrumento.marca = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicModelo">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese el modelo"
              defaultValue={instrumento?.modelo}
              onChange={(e) => (instrumento.modelo = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImagen">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese la imagen"
              defaultValue={instrumento?.imagen}
              onChange={(e) => (instrumento.imagen = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese el precio"
              defaultValue={instrumento?.precio}
              onChange={(e) => (instrumento.precio = Number(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCostoEnvio">
            <Form.Label>Costo Envio</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese el costo de envío"
              defaultValue={instrumento?.costoEnvio}
              onChange={(e) =>
                (instrumento.costoEnvio = String(e.target.value))
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCantidadVendida">
            <Form.Label>Camtidad Vendida</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese la cantidad vendida"
              defaultValue={instrumento?.cantidadVendida}
              onChange={(e) =>
                (instrumento.cantidadVendida = Number(e.target.value))
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescripción">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Ingrese la descripción"
              defaultValue={instrumento?.descripcion}
              onChange={(e) =>
                (instrumento.descripcion = String(e.target.value))
              }
            />
          </Form.Group>
          <br />
          <br />
          <br />
          <Button onClick={save} variant="primary" type="button">
            Guardar
          </Button>
        </Form>
      </div>
    </>
  );
};
