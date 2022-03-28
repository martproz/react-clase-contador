import React from 'react';
import '../hojas-de-estilo/Boton.css';

class Boton extends React.Component {
  render () {
    return (
      <button //¿Es botón de clic? Si true retorna "boton clic". Si false retorna el valor "boton reiniciar".
        className={this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
        //tenemos dsps que decidir qué pasa cuando se hace clic sobre el botón
        //la función del event listener onclic se recibirá como un prop, "manejar clic"
        //la función manejarClic viene del componente que renderice al botón
        onClick={this.props.manejarClic}> 
          {this.props.texto}
      </button>
    );
  }
}

export default Boton;