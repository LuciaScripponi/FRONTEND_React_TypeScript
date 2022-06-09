import Instrumento from "../model/Instrumento";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ItemInstrumento } from "./ItemInstrumento";
import { Navigation } from "./Navigation";
import { getInstrumentosJSONFetch,getInstrumentosPorBusqueda} from "../service/FuncionesAPI";
import { useParams } from "react-router-dom";



export const ListaInstrumentos = () => {
  const { termino } = useParams();  //Hook para obtener el termino ingresado en la barra de búsqueda
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);  //Hook para setear el instrumento y usar su estado

  const getInstrumentos = async () => {
    console.log("TERMINO " + termino);

    if (termino && termino != "") {
      let datos: Instrumento[] = await getInstrumentosPorBusqueda(termino);  //Llamo a la funcion que se comunica con el backend para buscar el instrumento 
      setInstrumentos(datos);                                                //segun el termino ingresado en la barra de busqueda
    } else {
      let datos: Instrumento[] = await getInstrumentosJSONFetch();  //Si se apreta Buscar sin colocar nada en la barra de busqueda, lista todos los instrumentos
      setInstrumentos(datos);
    }
  };

  //Hook para renderizar el componente
  useEffect(() => {
    getInstrumentos();
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <Container fluid="md" style={{ width: "50rem" }}>
        <Row>
          {instrumentos.map((instrumento: Instrumento) => (  //Recorro el array de instrumentos para mostrarlos en el componente renderizado
            <Row key={instrumento.id}>
              <ItemInstrumento
                key={instrumento.id}
                id={instrumento.id}
                instrumento={instrumento.instrumento}
                imagen={instrumento.imagen}
                precio={instrumento.precio}
                costoEnvio={instrumento.costoEnvio}
                cantidadVendida={instrumento.cantidadVendida}
              ></ItemInstrumento>
            </Row>
          ))}
        </Row>
      </Container>
    </>
  );
};
