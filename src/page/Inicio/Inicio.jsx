import React from 'react';
import './style.css';
import Card from '@/page/Inicio/components/Card';
import { ScanLine, Search } from 'lucide-react';

const Inicio = () => {
  return (
    <div className="inicio">
      <h3 className='titulo'>PANEL DE CONTROL</h3>
      <div className="centrado">

        {/* crear map de este componente */}
        <div className="filas">
          <Card number={9} text="MEMBRESÍAS" />
          <Card number={4} text="CLIENTES REGISTRADOS" />
          <Card number={7} text="ASISTENCIAS HOY" />
          <Card number={2} text="USUARIOS DEL SISTEMA" />
        </div>
      </div>
      <div className="registrar-asistencia">
      <h3 className="titulo">REGISTRAR ASISTENCIA</h3>
      <div className="asistencia-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Ingrese el código del cliente"
            className="input-codigo"
          />
          <button className="btn-buscar">
            <Search size={20} />
          </button>
        </div>
        <button className="btn-escanear">
          <ScanLine size={20} />
          Escanear Tarjeta
        </button>
      </div>
      <div className="cliente-info">
        <span>JONATHAN VILLEGAS ARANA</span>
      </div>
      <div className="botones-entrada-salida">
        <button className="btn-entrada">Marcar Entrada</button>
        <button className="btn-salida">Marcar Salida</button>
      </div>
    </div>
    </div>
  );
};

export default Inicio;
