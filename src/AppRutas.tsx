import React, { Component } from "react";
import { Home } from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DetalleInstrumento } from "./components/DetalleInstrumento";
import { ListaInstrumentos } from "./components/ListaInstrumentos";
import { Maps } from "./components/Maps";
import { GrillaInstrumentos } from "./components/GrillaInstrumentos";
import { FormularioInstrumento } from "./components/FormularioInstrumento";

class AppRutas extends Component {

  render() {

    return (
      <Routes>
        <Route path="/grilla" element={<GrillaInstrumentos />} />
        <Route path="/formulario/:idinstrumento" element={<FormularioInstrumento />} />
        <Route path="/listaInstrumentos" element={<ListaInstrumentos />} />
        <Route path="/buscar/:termino" element={<ListaInstrumentos />} />
        <Route path="/buscar/" element={<ListaInstrumentos />} />
        <Route path="/detalle">
          <Route path=":idInstrumento" element={<DetalleInstrumento />}></Route>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/Map" element={<Maps />} />
      </Routes>
    );
  }
}

export default AppRutas;