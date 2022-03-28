import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(( {numClics} )=> (  { numClics: numClics + 1} ));
  }

  reiniciarContador() {
    this.setState( {numClics: 0} );
  }

  render() {
    return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt= 'Logo de freeCodeCamp' 
          />
        </div>
        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />
          <Boton 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic} //estamos diciendo que se asigne la función manejarClic entre llaves al prop manejarClic seguido de igual. Luego, como el prop MC tiene el valor {MC}, lo recibirá el botón onclick de Boton.js
            /> 
          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador}
            />
        </div>
      </div>
    );
  }
}

export default App;
